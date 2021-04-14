import React, { Fragment, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useFirebase } from '../../hooks/useFirebase'
import { useAuth } from '../../hooks/useAuth'
import { FormsProvider } from '../../context/forms-context'
import { useToast } from '../../hooks/useToast'
import { useForm } from '../../hooks/useForm'

import {
  FormAuth,
  InputAuth,
  LabelAuth,
  ButtonAuth,
  FieldsetAuth,
  TitleAuth,
  ItemsAuth,
  ItemAuth,
  IconAuth,
} from '../../styles/index'
import {
  Envelope,
  Eye,
  EyeSlash,
  SpinnerAnimate,
  Anonymous
} from '../../assets/index'
import {
  initForms,
} from '../../commons/index'


const UserSignIn = ({ history }) => {
  // global initialisation
  const initialViews = {
    passwordView: false
  }

  // obtains the input values of the inputs
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  // initialization of functionalities
  const { initialValid } = initForms(passwordRef)
  const [getViews, setViews] = useState(initialViews)
  
  // verifies the entry of the password in text
  const passwordVisiblity = () => {
    setViews({ ...getViews, passwordView: !getViews.passwordView })
  }
  const envelope = <Envelope />
  const eye = getViews.passwordView ? <Eye /> : <EyeSlash />
  
  // methods of functionalities
  const { isLoading } = useFirebase()
  const { signin, signinAnonymous } = useAuth()
  const { values, fields, errors, helps, valids, clear, bindField } = useForm(initialValid)
  const { showToast } = useToast()

  // handle of evenements submit signin
  const handleSubmit = async e => {
    e.preventDefault()

    // handle of valids parameters
    if (!values.email || !values.passlogin || Object.keys(values).length === 0) {
      handleAuthError(null, 'info-empty-auth')
      return
    }

    if (fields.email === '' && errors.email === '' && fields.passlogin === '' && errors.passlogin === '') {

      if (valids.email !== 'valide' && valids.passlogin !== 'valide') {
        return
      }

      // signin (login user)
      const email = values.email
      const passlogin = values.passlogin
      const resp = await signin(email, passlogin)
      
      handleAuthError(resp, 'success-signin')
    }
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'success-signin':
        if (!resp) {
          clear(values, errors, fields, helps, valids)
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
        break
    }

    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/user-not-found':
          // User was not found
          showToast('warning-user-post')
          break
        case 'auth/wrong-password':
          // The password is invalid or the user does not have a password
          showToast('warning-password-post')
          break
        default:
          // Unexplained malfunction or connection error
          showToast('danger-auth')
          history.push('/login')
          break
      }
    }
  }

  const handleAnonymous = async () => {
    // sign with Anonymous
    const resp = await signinAnonymous()

    handleAuthErrorProvider(resp, 'success-signinAnonymous')
    handleAuthErrorProvider(resp, 'info-signAnonymous')
  }

  // handle of alerts and errors
  const handleAuthErrorProvider = (resp, ctx) => {
    switch (ctx) {
      case 'success-signinAnonymous':
        if (!resp) {
          showToast(ctx)
          history.push('/home')
        }
        break
      case 'info-signAnonymous':
        if (!resp) {
          showToast(ctx)
          history.push('/home')
        }
        break
      default:
        // Unexplained malfunction or connection error
        showToast('danger-auth')
        history.push('/login')
        break
    }
    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/account-exists-with-different-credential':
          // The account already exists with another username
          showToast('warning-cred-exist')
          break
        case 'auth/cancelled-popup-request':
          // An auth domain configuration is required
          showToast('warning-cred-exist')
          break
        case 'auth/operation-not-allowed':
          // Operation is not allowed
          showToast('warning-cred-exist')
          break
        case 'auth/operation-not-supported-in-this-environment':
          // Operation is not supported in this environment
          showToast('warning-cred-exist')
          break
        case 'auth/popup-blocked':
          // Sign in popup got blocked
          showToast('warning-cred-exist')
          break
        case 'auth/popup-closed-by-user':
          // Google sign in popup got cancelled
          showToast('warning-cred-exist')
          break
        case 'auth/unauthorized-domain':
          // Unauthorized domain
          showToast('warning-cred-exist')
          break
        default:
          // Too many requests or unauthorized operation
          showToast('warning-auth')
          break
      }
    }
  }

  return (
    <Fragment>
      <FormsProvider>
        <FormAuth className="auth">
          <div className="titleForm">
            <h1>S&apos;identifier</h1> 
            <p>S&apos;il vous plaît remplir vos informations d&apos;identification pour vous connecter.</p>
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

          <div className="form-group">
            <LabelAuth htmlFor="password">Mot de passe</LabelAuth>
            <InputAuth
              type={getViews.passwordView ? "text" : "password"}
              id="passlogin"
              className={valids.passlogin ? "form-control show-green" : "form-control show-red"}
              aria-invalid={valids.passlogin ? "false" : "true"}
              name="passlogin"
              placeholder="1P@ssword"
              ref={passwordRef}
              {...bindField('passlogin')}
            />
            <i onClick={passwordVisiblity}>{eye}</i>
            {fields.passlogin && (
              <span className="helpError adjust2">{fields.passlogin}</span>
            )}
          </div>

          <div className="forget">
            <p><Link to="/change-auth">
              <span className="auth-span">Mot de passe oublié ?</span>
            </Link></p>
          </div>

          <div className="form-action">
            <ButtonAuth
              type="button"
              value="Envoyer"
              img={`"data:image/svg+xml;utf8,${SpinnerAnimate}"`}
              isLoading={!isLoading}
              disabled={!isLoading ? true : ""}
              onClick={e => handleSubmit(e)}
            />
            <ButtonAuth
              type="button"
              value="Vider"
              onClick={() => handleAuthError(null, 'info-form-clean')}
            />
            <p className="form-footer">Avez-vous besoin de <Link to="/register">
              <span className="auth-span">vous inscrire</span>
            </Link> ?</p>
          </div>
        </FormAuth>
      </FormsProvider>
      {/* <SignInLink signAnonymous={() => handleAnonymous()} /> */}
      <FieldsetAuth>
        <TitleAuth>S&apos;identifier autrement:</TitleAuth>
        <ItemsAuth>

          <ItemAuth>
            <IconAuth>
              <button onClick={() => handleAnonymous()}>
                <Anonymous />
                <span className="anonymous-auth">authentification Anonyme</span>
              </button>
            </IconAuth>
          </ItemAuth>

        </ItemsAuth>
      </FieldsetAuth>
    </Fragment>
  )
}

export default UserSignIn
