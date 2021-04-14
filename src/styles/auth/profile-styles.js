import styled, { css } from 'styled-components'
import { commonsForm, commonsInput, commonsLabel, commonsSpan, commonsEffect } from './auth-styles'

import {
  device,
} from '../index'


export const BoxProfile = styled.div`
  width: 500px;
  height: auto;
  margin: 10em auto 2em;
  padding: 20px 20px 30px 20px;
  background: ${({ theme }) => (theme.body === '#FFFFFFE6') ? '#FFF' : theme.body };
  color: ${({ theme }) => theme.text};
  box-shadow: 8px 0 8px -10px ${({ theme }) => theme.text}
            , -8px 0 8px -10px ${({ theme }) => theme.text}
            , 0 -6px 6px -10px ${({ theme }) => theme.text};
  border: none;
  &.effect5 {
    position: relative;
  }
  &.effect5:before {
    ${commonsEffect}
  }
  &.effect5:after {
    ${commonsEffect}
    transform: rotate(5deg);
    right: 10px;
    left: auto;
  }
  @media ${device.tablet} {
    width: 95vw;
    margin-top: 10em;
  }
  @media ${device.mobileL} {
    margin-top: 8em;
  }
`
const commonsInputSpan = css`
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 2px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
`

const commonsFormProfile = css`
  width: 500px;
  max-width: 90%;
  margin: 0 auto;
  & .titleForm {
    text-align: center;
    font-size: 1.2em;
    font-weight: 500;
    padding: 5px 0 15px 0;
  }
  & .photoUser {
    display: block;
    margin: 0;
    padding-bottom: 30px;
  }
  & .form-group {
    padding-bottom: 15px;
  }
  & .form-group input {
    ${commonsInputSpan}
    border-radius: 0;
    color: white;
    margin: .5px 0 7.5px 0;
  }
  & .form-group input:not([disabled]) {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  & .form-group input:focus {
    ${commonsInputSpan}
    margin: .5px 0 7.5px 0;
   }
  & .form-group span {
    ${commonsInputSpan}
    padding-top: 7.5px;
    margin: .5px 0 8px 0;
  }
  & .form-group span.disabled {
    cursor: not-allowed;
  }
  & .form-action {
    margin-top: 0;
    padding: 0;
  }
  @media ${device.tablet} {
    width: 95vw;
  }
`

export const FormProfile = styled.form`
  ${commonsFormProfile}
  ${commonsForm}
`

export const DivProfile = styled.div`
  ${commonsFormProfile}
  ${commonsForm}
  & .titleForm h1.profil {
    font-size: 1.2em;
  }
  & .form-group span.align {
    top: -5px;
    font-size: .7em;
    color: blue;
  }
  & .form-group input.show-green {
    color: #66e987;
  }
  & .form-group input.show-red {
    color: #e96671;
  }
`

export const InputProfile = styled.input`
  height: 32px;
  padding: 6px 0 6px 10px;
  ${commonsInput}
`

export const LabelProfile = styled.label`
  ${commonsLabel}
`

export const SpanProfile = styled.span`
  display: block;
  height: 32px;
  padding: 6px 0 6px 10px;
  &:disabled {
    cursor: not-allowed;
  }
  ${commonsSpan}
`

export const ButtonProfile = styled.button`
  display: block;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 8px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: ${({ theme }) => theme.custom};
  border: none;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`

export const ImageProfile = styled.img`
  display: block;
  width: 100px; 
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px;
  margin: 10px auto;
`
