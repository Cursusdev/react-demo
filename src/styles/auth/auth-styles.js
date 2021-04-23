import styled, { css } from 'styled-components'

import {
  device,
} from '../index'
import {
  SvgAnonymous,
} from '../../assets/index'


export const commonsForm = css`
   & .valid {
    position: relative;
    top: -12px;
    font-size: 1em;
    margin-right: 5px;
    float: right;
    color: green;
  }
  & .helpError {
    position: relative;
    top: -12px;
    font-size: .8em;
    margin-left: 5px;
    color: red;
  }
  & .helpValid {
    position: relative;
    top: -12px;
    font-size: .7em;
    margin-left: 5px;
    color: green;
  }
  & .helpKpi {
    position: relative;
    bottom: -3px;
    font-size: .8em;
    margin-left: 160px;
    color: green;
  }
`

export const FormAuth = styled.form`
  width: 350px;
  margin: .5em auto 2em;
  height: auto;
  overflow: hidden;
  &.modalUser {
    margin: 40px auto;
  }
  &.auth {
    margin-top: 12em;
  }
  & .titleForm h1 {
    font-size: 1.5em;
    font-weight: 500;
    margin: 0;
  }
  & .titleForm .change-pwd {
    margin-top: 2em;
  }
  & .social-link {
    font-size: .7em;
    float: right;
    color: #0000EE;
    text-decoration: underline;
    text-decoration-color: #0000EE;
  }
  & .social-link:hover {
    color: #7231da;
    text-decoration: none;
    cursor: pointer;
  }
  & .titleForm p {
    font-size: 0.8em;
  }
  & .form-group {
    height: 65px;
    margin-bottom: 11px;
    margin-right: 3px;
  }
  & .form-group input {
    width: 101%;
  }
  & .form-action {
    height: 80px;
    padding-top: 5px;
    margin: 0;
  }
  & .form-action input {
    margin: 5px;
  }
  & .auth-div {
    float: right;
    padding-top: 10px;
  }
  & .auth-div p {
    margin: 0;
  }
  & label input[type=checkbox] {
    margin: 0 .5em 0 0;
    cursor: pointer;
  }
  & label span {
    font-size: .8em;
  }
  & .auth-cgu {
    font-size: .8em;
    vertical-align: top;
    user-select: none;
  }
  & .auth-span {
    font-size: .9em;
    color: ${({ theme }) => theme.link};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.link};
    letter-spacing: 1.5px;
  }
  & .auth-span:hover {
    color: #7231da;
    text-decoration: none;
    cursor: pointer;
  }
  & .auth-forget {
    color: #0000EE;
    text-decoration-color: #0000EE;
    font-size: .8em;
  }
  & i {
    position: relative;
    top: -42px;
    right: -90%;
    color: black;
    font-size: 2em;
  }
  & i:hover {
    color: #0000EE;
    cursor: pointer;
  }
  & input.show-green:focus {
    border-color: #66e987;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(176, 233, 102, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(176, 233, 102, 0.6);
  }
  & input.show-green:valid {
    border-color: #66e987;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(176, 233, 102, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(176, 233, 102, 0.6);
  }
  & input.show-red:focus {
    border-color: #e96671;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(233, 102, 178, 0.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(233, 102, 178, 0.6);
  }
  & .forget a {
    font-size: .9em;
  }
  & .forget a:hover {
    text-decoration: none;
  }
  ${commonsForm}
  & .adjust1 {
    top: -28px;
    margin-left: -20px;
  }
  & .adjust2 {
    top: -34px;
    margin-left: -20px;
  }
  & .adjust3 {
    top: -5px;
  }
  & .form-control {
    margin-bottom: 1em;
  }
  & .form-footer {
    font-size: .9em;
    text-align: right;
    margin-top: 8px;
  }
  & .form-footer a:hover {
    text-decoration: none;
  }
  & .formFooter span {
    font-size: 1em;
  }
  @media ${device.tablet} {
    max-width: 300px;
    &.auth {
      margin-top: 10em;
    }
  }
  @media ${device.mobileL} {
    
    .titleForm {
      max-width: 90vw;
    }
    .form-group {
      max-width: 90vw;
      margin-left: .2em;
    }
    .form-action {
      max-width: 90vw;
    } 
  }
`

export const FieldsetAuth = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
`

export const commonsInput = css`
  color: #555;
  font-family: inherit;
  font-size: 14px;
  border: .5px solid #ccc;
  border-radius: 4px;
  line-height: 1.4;
  transition: border-bottom-color 0.25s ease-in;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

export const InputAuth = styled.input`
  padding: 0 0 0 15px;
  height: 32px;
  ${commonsInput}
`

export const commonsLabel = css`
  display: inline-block;
  font-size: 0.9em;
  max-width: 100%;
  font-weight: 700;
  margin-bottom: 5px;
`

export const LabelAuth = styled.label`
  ${commonsLabel}
`

export const commonsSpan = css`
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: .5px solid #ddd;
  transition: border-bottom-color 0.25s ease-in;
`

export const SpanAuth = styled.span`
  padding: 7px 0;
  height: 32px;
  ${commonsSpan}
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

export const IconAuth = styled.span`
  color: ${({ theme }) => theme.nav};
  cursor: pointer;
  transition: opacity .25s ease-in;
  & ${SvgAnonymous} {
    float: left;
    margin: 10px -30px 0 14px;
  }
  & .anonymous-auth {
    margin-left: 0;
    font-size: .9em;
    padding: 15px 15px 15px 50px;
    border: 1px solid #ccc;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`

export const HeadingAuth = styled.header`
  padding-top: 28px;
  padding-bottom: 28px;
`

export const TitleAuth = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
`

export const ItemsAuth = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`

export const ItemAuth = styled.li`
  margin: 15px 0 15px 0;
  padding: 0;
  & span {
    display: block;
    width: 250px;
  }
`

export const commonsEffect = css`
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 25px;
  left: 10px;
  width: 50%;
  top: 60%;
  max-width:300px;
  background: #777;
  -webkit-box-shadow: 0 35px 20px #777;
  -moz-box-shadow: 0 35px 20px #777;
  box-shadow: 0 35px 20px #777;
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  -o-transform: rotate(-8deg);
  -ms-transform: rotate(-8deg);
  transform: rotate(-8deg);
`

export const ButtonAuth = styled.input`
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 700;
  text-align: center;
  background: ${({ theme }) => theme.link} ${props => props.isLoading ? `no-repeat center top 2px` : ``};
  background-image: ${props => props.isLoading ? `url(${props.img})` : 'none'};
  color: ${props => props.isLoading ? 'transparent' : ({ theme }) => theme.body};
  border: 2px solid ${({ theme }) => theme.link};
  border-radius: 3px;
  padding: .35em 1em;
  margin-right: 1em;
  cursor: pointer;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  &:hover {
    background: ${({ theme }) => theme.hover} ${props => props.isLoading ? `no-repeat center top 2px` : ``};
    background-image: ${props => props.isLoading ? `url(${props.img})` : 'none'};
    color: ${props => props.isLoading ? 'transparent' : ({ theme }) => theme.body};
    border: 2px solid ${({ theme }) => theme.hover};
  }
  &:disabled {
    cursor: wait;
  }
  &:focus {
    color: ${({ theme }) => theme.body};
    outline: none;
  }
  &:focus:hover {
    background: ${({ theme }) => theme.hover};
    outline:  none;
  }
  &:active:focus {
    background: ${({ theme }) => theme.hover};
    border: 2px solid ${({ theme }) => theme.hover};
    outline:  none;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.16);
  }
  @media screen and ${device.tablet} {
    // not hover styles here
    &:hover {
      background: ${({ theme }) => theme.link} ${props => props.isLoading ? `no-repeat center top 2px` : ``};
      background-image: ${props => props.isLoading ? `url(${props.img})` : 'none'};
      color: ${props => props.isLoading ? 'transparent' : ({ theme }) => theme.body};
      border: 2px solid ${({ theme }) => theme.link};
    }
    &:focus:hover {
      background: ${({ theme }) => theme.link};
    }
    &:active:focus {
      background: ${({ theme }) => theme.link};
      border: 2px solid ${({ theme }) => theme.link};
    }
  }
`