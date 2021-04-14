import React, { createContext, useState, useEffect } from 'react'
import { getAllTodos } from '../lib/todos-providers'


export const TodoContext = createContext()

// Create a provider for components to consume and subscribe to changes
export const TodoContextProvider = ({ children }) => {
  const [todosList, setTodosList] = useState(null)

  useEffect(async () => {
    setTodosList({ loading: true, datas: [] })
    const todos = await getAllTodos()
    setTodosList({ loading: false, datas: todos })
  }, [])

  return <TodoContext.Provider value={{ todosList, setTodosList }}>
    {children}
  </TodoContext.Provider>
}
