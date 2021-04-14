import React, { Fragment, useState, useRef, useEffect } from 'react'
import { FormsProvider } from '../../context/forms-context'
import { useToast } from '../../hooks/useToast'
import { useFirebase } from '../../hooks/useFirebase'
import { useAuth } from '../../hooks/useAuth'

import {
  DivProfile,
  BoxProfile,
  ButtonProfile,
  ImageProfile,
} from '../../styles/index'
import {
  UserURL,
} from '../../assets/index'
import {
  InputEditableProfile,
  ModalSignDelete,
  ModalSignUpdate,
} from '../../components/index'


const UserProfile = ({ history }) => {
  // obtains the input values of the inputs
  const modalRef1 = useRef()
  const modalRef2 = useRef()

  // initialization of functionalities
  const [emailEdit, setEmailEdit] = useState('')
  const [usernameEdit, setUsernameEdit] = useState('')
  
  // methods of functionalities
  const { authUser } = useFirebase()
  const { updateDisplayName, updateEmail, deleteUser } = useAuth()
  const { showToast } = useToast()
  const provider = authUser.currentUser ? authUser.currentUser.providerData.providerId : null

  const msgProvider = provider => {
    switch (provider) {
      case 'password':
        return 'privée'
      default:
        break
    }
  }

  useEffect(() => {
    if (!authUser.initializing) {
      setEmailEdit(authUser.currentUser.email)
      setUsernameEdit(authUser.currentUser.displayName)
    }

  }, [authUser])

  // components childs
  const PhotoUser = () => {
    if (!authUser.initializing) {
      const photoURL = authUser.currentUser.photoURL
      if (photoURL) {
        return <ImageProfile src={photoURL} alt="Photo de son utilisateur" />
      }
    }
    return <UserURL />
  }

  const handleDisplayName = async username => {
    setUsernameEdit(username)
    const resp = await updateDisplayName(username)
    if (!resp) {
      localStorage.setItem('firstName', username)
    }
    handleAuthError(resp, 'info-update-profil')
  }

  const handleConfirmEmail = async email => {
    const cuEmail = authUser.currentUser.email
    if (email !== cuEmail) {
      setEmailEdit(email)
      modalRef1.current.open()
    }
  }
  
  const handleUpdateEmail = async (emailEdit, cuPassword) => {
    if (authUser && cuPassword === null) {
      const oldEmail = authUser.currentUser.email
      setEmailEdit(oldEmail)
      return ''
    }

    const resp = await updateEmail(emailEdit, cuPassword)
    handleAuthError(resp, 'info-update-profil')
  }

  const handleSignDelete = async cuPassword => {
    if (cuPassword === null) {
      return
    }
    const resp = await deleteUser(cuPassword)
    console.log(resp)
    handleAuthError(resp, 'success-account-delete')
  }

  // handle of alerts and errors
  function handleAuthError(resp, ctx) {
    switch (ctx) {
      case 'info-update-profil':
        if (!resp) {
          showToast(ctx)
          history.push('/profil')
        }
        break
      case 'success-account-delete':
        if (!resp) {
          showToast(ctx)
          history.push('/home')
        }
        break
      default:
        break
    }

    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/wrong-password':
          // The password is invalid or the user does not have a password
          showToast('warning-password-post')
          break
        case 'auth/too-many-requests':
          // Too many requests or unauthorized operation
          showToast('warning-auth')
          break
        default:
          // Unexplained malfunction or connection error
          showToast('danger-auth')
          history.push('/profil')
          break
      }
    }
  }

  return (
    <Fragment>
      <BoxProfile className="effect5">
        <FormsProvider>
          <DivProfile>
            <div className="titleForm">
              <h1 className="profil">Profil d&apos;utilisateur: <strong>{msgProvider(provider)}</strong></h1>
            </div>
            <div className="photoUser">
              <PhotoUser />
            </div>
            <div className="form-group">
              <InputEditableProfile
                value={emailEdit}
                id="email"
                history={history}
                refresh={email => handleConfirmEmail(email)}
              />
              <InputEditableProfile
                history={history}
                id="username"
                value={usernameEdit}
                refresh={username => handleDisplayName(username)}
              />
            </div>
            <div className="form-action">
              <ButtonProfile type="button" onClick={() => modalRef2.current.open()}>
                Supprimer
              </ButtonProfile>
            </div>
          </DivProfile>
        </FormsProvider>
      </BoxProfile>
      <ModalSignUpdate
        history={history}
        ref={modalRef1}
        confirm={cuPassword => handleUpdateEmail(emailEdit, cuPassword)}
      />
      <ModalSignDelete
        history={history}
        ref={modalRef2}
        confirm={cuPassword => handleSignDelete(cuPassword)}
      />
    </Fragment>
  )
}

export default UserProfile
