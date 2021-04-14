import React, { Fragment, useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'

import { useFirebase } from '../hooks/useFirebase'
import { useAuth } from '../hooks/useAuth'
import { FormsProvider } from '../context/forms-context'
import { useForm } from '../hooks/useForm'
import { useToast } from '../hooks/useToast'
import { useOutsideModal } from '../hooks/useOutsideModal'

import {
  ModalAuthBackdrop,
  ModalAuthWrapper,
  FormAuth,
  InputAuth,
  LabelAuth,
  ButtonAuth,
} from '../styles/index'
import {
  Eye,
  EyeSlash,
} from '../assets/index'
import {
  Toast,
} from '../components/Toast'
import {
  initForms,
} from '../commons/index'


export const ModalSignChange = forwardRef((props, ref) => {
  // global initialisation
  const { history } = props
  const initialViews = {
    passwordView: false,
    repasswordView: false,
    currentpasswordView: false
  }

  // obtains the input values of the inputs
  const innerRef  = useRef(null)
  const passwordRef = useRef(null)
  const currentPasswordRef = useRef(null)

  // initialization of functionalities
  const { initialValid } = initForms(passwordRef)
  const [getViews, setViews] = useState(initialViews)
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      displayName: 'modal-change',
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  // verifies the entry of the password in text
  const currentpasswordVisiblity = () => {
    setViews({ ...getViews, currentpasswordView: !getViews.currentpasswordView })
  }
  const passwordVisiblity = () => {
    setViews({ ...getViews, passwordView: !getViews.passwordView })
  }
  const eye1 = getViews.currentpasswordView ? <Eye /> : <EyeSlash />
  const eye2 = getViews.passwordView ? <Eye /> : <EyeSlash />
  
  // methods of functionalities
  const { authContext } = useFirebase()
  const { updatePassword, ctxActions } = useAuth()
  const { values, fields, errors, helps, valids, clear, bindField } = useForm(initialValid)
  const { toastList, showToast, deleteToast } = useToast()

  useOutsideModal(innerRef, () => {
    setOpen(!open)
    history.push('/home')
  })

  // handle of evenements
  const handleSubmit = async e => {
    e.preventDefault()

    // handle of valids parameters
    if (!values.currentpassword || !values.password || Object.keys(values).length === 0) {
      handleAuthError(null, 'info-empty-auth')
      return
    }

    if (fields.currentpassword === '' && fields.password === '' && errors.password.length === 0) {
      if (valids.currentpassword !== 'valide' && valids.password !== 'valide') return
  
      // change password authentication user
      const cuPassword = values.currentpassword
      const newPassword = values.password
      const paramsObj = Object.fromEntries([...new URLSearchParams(location.search)])
      const { mode } = paramsObj

      if (authContext.loggedIn && mode === 'newPassword') {
        const resp = await updatePassword(cuPassword, newPassword)
        handleAuthError(resp, 'info-confirm-change')
      }

      if (!authContext.loggedIn && mode === 'resetPassword') {
        const resp = await ctxActions(paramsObj, newPassword)
        handleAuthError(resp, 'info-confirm-change')
      }
    }
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'info-confirm-change':
        clear(values, errors, fields, helps, valids)
        showToast(ctx)
        setOpen(false)
        history.push('/home')
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
        setOpen(false)
        history.push('/change-auth')
        break
    }
    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/invalid-action-code':
          // User was not found
          showToast('warning-user-oobCode')
          history.push('/change-auth')
          break
        case 'auth/wrong-password':
          clear(values, errors, fields, helps, valids)
          showToast('warning-password-post')
          break
        case 'auth/too-many-requests':
          // Too many requests or unauthorized operation
          showToast('warning-auth')
          break
        default:
          // Unexplained malfunction or connection error
          showToast('danger-auth')
          history.push('/change-auth')
          break
      }
    }
  }

  return (
    <>
      {open && <ModalAuthBackdrop>
        <ModalAuthWrapper width="550px" height="350px" top="200px" className="modal-change">
          <div ref={innerRef}>
            <Fragment>
              <FormsProvider>
                <Toast
                  toastList={toastList}
                  deleteToast={deleteToast}
                />
                <FormAuth>
                  <div className="titleForm">
                    <h1 className="change-pwd">Changement</h1>
                    {authContext.loggedIn && (
                      <p className="loginText">Veuillez remplir pour remplacer votre mot de passe courant.</p>
                    )}
                    {!authContext.loggedIn && (
                      <p className="loginText">Veuillez remplir pour fournir votre nouveau mot de passe d&apos;authentification.</p>
                    )}
                  </div>
                  <div className="form-group">
                    <LabelAuth htmlFor="current-password">Mot de passe courant</LabelAuth>
                    <InputAuth
                      type={getViews.currentpasswordView ? "text" : "password"}
                      id="current-password"
                      className={valids.currentpassword ? "form-control show-green" : "form-control show-red"}
                      aria-invalid={valids.currentpassword ? "false" : "true"}
                      placeholder="1P@ssword"
                      ref={currentPasswordRef}
                      {...bindField('currentpassword')}
                    />
                    <i onClick={currentpasswordVisiblity}>{eye1}</i>
                    {fields.currentpassword && (
                      <span className="helpError adjust2">{fields.currentpassword}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <LabelAuth htmlFor="new-password">Nouveau mot de passe</LabelAuth>
                    <InputAuth
                      type={getViews.passwordView ? "text" : "password"}
                      id="new-password"
                      className={valids.password
                        ? !fields.password ? "form-control show-green" : "form-control show-red"
                        : "form-control show-red"}
                      aria-invalid={valids.password
                        ? !fields.password ? "false" : "true"
                        : "true"}
                      placeholder="1P@ssword"
                      ref={passwordRef}
                      {...bindField('password')}
                    />
                    <i onClick={passwordVisiblity}>{eye2}</i>
                    {fields.password && (
                      <span className="helpError adjust2">{fields.password}</span>
                    )}
                    {errors.password && (
                      <span className="helpError adjust2">{errors.password}</span>
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
                    <p className="form-footer">Revenir <Link to="/home">
                      <span className="auth-span">à l&apos;accueil</span>
                    </Link>.</p>
                  </div>
                </FormAuth>
              </FormsProvider>
            </Fragment>
          </div>
        </ModalAuthWrapper>
      </ModalAuthBackdrop>}
    </>
  )
})
