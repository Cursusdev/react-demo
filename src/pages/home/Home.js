import CookieConsent from "react-cookie-consent"
import React, { Fragment, useState, useRef, useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// const UserSignIn = lazy(() => import('../auth/UserSignIn'))
// const UserSignUp = lazy(() => import('../auth/UserSignUp'))
// const UserSignAnonymous = lazy(() => import('../auth/UserSignAnonymous'))
// const UserChangeAuth = lazy(() => import('../auth/UserChangeAuth'))
// const UserProfile = lazy(() => import('../auth/UserProfile'))
// const TodoPage = lazy(() => import('../todo/Todo'))
import UserSignIn from '../auth/UserSignIn'
import UserSignUp from '../auth/UserSignUp'
import UserSignAnonymous from '../auth/UserSignAnonymous'
import UserChangeAuth from '../auth/UserChangeAuth'
import UserProfile from '../auth/UserProfile'
import TodoPage from '../todo/Todo'

import { AuthContext } from '../../context/auth-context'
import { UserContext } from '../../context/user-context'
import { useFirebase } from '../../hooks/useFirebase'
import { useAuth } from '../../hooks/useAuth'
import { useOutsideNav } from "../../hooks/useOutsideNav"
import { useToast } from '../../hooks/useToast'
import { useTheme } from '../../hooks/useTheme'

import {
  HomeStyles,
  SpanNav,
} from '../../styles/index'
import {
  ModalAbout,
  ModalCookies,
  Navigation,
  Toast,
  SimpleCloud,
  NotFoundPage,
} from '../../components/index'


const HomePage = ({ history, initTheme }) => {
  // global initialisation
  const authcontext = useContext(AuthContext)
  const usercontext = useContext(UserContext)
  
  // obtains the input values of the inputs
  const dropdownRef1 = useRef(null)
  const dropdownRef2 = useRef(null)
  const modalRef1 = useRef()
  const modalRef2 = useRef()
  
  // initialization of functionalities
  const [isSelectedTheme, setSelectedTheme] = useState(initTheme)
  const [isActiveAuth, setIsActiveAuth] = useOutsideNav(dropdownRef1, false)
  const [isActiveMark, setIsActiveMark] = useOutsideNav(dropdownRef2, false)
  const [, setShow] = useState(false)
  
  // methods of functionalities
  const [theme, updateTheme] = useTheme()
  const { isLoading, ctxLogout } = useFirebase()
  const { signout, signoutAnonymous } = useAuth()
  const { toastList, showToast, deleteToast } = useToast()

  const setLogout = async () => {
    const ifEmail = usercontext.currentUser.email
    const resp = ifEmail ? await signout() : await signoutAnonymous()
    ifEmail
      ? handleAuthError(resp, 'success-signout')
      : handleAuthError(resp, 'success-signoutAnonymous')
    ctxLogout()
    history.push('/home')
  }

  useEffect(() => {
    isSelectedTheme ? updateTheme('dark') : updateTheme('light')
  }, [isSelectedTheme, updateTheme])

  function firstName() {
    if (!window.localStorage) return ''
    if (localStorage.getItem('firstName') ==='Anonyme') return 'anonyme'
    const firstName = localStorage.getItem('firstName')

    return firstName
  }

  useEffect(() => {
    let timer = setTimeout(() => setShow(true), 1000)

    return () => { clearTimeout(timer) }
  }, [])


  const handleCookies = () => {
    setIsActiveMark(false)
    modalRef1.current.open()
  }

  const handleAbout = () => {
    setIsActiveMark(false)
    modalRef2.current.open()
  }

  // handle of alerts and errors
  const handleAuthError = (resp, ctx) => {
    switch (ctx) {
      case 'success-signout':
        (!resp) ? showToast(ctx) : ''
        break
      case 'success-signoutAnonymous':
        (!resp) ? showToast(ctx) : ''
        break
      default:
        break
    }

    if (resp && resp.code) {
      const error = resp.code
      switch (error) {
        case 'auth/user-not-found':
          // User was not found
          showToast('warning-user-post')
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
      <header>
        <Navigation
          selected={isSelectedTheme}
          toggleTheme={() => setSelectedTheme(!isSelectedTheme)}
          firstName={firstName()}
          dropdownRef1={dropdownRef1}
          dropdownToggle1={() => setIsActiveAuth(!isActiveAuth)}
          isActiveAuth={isActiveAuth}
          setIsActiveAuth={() => setIsActiveAuth(false)}
          dropdownRef2={dropdownRef2}
          dropdownToggle2={() => setIsActiveMark(!isActiveMark)}
          isActiveMark={isActiveMark}
          setIsActiveMark={() => setIsActiveMark(false)}
          questionMark1={() => handleCookies()}
          questionMark2={() => handleAbout()}
          signout={setLogout}
        />
      </header>
      <HomeStyles>
        <Toast
          toastList={toastList}
          deleteToast={deleteToast}
        />
        <CookieConsent
          style={{ background: "#F5F5F5", color: "#333", fontSize: "15px" }}
          buttonText="Compris!"
          buttonStyle={{ background: "#1D8348", color: "#fff", fontSize: "14px", borderRadius: "4px" }}
          expires={7}
        >
          <p>Ce site Web utilise des cookies pour améliorer l&apos;expérience utilisateur.</p>
          <SpanNav onClick={handleCookies}>Consulter la politique cookies</SpanNav>
        </CookieConsent>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={SimpleCloud}/>
          <Route path="/todo" render={() => <TodoPage />} />

          {!authcontext.token && <Route path="/login" component={UserSignIn} />}
          {authcontext.token && <Redirect from="/login" to="/home" />}

          {!authcontext.token && <Route path="/register" component={UserSignUp} />}
          {authcontext.token && <Redirect from="/register" to="/home" />}

          <Route path="/change-auth" component={UserChangeAuth}/>

          {authcontext.token && <Route path="/profil" component={UserProfile} />}
          {!authcontext.token && <Redirect from="/profil" to="/home" />}
  
          {usercontext.isAnonymous && <Route path="/anonymous" component={UserSignAnonymous} />}
          {!usercontext.isAnonymous && <Redirect from="/anonymous" to="/home" />}

          {isLoading && (
            <Route path="*">
              <NotFoundPage />
            </Route>
          )}
          {!authcontext.token && !usercontext.isAnonymous && <Redirect to="/home" />}
        </Switch>
        <ModalCookies ref={modalRef1} />
        <ModalAbout ref={modalRef2} />
      </HomeStyles>
    </Fragment>
  )
}

export default HomePage
