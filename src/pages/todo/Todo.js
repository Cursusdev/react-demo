import React, { useContext, useState, useEffect, useRef } from 'react'
import { TodoContext } from '../../context/todo-context'
import { addTodo, updateTodo, deleteTodo } from '../../lib/todos-providers'
import { useToast } from '../../hooks/useToast'

import {
  SectionTodo,
  TableTodo,
  BoxTodo,
  InputTodo,
} from '../../styles/index'
import {
  Search,
} from '../../assets/index'
import {
  InputEditableTodo,
} from '../../components/index'


const Todo = () => {
  // obtains the input values of the inputs
  const todosRef = useRef(null)

  // initialization of functionalities
  const [todo, setTodo] = useState('')
  const [searchItem, setSearchItem] = useState('');
  const [searchItems, setSearchItems] = useState([])
  
  // methods of functionalities
  const { todosList, setTodosList } = useContext(TodoContext)
  const { showToast } = useToast()

  useEffect(() => {
    const items = []
    const todoSearch = []
    let isFind = false

    // GET with search methods
    if (todosList) {
      todosList.datas.forEach(todo => {
        Object.entries(todo).forEach(todoItem => {
          if (todoItem.includes("content")) {
            items.push(Object.values(todoItem)[1])
            items.filter(item => {
              item.toLowerCase().includes(searchItem)
                ? isFind = true
                : isFind = false
              return item.toLowerCase().includes(searchItem)
            })
          }
        })
        if (isFind)
          todoSearch.push(todo)
        isFind = false
      })
    }
    setSearchItems(todoSearch)
    
  }, [todosList, searchItem])
  
  
  const WaitToRender = () => {
    if (todosList.loading) {
      return null
    }
    return <h1>Ajouter un nouveau Todo...</h1>
  }

  // handle of alerts and errors
  const handleTodosError = ctx => {
    switch (ctx) {
      case 'info-add-todo':
        showToast(ctx)
        break
      case 'info-update-todo':
        showToast(ctx)
        break
      case 'success-delete-todo':
        showToast(ctx)
        break
      default:
        // Unexplained error of the operation
        showToast('warning-todo')
        break
    }
  }

  // ADD methods for todo entry
  const onTodoAdd = async e => {
    e.preventDefault()
    if (!todo) return
    todosRef.current.scrollTop = 0
  
    const newTodosStore = await addTodo(todo)
    setTodosList({ datas: newTodosStore })
    setTodo('')
    handleTodosError('info-add-todo')
  }

  // UPDATE methods for todo entry
  const onTodoUpdate = async (content, id) => {
    if (!content) return;

    const updateStore = await updateTodo(content, id)
    setTodosList({ datas: updateStore })
    setTodo('')
    handleTodosError('info-add-todo')
  }

  // DELETE methods for todo entry
  const onTodoDelete = async e => {
    e.stopPropagation()

    const { id } = e.target
    const remaining = await deleteTodo(id)
    setTimeout(() => setTodosList({ datas: remaining }), 300);
    handleTodosError('success-delete-todo')
  }

  return (
    <SectionTodo>
      <BoxTodo className="effect5">
        <div>
          <form onSubmit={onTodoAdd}>
            <label>Todo:</label>
            <InputTodo
              id="entry"
              type="text"
              value={todo}
              onChange={e => setTodo(e.target.value)}
              placeholder="Entrée 1"
            />
            <label htmlFor="input"></label>
          </form>
        </div>
      </BoxTodo>

      <div ref={todosRef}>
        {todosList && !todosList.datas.length
          ? <WaitToRender />
          : <TableTodo>
            <thead>
              <tr>
                <th>
                  <InputTodo
                    id="search"
                    type="text"
                    value={searchItem}
                    onChange={e => setSearchItem(e.target.value)}
                  />
                </th>
                <th><Search /></th>
              </tr>
            </thead>
            <tbody>
              {searchItems.map(todo => (
                <tr key={todo.id}>
                  <td>
                    <InputEditableTodo
                      id={todo.id}
                      content={todo.content}
                      refresh={(content, id) => onTodoUpdate(content, id)}
                    />
                  </td>
                  <td className="btn-actions">
                    <button className="btn-delete" type="button" id={todo.id} onClick={onTodoDelete}>
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </TableTodo>
        }
      </div>
    </SectionTodo>
  )
}

export default Todo
