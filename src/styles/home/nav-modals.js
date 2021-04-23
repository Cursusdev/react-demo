import styled from 'styled-components'

import {
  device,
} from '../index'


export const ModalBackdrop = styled.div`
  z-index: 30;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
`

export const ModalWrapper = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: .5px solid #eee;
  width: ${props => props.width};
  height: ${props => props.height};
  margin-top: ${props => props.top};
  bottom: 0;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  padding: 0 0 12px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  text-align: justify;
  @media ${device.tablet} {
    margin-top: 40px;
    width: 70vw;
    height: auto;
    margin-top: 40px;
  }
  @media ${device.mobileL} {
    overflow-y: scroll;
    width: 95vw;
    height: 90vh;
  }
`

export const ModalHeader = styled.header`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin: 1em;
  color: ${({ theme }) => theme.nav};
`

export const ModalHeading = styled.h3`
  color: ${({ theme }) => theme.nav};
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 1em 0;
  & svg {
    margin: 0 20px 3px 0;
    vertical-align: bottom;
  }
`

export const ModalBody = styled.div`
  font-size: 14px;
  padding-right: 18px;
  padding-left: 18px;
  margin-top: .5em;
`

export const ModalFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0 0 1em 0;
  border: 0;
  & p {
    margin: 0 0 1em 0;
    padding: 0;
    line-height: 1.5em;
  }
  & ul {
    padding-right: 18px;
    padding-left: 18px;
    margin: 0;
  }
  & ul li {
    margin-bottom: .5em;
  }
`

export const ModalButton = styled.button`
  display: block;
  width: 80%;
  padding: 12px 0;
  margin: 1.5em auto;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  background: ${({ theme }) => theme.custom};
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
