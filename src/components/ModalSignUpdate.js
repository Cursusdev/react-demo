import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { FormsProvider } from '../context/forms-context'
import { useForm } from '../hooks/useForm'
import { useToast } from '../hooks/useToast'
import { useOutsideModal } from '../hooks/useOutsideModal'

import {
  FormAuth,
  InputAuth,
  LabelAuth,
  ModalAuthBackdrop,
  ModalAuthWrapper,
  ModalAuthHeading,
  ModalAuthBody,
  ModalAuthFieldset,
  ModalAuthButton,
} from '../styles/index'
import {
  Eye,
  EyeSlash,
} from '../assets/index'
import {
  initForms,
} from '../commons/index'


export const ModalSignUpdate = forwardRef((props, ref) => {
  // global initialisation
  const { history, confirm } = props

  // obtains the input values of the inputs
  const innerRef  = useRef(null)

  // initialization of functionalities
  const initialViews = { currentpasswordView: false }
  const { initialValid } = initForms('')
  const [getViews, setViews] = useState(initialViews)
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      displayName: 'modal-update',
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  // verifies the entry of the password in text
  const currentpasswordVisiblity = () => {
    setViews({ ...getViews, currentpasswordView: !getViews.currentpasswordView })
  }
  const eye = getViews.currentpasswordView ? <Eye /> : <EyeSlash />
  
  // methods of functionalities
  const { values, fields, errors, helps, valids, clear, bindField } = useForm(initialValid)
  const { showToast } = useToast()

  useOutsideModal(innerRef, () => {
    confirm(null)
    setOpen(!open)
  })

  // handle of evenements submit delete account
  const handleClickUpdate = async e => {
    // e.preventDefault()
    if (!values.currentpassword || Object.keys(values).length === 0) {
      handleEchapUpdate()
      handleAuthError(null, 'info-empty-auth')
      return
    }
  
    if (valids.currentpassword !== 'valide') {
      handleAuthError(null, 'fail-update-profile')
      return
    }

    const cuPassword = values.currentpassword
    clear(values, errors, fields, helps, valids)
    confirm(cuPassword)
    setOpen(false)
  }
  
  const handleEchapUpdate = async () => {
    confirm(null)
    setOpen(false)
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'fail-update-profil':
        showToast(ctx)
        history.push('/profil')
        break
      case 'info-empty-auth':
        showToast(ctx)
        break
      default:
        // Unexplained malfunction or connection error
        showToast('danger-auth')
        history.push('/profil')
        break
    }
  }

  return (
    <>
      {open && <ModalAuthBackdrop>
        <ModalAuthWrapper width="400px" height="320px" top="300px" className="modal-update">
          <div ref={innerRef}>
            <ModalAuthBody>
              <ModalAuthHeading>
                Mettre à jour votre email.
              </ModalAuthHeading>
              <ModalAuthFieldset>
                Renseigner votre mot de passe actuel pour mettre à jour l&apos;adresse email de votre compte.
              </ModalAuthFieldset>
              <FormsProvider>
                <FormAuth className="modalUser">
                  <div className="form-group">
                    <LabelAuth htmlFor="current-password">Mot de passe courant</LabelAuth>
                    <InputAuth
                      type={getViews.currentpasswordView ? "text" : "password"}
                      id="current-password"
                      className={valids.currentpassword ? "form-control show-green" : "form-control show-red"}
                      aria-invalid={valids.currentpassword ? "false" : "true"}
                      placeholder="P@ssword1Update!"
                      required
                      {...bindField('currentpassword')}
                    />
                    <i onClick={currentpasswordVisiblity}>{eye}</i>
                    {fields.currentpassword && (
                      <span className="helpError adjust2">{fields.currentpassword}</span>
                    )}
                  </div>
                </FormAuth>
              </FormsProvider>
              <ModalAuthFieldset>
                <ModalAuthButton type="button" onClick={handleEchapUpdate}>
                  Non
                </ModalAuthButton>
              </ModalAuthFieldset>
              <ModalAuthFieldset>
                <ModalAuthButton type="button" onClick={handleClickUpdate}>
                  Oui, mettre à jour l&apos;email!
                </ModalAuthButton>
              </ModalAuthFieldset>
            </ModalAuthBody>
          </div>
        </ModalAuthWrapper>
      </ModalAuthBackdrop>}
    </>
  )
})
