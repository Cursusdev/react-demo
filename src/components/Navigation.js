import React, { Fragment } from 'react'
import { AuthContext } from '../context/auth-context'
import { UserContext } from '../context/user-context'

import {
  ToggleTheme,
} from './index'
import  {
  HeaderNav,
  TitleNav,
  DropdownNav,
  BodyNav,
  LinkNav,
  DivNav,
  ButtonNav,
} from '../styles/index'
import {
  Home,
  UserNav,
  UserAnonymous,
  Logo,
  LogOut,
  QuestionMark,
} from '../assets/index'


export const Navigation = ({
  selected,
  toggleTheme,
  firstName,
  dropdownRef1,
  dropdownToggle1,
  isActiveAuth,
  setIsActiveAuth,
  dropdownRef2,
  dropdownToggle2,
  isActiveMark,
  questionMark1,
  questionMark2,
  signout,
}) => {

  return (
    <AuthContext.Consumer>
      {authcontext => 
        <UserContext.Consumer>
          {usercontext => (
            <HeaderNav>
              <Logo />
              <TitleNav>React demo App</TitleNav>
              <div className="toogle-theme">
                <ToggleTheme
                  selected={selected}
                  toggleTheme={toggleTheme}
                />
              </div>
              <BodyNav>
                <ul>
                  <li className="nav-home">
                    <LinkNav to="/">
                      <Home />
                    </LinkNav>
                  </li>
                  <li className="nav-todo">
                    <LinkNav to="/todo">Todo</LinkNav>
                  </li>
                  <li className="nav-toggle">
                    <ToggleTheme
                      selected={selected}
                      toggleTheme={toggleTheme}
                    />
                  </li>
                  {!authcontext.token && (
                    <li className="nav-li">
                      <LinkNav to="/login">
                        <div className="nav-el">
                          <>
                            {localStorage.getItem('firstName') && localStorage.getItem('firstName') ==='Anonyme'
                              ? <UserAnonymous />
                              : <UserNav />
                            }
                            <span onClick={setIsActiveAuth}>
                              {!usercontext.currentUser && localStorage.getItem('firstName')
                                ? <>{localStorage.getItem('firstName')}</>
                                : <>S&apos;identifier</>
                              }
                            </span>
                          </>
                        </div>
                      </LinkNav>
                    </li>
                  )}
                  {authcontext.token && (
                    <li className="nav-li">
                      <DropdownNav>
                        <button onClick={dropdownToggle1} className="menu-trigger">
                          {firstName && firstName ==='anonyme'
                            ? (<>
                                <UserAnonymous />
                                <span>Anonyme</span>
                              </>)
                            : firstName === ''
                              ? (<>
                                  <UserNav />
                                  <span>{usercontext.currentUser.firstName}</span>
                                </>)
                              : (<>
                                  <UserNav />
                                  {localStorage.getItem('firstName')
                                    ? <span>{firstName}</span>
                                    : <>S&apos;identifier</>
                                  }
                                </>)
                          }
                        </button>
                        <nav
                          ref={dropdownRef1}
                          className={`menu ${isActiveAuth ? "active" : "inactive"}`}
                        >
                          <ul>
                            <Fragment>
                              {usercontext.isAnonymous && (
                                <li>
                                  <LinkNav to="/anonymous">
                                    <button onClick={dropdownToggle1}>S&apos;enregistrer</button>
                                  </LinkNav>
                                </li>
                              )}
                              {!usercontext.isAnonymous && (
                                <li>
                                  <LinkNav to="/profil">
                                    <button onClick={dropdownToggle1}>Accès au profil</button>
                                  </LinkNav>
                                </li>
                              )}
                              {!usercontext.initializing && !usercontext.isAnonymous && (
                                <li>
                                  <LinkNav to="/change-auth?mode=newPassword">
                                    <button onClick={dropdownToggle1}>Changer de mot de passe</button>
                                  </LinkNav>
                                </li>
                              )}
                              <li>
                                <ButtonNav onClick={signout}>
                                  <LogOut />
                                  <span>Se déconnecter</span>
                                </ButtonNav>
                              </li>
                            </Fragment>
                          </ul>
                        </nav>
                      </DropdownNav>
                    </li>
                  )}
                  <li className="nav-mark">
                    <DropdownNav>
                      <span onClick={dropdownToggle2}>
                        <QuestionMark />
                      </span>
                      <nav
                        ref={dropdownRef2}
                        className={`menu ${isActiveMark ? "active" : "inactive"}`}
                      >
                        <ul>
                          <Fragment>
                            <li>
                              <DivNav>
                                <button onClick={questionMark1}>Gérer mes cookies</button>
                              </DivNav>
                            </li>
                            <li>
                              <DivNav to="/">
                                <button onClick={questionMark2}>A propos ...</button>
                              </DivNav>
                            </li>
                          </Fragment>
                        </ul>
                      </nav>
                    </DropdownNav>
                  </li>
                </ul>
              </BodyNav>
            </HeaderNav>
          )}
        </UserContext.Consumer>
      }
    </AuthContext.Consumer>
  )
}
