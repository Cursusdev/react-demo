import React, { Fragment, Suspense } from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import HomePage from './pages/home/Home'
import { AuthContext } from './context/auth-context'
import { UserContext } from './context/user-context'
import { ToastProvider } from './context/toast-context'
import { TodoContextProvider } from './context/todo-context'
import { useFirebase } from './hooks/useFirebase'
import { useTheme } from './hooks/useTheme'

import {
  GlobalStyles
} from './styles/global-style'
import {
  lightTheme,
  darkTheme
} from './styles/theme'


const App = () => {
  // global initialisation
  let history = useHistory()

  // methods of functionalities
  const { authContext, authUser, ctxLogin, ctxLogout } = useFirebase()

  const [theme, ] = useTheme()
  const initTheme = (theme === 'dark') ? true : false
  const currentTheme = (theme === 'dark') ? darkTheme : lightTheme

  return (
    <Fragment>
      <ThemeProvider theme={currentTheme}>
        <AuthContext.Provider
          value={{
            token: authContext.token,
            userId: authContext.userId,
            login: ctxLogin,
            logout: ctxLogout,
          }}
        >
          <UserContext.Provider
            value={{
              initializing: authUser.initializing,
              currentUser: authUser.currentUser,
              isAnonymous: authUser.isAnonymous,
            }}
          >
            <GlobalStyles />
            <ToastProvider>
              <Suspense fallback={<p>Loading...</p>}>
                <TodoContextProvider>
                  <HomePage history={history} initTheme={initTheme} />
                </TodoContextProvider>
              </Suspense>
            </ToastProvider>
          </UserContext.Provider>
        </AuthContext.Provider>
      </ThemeProvider>
    </Fragment>
  )
}

export default App
