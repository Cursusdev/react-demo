import styled from 'styled-components'

import {
  device
} from '../index'


export const ToastMain = styled.div`
  .notification-container {
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    z-index: 10
  }
  .top-left {
    top: 25px;
    left: 5px;
    transition: transform .6s ease-in;
    animation: toast-in-left .7s;
  }
  .bottom-left {
    bottom: 12px;
    left: 12px;
    transition: transform .6s ease-in;
    animation: toast-in-left .7s;
  }
  .notification {
    background: #fff;
    transition: .3s ease;
    position: relative;
    pointer-events: auto;
    overflow: hidden;
    margin: 0 0 6px;
    padding: 30px;
    margin-bottom: 10px;
    width: 400px;
    max-height: 100px;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 0 10px #999;
    color: #000;
    opacity: .9;
    background-position: 15px;
    background-repeat: no-repeat;
  }
  .notification:hover {
    box-shadow: 0 0 12px #fff;
    opacity: 1;
    cursor: pointer
  }
  .notification-message {
    margin: 0;
    text-align: left;
    margin-left: -1px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-line;
  }
  .notification-image {
    float: left;
    margin: 2px 10px 0 0;
  }
  .toast {
    max-height: 50px;
    min-height: 32px;
    width: 300px;
    color: #fff;
    padding: 7px 10px 10px 10px;
  }
  .notification-container button {
    position: relative;
    right: -.3em;
    float: right;
    font-weight: 700;
    color: #fff;
    outline: none;
    border: none;
    text-shadow: 0 1px 0 #fff;
    opacity: .8;
    line-height: 1;
    font-size: 14px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0
  }
  @keyframes toast-in-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes toast-in-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media ${device.tablet} {
    .top-right {
      top: 45px;
    }
    .top-left {
      top: 45px;
    }
  }
`
