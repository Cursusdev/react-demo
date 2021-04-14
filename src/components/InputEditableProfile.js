import React, { Fragment, useState, useEffect, useRef, useCallback } from 'react'
import { useForm } from '../hooks/useForm'
import { useToast } from '../hooks/useToast'

import {
  InputProfile,
  SpanProfile,
} from '../styles/index'
import {
  initForms,
} from '../commons/index'


export const InputEditableProfile = ({ value, refresh, id, history }) => {
  // obtains the input values of the inputs
  const inputRef = useRef(null)

  // initialization of functionalities
  const [inputVisible, setInputVisible] = useState(false)
  const { initialValid } = initForms()

  // methods of functionalities
  const { values, fields, errors, valids, clear, bindField } = useForm(initialValid)
  const { showToast } = useToast()

  const escapeListener = useCallback(async e => {
    e.preventDefault()

    if (e.key === 'Escape') {
      setInputVisible(false)
    }
    
    if (e.key === 'Enter') {
      setInputVisible(false)

      // handle of valids parameters
      if (Object.keys(values).length === 0) {
        return
      }

      if (e.target.id === 'email') {
        if (valids.email !== 'valide' && values.email !== '' && values.email !== value) {
          handleAuthError(null, 'warning-update-fields')
        }
        if (fields.email === '' && errors.email === '' && values.email !== value) {
          refresh(e.target.value)
        }
      }

      if (e.target.id === 'username') {
        if (valids.username !== 'valide' && values.username !== '' && values.username !== value) {
          handleAuthError(null, 'warning-update-fields')
        }
        if (fields.username === '' && errors.username.length === 0 && values.username !== value) {
          refresh(e.target.value)
        }
      }
      clear(errors, fields, valids)
    }
    
  }, [value, refresh, valids, fields, errors])
  
  function onClickOutside(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false);
      clear(errors, fields, valids)
    }
  }

  useEffect(() => {
    if (inputVisible) {
      document.addEventListener("mousedown", onClickOutside);
      document.addEventListener('keyup', escapeListener)
      inputRef.current.focus()
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener('keyup', escapeListener)
    }
  })

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'info-empty-auth':
        showToast(ctx)
        history.push('/profil')
        break
      case 'warning-update-fields':
        showToast(ctx)
        history.push('/profil')
        break
      default:
        // Unexplained malfunction or connection error
        showToast('danger-auth')
        clear(errors, fields, valids)
        history.push('/profil')
        break
    }
  }

  return (
    <Fragment>
      {inputVisible 
        ? (<>
            {(id === 'email') && (
              <InputProfile
                type="text"
                id={id}
                className={fields.email ? 'show-red' : ''}
                ref={inputRef}
                onChange={e => setText(e.target.value)}
                {...bindField('email', value)}
              />
            )}
            {(id === 'username') && (
              <InputProfile
                type="text"
                id={id}
                className={errors.username && errors.username.length > 0 ? 'show-red' : ''}
                ref={inputRef}
                onChange={e => setText(e.target.value)}
                {...bindField('username', value)}
              />
            )}
          </>)
        : (<SpanProfile style={{ display: 'block' }} onClick={() => setInputVisible(true)}>
            {value}
          </SpanProfile>)
      }
    </Fragment>
  )
}
