import { NavLink } from 'react-router-dom'

import styled, { css } from 'styled-components'

import {
  device
} from '../index'
import {
  SvgHome,
} from '../../assets/index'


export const HeaderNav = styled.header`
  z-index: 20;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.color};
  padding: 0 0 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  & .toogle-theme {
    display: none;
  }
  @media ${device.tablet} {
    flex-wrap: wrap;
    & .toogle-theme {
      display: inline-block;
      margin-top: 6px;
      margin-right: 10px;
      text-align: right;
    }
  }
`

export const TitleNav = styled.h1`
  margin: 0 0 0 10px;
  font-size: 18px;
  color: #fff;
  min-width: 250px;
  max-width: 250px;
`
const commonsSpan = css`
  min-width: 120px;
  padding: 6px;
  @media ${device.tablet} {
    color: ${({ theme }) => theme.link};
    background: ${({ theme }) => theme.body};
    & svg {
      fill: ${({ theme }) => theme.link};
    }
  }
`

const commonsSvg = css`
  float:left;
`

export const BodyNav = styled.nav`
  & ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;
    justify-content: space-between;
  }
  & ul li:not(:last-child) {
    padding: 0;
    min-width: 50px;
    text-align: center;
    font-weight: 700;
  }
  & ul > li a:hover {
    display: block;
    color: ${({ theme }) => theme.link};
    background: ${({ theme }) => theme.color};
  }
  & ul li a svg {
    display: block;
  }
  & .nav-home a svg {
    margin-left: 15px;
  }
  & .nav-todo {
    margin: 4px 7px 0 0;
  }
  & .nav-toggle {
    margin: 6px 10px 0 0;
  }
  & .nav-mark {
    height: 20px;
    margin: 0 20px 0 7px;
  }
  & .nav-el {
    color: ${({ theme }) => theme.color};
    background: #FFF;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    ${commonsSpan}
  }
  & .nav-el:hover {
    background: ${({ theme }) => theme.link};
  }
  & .nav-el a {
    background: #FFF;
    color: ${({ theme }) => theme.color};
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  & svg {
    ${commonsSvg}
  }
  & .nav-mark svg:hover {
    fill: ${({ theme }) => theme.link};
  }
  @media ${device.tablet} {
    position: fixed;
    left: 0;
    top: 35px;
    height: 40px;
    width: 100%;
    margin: 5px 0 0 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.link};
    & ul {
      padding-top: 4px;
    }
    & .nav-home a svg {
      fill: ${({ theme }) => theme.link};
    }
    & .nav-todo a {
      color: ${({ theme }) => theme.link};
    }
    & .nav-todo a:hover {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.color};
    }
    & .nav-toggle {
      display: none;
    }
    & .nav-el {
      color: ${({ theme }) => theme.link};
      background: ${({ theme }) => theme.body};
      border: .1px solid ${({ theme }) => theme.link};
    }
    & .nav-el:hover {
      background: ${({ theme }) => theme.color};
      border: 1px solid ${({ theme }) => theme.color};
    }
    & .nav-li button {
      border: 1px solid ${({ theme }) => theme.link};
    }
    & .nav-mark svg {
      fill: ${({ theme }) => theme.link};
    }
    & .nav-mark svg:hover {
      fill: ${({ theme }) => theme.color};
    }
  }
`

const commonsButtonNav = css`
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
`

export const DropdownNav = styled.div`
  & .menu-trigger {
    background: #FFF;
    color: ${({ theme }) => theme.color};
    border-radius: 5px;
    border: none;
    ${commonsSpan}
    cursor: pointer;
  }
  & .menu-trigger:hover {
    background: ${({ theme }) => theme.link};
    color: ${({ theme }) => theme.color};
  }
  & svg {
    ${commonsSvg}
  }
  & .menu {
    font-size: 0.8em;
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 45px;
    right: 0.6em;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  }
  & .menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  & .menu ul {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & .menu li {
    width: 175px;
    border-bottom: 1px solid #ccc;
  }
  & .menu li:first-child {
    padding: 0;
    margin: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & .menu li:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: none;
  }
  & .menu li:hover {
    background: ${({ theme }) => theme.link};
    color: #FFF;
  }
  & .menu li:first-child a:hover {
    display: block;
  }
  & .menu li:last-child:hover {
    background: ${({ theme }) => theme.link};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  & .menu li a {
    padding-left: 5px;
    color: #333;
    text-decoration: none;
  }
  & .menu li a:hover {
    background: ${({ theme }) => theme.link};
    color: #FFF;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & .menu button {
    ${commonsButtonNav}
    text-align: left;
    width: 100vw;
    padding: .6em .6em .6em 5px;
  }
  & .menu button:hover {
    color: #FFF;
  }
  & .menu span {
    margin-left: 5px;
    font-weight: 600;
  }
  @media ${device.tablet} {
    & .menu-trigger:hover {
      background: ${({ theme }) => theme.color};
      color: ${({ theme }) => theme.link};
      border: .1px solid ${({ theme }) => theme.color};
    }
  }
`

export const LinkNav = styled(NavLink)`
  ${commonsButtonNav}
  color: #FFF;
  &:hover {
    background: #FFF;
    color: ${({ theme }) => theme.color};
  }
  &:active {
    background: #FFF;
    color: #5101d1;
  }
  &:link {
    text-decoration: none;
  }
  &:hover ${SvgHome} {
    fill: ${({ theme }) => theme.link};
  }
  @media ${device.tablet} {
    &:hover ${SvgHome} {
      fill: ${({ theme }) => theme.color};
    }
  }
`

export const DivNav = styled.div`
  ${commonsButtonNav}
  color: #333;
  margin-left: 5px;
`

export const ButtonNav = styled.button`
  ${commonsButtonNav}
  color: #000;
  &:hover {
    background: #FFF;
    color: #5101d1;
    border-radius: 5px;
  }
  &:active {
    background: #FFF;
    color: #5101d1;
    border-radius: 5px;
  }
  & svg {
    margin: 0 0 -1px 4px;
  }
`
export const SpanNav = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: purple;
    text-decoration: none;
  }
`