import styled, { css } from 'styled-components'

import {
  device,
} from '../index'


export const SectionTodo = styled.section`
  z-index: 10;
  top: 200px;
  margin: 0;
  padding: 0;
  letter-spacing: 3px;
  & table {
  }
  & h1 {
    text-align: center;
    font-size: 1em;
  }
  & > div:last-child {
    padding-bottom: 60px;
  }
  @media ${device.tablet} {
    top: 7em;
    margin-top: 40px;
    height: auto;
  }
  @media ${device.mobileL} {
    top: 7em;
  }
`
  
export const TableTodo = styled.table`
  width: 500px;
  table-layout: fixed;
  border: none;
  border-collapse: collapse;
  margin: 0 auto;
  th:first-child {
    width: 47%;
    float: right;
    clear: both;
  }
  th:last-child {
    width: 40px;
    margin-left: 0;
  }
  tbody:before {
    content:"@";
    display:block;
    line-height:10px;
    text-indent:-99999px;
  }
  .btn-actions {
    width: 20px;
    cursor: pointer;
  }
  .btn-delete {
    margin: 0 0 1px 10px;
    padding: 3px 10px 5px 10px; 
    background-color: red;
    border-radius: 5px;
    color: ${({ theme }) => theme.body};
    cursor: pointer;
    user-select: none;
  }
  @media ${device.tablet} {
    width: 70vw;
  }
  @media ${device.mobileL} {
    width: 95vw;
  }
`

const commonsEffect = css`
  z-index: -1;
  position: absolute;
  content: "";
  bottom: 25px;
  left: 2px;
  width: 50%;
  top: 60%;
  max-width:300px;
  background: #777;
  box-shadow: 0 25px 5px #777;
  transform: rotate(-5deg);
`

export const BoxTodo = styled.div`
  width: 400px;
  height: 150px;
  margin: 40px auto;
  padding: 25px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.body};
  font-weight: 600;
  border-bottom: .5px solid ${({ theme }) => theme.body};
  background: linear-gradient(to right, #ed8034 0%,#ed8034 33%,#feb123 33%,#feb123 66%,#2184cd 66%,#2184cd 100%);
  &.effect5 {
    position: relative;
  }
  &.effect5:before {
    ${commonsEffect}
  }
  &.effect5:after {
    ${commonsEffect}
    transform: rotate(5deg);
    right: 2px;
    left: auto;
  }
  & label {
    margin: 0 5px 0 0;
    user-select: none;
  }
  & input {
    padding-left: 10px;
    border-radius: 4px;
    bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 3px solid #bbb;
    background: ${({ theme }) => theme.body};
    transform: rotate(-5deg);
    text-shadow: 1px 1px 2px pink;
  }
  & input:focus + label::after {
    margin-left: 4(0)px;
    color: ${({ theme }) => theme.body};
    font-size: 0.75em;
    content: 'entrée, tabulation ou click pour valider';
    text-shadow: 1px 1px 2px pink;
  }
  & input:placeholder {
    letter-spacing: 3px;
    color: #bbb;
  }
  @media ${device.tablet} {
    max-width: 400px;
  }
  @media ${device.mobileL} {
    max-width: 95vw;
  }
`
const commonsInputSpan = css`
  padding: 7px 0 7px 10px;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 3px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
`

export const InputTodo = styled.input`
  ${commonsInputSpan}

  border-bottom: 1px solid #ddd;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: border-bottom-color 0.25s ease-in;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    background-color: ${({ theme }) => theme.body};
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.body} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.text};
    caret-color: ${({ theme }) => theme.text};
  }
`

export const SpanTodo = styled.span`
  ${commonsInputSpan}
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: border-bottom-color 0.25s ease-in;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

export const ButtonTodo = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 8px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`