import firebase, { auth, emailProvider } from '../firebase/initFirebase'


export const useAuth = () => {
  // signup methods
  const signup = async (email, password, username) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
      updateDisplayName(username)

    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  const updateDisplayName = async username => {
    try {
      await auth.currentUser.updateProfile({ displayName: username })

    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  const updateEmail = async (emailEdit, cuPassword) => {
    try {
      const user = auth.currentUser
      const email = user.email
      const cred = emailProvider.credential(email, cuPassword)
      await user.reauthenticateWithCredential(cred)
      await user.updateEmail(emailEdit)
  
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }
  // signin methods
  const signin = async (email, passlogin) => {
    try {
      await auth.signInWithEmailAndPassword(email, passlogin)
  
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }
  
  // signout methods
  const signout = async () => {
    try {
      await auth.signOut()
  
    } catch(err) {
      return { code: err.code, message: err.message }
    }
  }

  // signin with anonymous
  const signinAnonymous = async () => {
    try {
      await auth.signInAnonymously()
  
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  // signup with anonymous
  const signupAnonymous = async (email, password, username) => {
    try {
      const credential = await emailProvider.credential(email, password)
      const user = auth.currentUser
      await user.linkWithCredential(credential)
      updateDisplayName(username)
  
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  // signout with anonymous
  const signoutAnonymous = async () => {
    try {
      await auth.currentUser.delete()
      await auth.signOut()

    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  
  // reauthentication Email + password
  // change password methods
  const updatePassword = async (cuPassword, newPassword) => {
    try {
      const user = auth.currentUser
      const email = user.email
      const credential = await firebase.auth.EmailAuthProvider.credential(email, cuPassword)
      const resp = await user.reauthenticateWithCredential(credential)
      try {
        await user.updatePassword(newPassword)
  
      } catch (err) {
        return { code: err.code, message: err.message }
      }
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  // request to send an email link for action manager
  const activateLink = async email => {
    try {
      const actionCodeSettings = {
        url: "http://localhost:8080/home",
        handleCodeInApp: true
      }

      await auth.sendPasswordResetEmail(email, actionCodeSettings)
      localStorage.setItem('emailSign', email)
      console.log('We sent you an activation link.')

    } catch (err) {
      console.log(err)
      return { code: err.code, message: err.message }
    }
  }

  // email action manager
  const ctxActions = async (paramsObj, arg) => {
    const { mode, oobCode, lang, continueUrl } = paramsObj

    switch (mode) {
      case 'resetPassword':
        handleResetPassword(auth, oobCode, continueUrl, lang, arg)
        break
      default:
        // console.log('The selected page mode is invalid.')
        break
    }
  }

  // email action manager for forgotten password
  const handleResetPassword = async (auth, oobCode, continueUrl, lang, arg) => {
    try {
      const emailLocal = localStorage.getItem('emailSign')
      const accountEmail = await auth.verifyPasswordResetCode(oobCode)

      if (emailLocal === accountEmail) {
        // console.log('same')
      }
      const newPassword = arg

      try {
        // Save the new password.
        await auth.confirmPasswordReset(oobCode, newPassword)
        localStorage.removeItem('emailSign')
        await auth.signInWithEmailAndPassword(accountEmail, newPassword)

      } catch (err) {
        return { code: err.code, message: err.message }
      }
      
      // return <Redirect to="/home" />
    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  // delete account methods
  const deleteUser = async cuPassword => {
    try {
      const user = auth.currentUser
      const email = auth.currentUser.email
      const credential = emailProvider.credential(email, cuPassword)
      await user.reauthenticateWithCredential(credential)
      await user.delete()
      signout()

    } catch (err) {
      return { code: err.code, message: err.message }
    }
  }

  return {
    signup,
    signin,
    signout,
    signinAnonymous,
    signupAnonymous,
    signoutAnonymous,
    updateDisplayName,
    updateEmail,
    updatePassword,
    activateLink,
    ctxActions,
    deleteUser,
  }
}