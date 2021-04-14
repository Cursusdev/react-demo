import { createContext } from 'react'


export const UserContext = createContext({
  initializing: true,
  currentUser: null,
  isAnonymous: false,
})
