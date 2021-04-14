import React, { Fragment, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useFirebase } from '../../hooks/useFirebase'
import { useAuth } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm'
import { useToast } from '../../hooks/useToast'

import {
  FormAuth,
  InputAuth,
  LabelAuth,
  ButtonAuth,
} from '../../styles/index'
import {
  Envelope,
} from '../../assets/index'
import {
  ModalSignChange,
} from '../../components/ModalSignChange'
import {
  initForms,
} from '../../commons/index'


const UserChangeAuth = ({ history }) => {
  // obtains the input values of the inputs
  const emailRef = useRef(null)
  const modalRef = useRef(null)

  // initialization of functionalities
  const { initialValid } = initForms()
  const envelope = <Envelope />

  // methods of functionalities
  const { isLoading, authContext } = useFirebase()
  const { activateLink } = useAuth()
  const { values, fields, errors, helps, valids, clear, bindField } = useForm(initialValid)
  const { showToast } = useToast()

  useEffect(() => {
    const paramsObj = Object.fromEntries([...new URLSearchParams(location.search)])
    const { mode } = paramsObj

    switch (mode) {
      case 'resetPassword':
        if (!authContext.loggedIn) {
          modalRef.current.open()
        }
        break
      case 'newPassword':
        modalRef.current.open()
        break
      default:
        // console.log('The selected page mode is invalid.')
        break
    }

  }, [])

  // handle of evenements submit forget auth
  const handleSubmit = async e => {
    e.preventDefault()
 
    // handle of valids parameters
    if (!values.email || Object.keys(values).length === 0) {
      handleAuthError(null, 'info-empty-auth')
      return
    }

    if (fields.email === '' && errors.email === '') {
      if (valids.email !== 'valide') return

      // confirm change password user with email
      const email = values.email
      const resp = await activateLink(email)
      handleAuthError(resp, 'info-confirm-forget')
    }
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'info-confirm-forget':
        if (!resp) {
          showToast(ctx)
          history.push('/home')
        }
        break
      case 'info-empty-auth':
        showToast(ctx)
        break
      case 'info-form-clean':
        clear(values, errors, fields, helps, valids)
        showToast(ctx)
        break
      default:
        // Unexplained malfunction or connection error
        showToast('danger-auth')
        history.push('/home')
        break
    }
    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/user-not-found':
          // User was not found
          showToast('warning-user-post')
          break
        default:
          // Unexplained malfunction or connection error
          showToast('danger-auth')
          history.push('/login')
          break
      }
    }
  }

  return (
    <Fragment>
      <ModalSignChange
        history={history}
        ref={modalRef}
      />
      {!authContext.loggedIn && isLoading && <FormAuth className="auth">
        <div className="titleForm">
          <h1>Changer mot de passe</h1>
          <p className="loginText">Veuillez remplir votre email pour recevoir un lien d&apos;authentification pour générer votre nouveau mot de passe.</p>
        </div>
        <div className="form-group">
          <LabelAuth htmlFor="email">Email</LabelAuth>
          <InputAuth
            type="text"
            id="email"
            className={valids.email ? "form-control show-green" : "form-control show-red"}
            aria-invalid={valids.email ? "true" : "false"}
            name="email"
            placeholder="example@email.com"
            ref={emailRef}
            {...bindField('email')}
          />
          <i>{envelope}</i>
          {fields.email && (
            <span className="helpError adjust1">{fields.email}</span>
          )}
        </div>
        <div className="form-action">
          <ButtonAuth
            type="button"
            value="Envoyer"
            onClick={e => handleSubmit(e)}
          />
          <ButtonAuth
            type="button"
            value="Vider"
            onClick={() => { handleAuthError(null, 'info-form-clean') }}
          />
          <p className="form-footer">Revenir pour  <Link to="/login">
            <span className="auth-span">s&apos;identifier</span>
          </Link>.</p>
        </div>
      </FormAuth>}
      <FormAuth />
    </Fragment>
  )
}

export default UserChangeAuth
