import React, { useState, useEffect, useRef, useCallback } from 'react'

import {
  InputTodo,
  SpanTodo,
} from '../styles/index'


export const InputEditableTodo = ({ id, content, refresh }) => {
  // obtains the input values of the inputs
  const inputRef = useRef(null)

  // initialization of functionalities
  const [inputVisible, setInputVisible] = useState(false)
  const [text, setText] = useState(content)

  // methods of functionalities
  const escapeListener = useCallback(e => {
    e.preventDefault()

    if (e.key === 'Escape') {
      setInputVisible(false)
      setText(content)
    }
    if (e.key === 'Enter') {
      setInputVisible(false)
      refresh(e.target.value, id)
    }
  }, [content, id])

  function onClickOutside(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setInputVisible(false)
      setText(content)
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

  return (
    <>
      {inputVisible 
        ? <InputTodo
            type="text"
            ref={inputRef}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        : <SpanTodo style={{display: 'block'}} onClick={() => setInputVisible(true)}>
            {text}
          </SpanTodo>
      }
    </>
  )
}
