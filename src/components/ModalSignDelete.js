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


export const ModalSignDelete = forwardRef((props, ref) => {
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
      displayName: 'modal-delete',
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
  const handleClickDelete = async e => {
    e.preventDefault()

    if (!values.currentpassword ||  Object.keys(values).length === 0) {
      handleAuthError(null, 'info-empty-auth')
      return
    }

    if (valids.currentpassword !== 'valide') {
      handleAuthError(null, 'warning-user-deletion')
    }

    const cuPassword = values.currentpassword
    clear(values, errors, fields, helps, valids)
    confirm(cuPassword)
    setOpen(false)
  }
  
  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'warning-user-deletion':
        showToast(ctx)
        history.push('/home')
        break
      case 'info-empty-auth':
        showToast(ctx)
        break
      default:
        // Unexplained malfunction or connection error
        showToast('danger-auth')
        setOpen(false)
        break
    }
  }

  return (
    <>
      {open && <ModalAuthBackdrop>
        <ModalAuthWrapper width="400px" height="320px" top="250px" className="modal-delete">
          <div ref={innerRef}>
            <ModalAuthBody>
              <ModalAuthHeading>
                Supprimer votre compte.
              </ModalAuthHeading>
              <ModalAuthFieldset>
                Renseigner votre mot de passe actuel pour supprimer votre compte.
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
                <ModalAuthButton type="button" onClick={() => setOpen(false)}>
                  Non
                </ModalAuthButton>
              </ModalAuthFieldset>
              <ModalAuthFieldset>
                <ModalAuthButton type="button" onClick={handleClickDelete}>
                  Oui, Oublier le compte!
                </ModalAuthButton>
              </ModalAuthFieldset>
            </ModalAuthBody>
          </div>
        </ModalAuthWrapper>
      </ModalAuthBackdrop>}
    </>
  )
})
