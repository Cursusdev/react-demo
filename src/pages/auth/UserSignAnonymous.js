import React, { Fragment, useState, useRef } from 'react'

import { useFirebase } from '../../hooks/useFirebase'
import { useAuth } from '../../hooks/useAuth'
import { FormsProvider } from '../../context/forms-context'
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
  Username,
  Eye,
  EyeSlash,
  SpinnerAnimate,
} from '../../assets/index'
import {
  ToggleChecked,
  ModalSignCGU,
} from '../../components/index'
import {
  initForms,
} from '../../commons/index'


const UserSignAnonymous = ({ history }) => {
  // global initialisation
  const initialViews = {
    passwordView: false,
    repasswordView: false,
  }

  // obtains the input values of the inputs
  const emailRef = useRef(null)
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)
  const modalRef = useRef()

  // initialization of  functionalities
  const { initialValid } = initForms(passwordRef)
  const [getViews, setViews] = useState(initialViews)
  const [isSelectedToggle, setSelectedToggle] = useState(false)

  // verifies the entry of the password in text
  const passwordVisiblity = () => {
    setViews({ ...getViews, passwordView: !getViews.passwordView })
  }
  const repasswordVisiblity = () => {
    setViews({ ...getViews, repasswordView: !getViews.repasswordView })
  }
  const envelope = <Envelope />
  const userName = <Username />
  const eye1 = getViews.passwordView ? <Eye /> : <EyeSlash />
  const eye2 = getViews.repasswordView ? <Eye /> : <EyeSlash />
  
  // methods of functionalities
  const { isLoading } = useFirebase()
  const { signupAnonymous } = useAuth()
  const { values, fields, errors, helps, valids, clear, bindField } = useForm(initialValid)
  const { showToast } = useToast()

  // handle of evenements submit Signup
  const handleSubmit = async e => {
    e.preventDefault()

    // handle of valids parameters
    if (!values.email || !values.username || !values.password || !values.repassword || Object.keys(values).length === 0) {
      handleAuthError(null, 'info-empty-auth')
      return
    }

    if (fields.email === '' && errors.email === '' && fields.username === '' && errors.username.length === 0 && fields.password === '' && errors.password.length === 0 && fields.repassword === '' && errors.repassword === '' && fields.terms === '' && errors.terms === '') {
      
      if (valids.email !== 'valide' && valids.username !== 'valide'  && valids.password !== 'valide'  && valids.repassword !== 'valide'  && valids.terms !== 'valide') {
        return
      }

      // Signup (register user)
      const email = values.email
      const password = values.password
      const username = values.username
      
      const resp = await signupAnonymous(email, password, username)
      if (!resp) {
        localStorage.setItem('firstName', username)
      }
      handleAuthError(resp, 'success-signup')
    }
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'success-signup':
        if (!resp) {
          clear(values, errors, fields, helps, valids)
          showToast(ctx)
          history.go(0)
        }
        break
      case 'info-empty-auth':
        showToast(ctx)
        break
      case 'info-form-clean':
        clear(values, errors, fields, helps, valids)
        setSelectedToggle(false)
        showToast(ctx)
        break
      default:
        break
    }

    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/email-already-in-use':
          // The email address is already in use by another account
          showToast('warning-account-exist')
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
      <FormsProvider>
        <FormAuth className="auth">
          <div className="titleForm">
            <h1>S&apos;inscrire</h1>
            <p className="loginText">Veuillez remplir ce formulaire pour créer un compte.</p>
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
            <LabelAuth htmlFor="username">Nom d&apos;utilsateur</LabelAuth>
            <InputAuth
              type="text"
              id="username"
              className={valids.username ? "form-control show-green" : "form-control show-red"}
              aria-invalid={valids.username ? "false" : "true"}
              name="username"
              placeholder="utilisateur"
              ref={usernameRef}
              {...bindField('username')}
            />
            <i>{userName}</i>
            {fields.username &&(
              <span className="helpError adjust1">{fields.username}</span>
            )}
            {errors.username && (
              <span className="helpError adjust1">{errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <LabelAuth htmlFor="password">Mot de passe</LabelAuth>
            <InputAuth
              type={getViews.passwordView ? "text" : "password"}
              id="password"
              className={valids.password ? "form-control show-green" : "form-control show-red"}
              aria-invalid={valids.password ? "false" : "true"}
              name="password"
              placeholder="1P@ssword"
              ref={passwordRef}
              {...bindField('password')}
            />
            <i onClick={passwordVisiblity}>{eye1}</i>
            {fields.password && (
              <span className="helpError adjust2">{fields.password}</span>
            )}
            {errors.password && (
              <span className="helpError adjust2">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <LabelAuth htmlFor="password">Mot de passe répété</LabelAuth>
            <InputAuth
              type={getViews.repasswordView ? "text" : "password"}
              id="repassword"
              className={valids.password
                ? valids.repassword === 'valide'
                  ? "form-control show-green"
                  : "form-control show-red"
                : "form-control show-red"}
              aria-invalid={valids.password
                ? valids.repassword === 'valide'
                  ? "false"
                  : "true"
                : "true"}
              name="repassword"
              placeholder="1P@ssword"
              {...bindField('repassword')}
            />
            <i onClick={repasswordVisiblity}>{eye2}</i>
            {fields.repassword && (
              <span className="helpError adjust2">{fields.repassword}</span>
            )}
          </div>

          <div className="form-action">
            <label>
              <ToggleChecked
                selectedCheck={isSelectedToggle}
                toggleSelected={() => { setSelectedToggle(!isSelectedToggle) }}
                id="terms"
                name="terms"
                aria-invalid={valids.terms ? "false" : "true"}
                checked={isSelectedToggle}
                {...bindField('terms')}
              />
            </label>
            <span className="auth-cgu">Je reconnais avoir lu et compris les <span className="auth-span"
              onClick={() => modalRef.current.open()}>Conditions Générales d&apos;Utilisation</span> et je les accepte.</span>
            <br />
            {fields.terms && (
              <span className="helpError adjust3">{fields.terms}</span>
            )}
          </div>

          <div className="form-action">
            <ButtonAuth
              type="submit"
              value="Envoyer"
              img={`"data:image/svg+xml;utf8,${SpinnerAnimate}"`}
              isLoading={isLoading}
              disabled={isLoading ? true : ""}
              onClick={e => handleSubmit(e)}
            />
            <ButtonAuth
              type="button"
              value="Vider"
              onClick={() => { handleAuthError(null, 'info-form-clean') }}
            />
          </div>

        </FormAuth>
      </FormsProvider>
      <ModalSignCGU ref={modalRef} />
    </Fragment>
  )
}

export default UserSignAnonymous
