import { useState, useCallback, useEffect } from 'react'
import { auth } from '../firebase/initFirebase'


export const useFirebase = () => {
  const initContext = {
    loggedIn: false,
    token: null,
    userId: null,
  }
  const initUser = {
    initializing: true,
    currentUser: null,
    isAnonymous: false,
  }

  const [authContext, setAuthContext] = useState(initContext)
  const [authUser, setAuthUser] = useState(initUser)
  const [isLoading, setIsLoading] = useState(false)

  const ctxLogin = useCallback((token, uid) => {
    setAuthContext({ loggedIn: true, token: token, userId: uid })
  })
  
  const ctxProfil = useCallback((currentUser, isAnonymous) => setAuthUser({
    initializing: false,
    currentUser: currentUser,
    isAnonymous: isAnonymous,
  }))
  
  // make display of first name persistent in local
  const waitToRender = user => {
    let firstName
    firstName = user.isAnonymous 
      ? !user.displayName
        ? localStorage.setItem('firstName', 'Anonyme')
        : null
      : user.displayName
        ? localStorage.setItem('firstName', user.displayName.split(' ')[0])
        : localStorage.setItem('firstName', 'S\'identifier')
    // intercepts display of first name for navigation
    firstName = localStorage.getItem('firstName')

    const currentUser = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
      firstName: firstName,
      photoURL: user.photoURL,
      providerData: user.providerData[0],
    }

    return currentUser
  }
    
  const ctxLogout = useCallback(() => {
    setAuthContext(initContext)
    setAuthUser(initUser)
    localStorage.removeItem('firstName')
    localStorage.removeItem('emailSign')
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const currentUser = waitToRender(user)
        const isAnonymous = user.isAnonymous

        const token = await user.getIdToken()
        const uid = currentUser.uid
        ctxProfil(currentUser, isAnonymous)
        ctxLogin(token, uid)
      } else {
        ctxLogout()
        setIsLoading(true)
      }
    })
    
    return () => unsubscribe()
  }, [])

  return {
    ctxLogin,
    ctxLogout,
    authContext,
    authUser,
    isLoading,
  }
}
