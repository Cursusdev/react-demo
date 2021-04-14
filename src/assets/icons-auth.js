import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import styled from 'styled-components'


const Icon = styled.svg.attrs({ 
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``


export const SvgUser = styled(Icon)`
  display: block;
  width: 100px; 
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px;
  margin: 15px auto 0;
`

export const User = () => ( 
  <SvgUser viewBox="0 0 512 512">
    <g fill="#dddddd">
      <path d="M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275
        c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987
        c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581
        c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0
        c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581
        c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243
        c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445
        c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328
        h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z" />
    </g>
  </SvgUser>
)

const SvgEye = styled(Icon)`
  width: 21px; 
  height: 21px;
  margin: 0 0 13px 1px;
`

export const Eye = () => (
  <SvgEye viewBox="0 0 576 512">
    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" />
  </SvgEye>
)

const SvgEyeSlash = styled(Icon)`
  width: 23px; 
  height: 23px;
  margin: 0 0 13px 0;
`

export const EyeSlash = () => (
  <SvgEyeSlash viewBox="0 0 640 512">
    <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" />
  </SvgEyeSlash>
)

const SvgEnvelope = styled(Icon)`
  width: 21px; 
  height: 21px;
  margin: 0 0 7px 0;
`

export const Envelope = () => (
  <SvgEnvelope viewBox="0 0 512 512">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
  </SvgEnvelope>
)

const SvgUsername = styled(Icon)`
  width: 20px; 
  height: 20px;
  margin: 0 0 7px 0;
`

export const Username = () => ( 
  <SvgUsername viewBox="0 0 512 512">
    <path d="M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275
    c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987
    c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581
    c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0
    c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581
    c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243
    c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445
    c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328
    h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z" /> 
  </SvgUsername>
)

export const SvgUserURL = styled(Icon)`
  display: block;
  width: 100px; 
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px;
  margin: 15px auto 0;
`

export const UserURL = () => ( 
  <SvgUserURL viewBox="0 0 512 512">
    <g fill="#dddddd">
      <path d="M511.676,498.752l-12.8-51.2c-6.073-24.838-24.485-44.813-48.747-52.885l-93.867-31.275
        c-22.891-9.536-33.365-46.4-35.627-60.395c17.442-14.504,28.665-35.14,31.36-57.664c-0.385-3.847,0.523-7.713,2.581-10.987
        c3.326-0.833,6.049-3.215,7.317-6.4c6.142-14.872,9.997-30.588,11.435-46.613c0.003-0.871-0.104-1.738-0.32-2.581
        c-1.528-6.227-5.189-11.722-10.347-15.531v-56.555c0-34.368-10.496-48.469-21.547-56.64C339.004,33.472,321.276,0,255.996,0
        c-57.917,2.332-104.335,48.75-106.667,106.667v56.555c-5.158,3.809-8.819,9.304-10.347,15.531c-0.216,0.843-0.323,1.711-0.32,2.581
        c1.436,16.033,5.291,31.756,11.435,46.635c0.924,3.015,3.347,5.334,6.4,6.123c1.195,0.597,3.435,3.691,3.435,11.243
        c2.711,22.588,13.999,43.271,31.531,57.771c-2.24,13.973-12.651,50.816-34.901,60.117l-94.699,31.445
        c-24.243,8.071-42.643,28.026-48.725,52.843l-12.8,51.2c-1.449,5.71,2.005,11.514,7.715,12.963c0.853,0.217,1.73,0.327,2.61,0.328
        h490.667c5.891-0.002,10.665-4.779,10.664-10.67C511.993,500.461,511.886,499.595,511.676,498.752z" />
    </g>
  </SvgUserURL>
)

export const SvgAnonymous = styled(Icon)`
  width: 25px; 
  height: 25px;
  fill: ${({ theme }) => theme.text};
`

export const Anonymous = () => ( 
  <SvgAnonymous viewBox="0 0 24 24">
    <path d="m21 18h-1.028c-.061-.249-.241-.457-.493-.537-1.922-.613-4.035-.613-5.957 0-.252.08-.432.288-.493.537h-2.057c-.061-.249-.241-.457-.493-.537-1.922-.613-4.035-.613-5.957 0-.253.08-.432.288-.493.537h-1.029c-.553 0-1 .448-1 1s.447 1 1 1h1v.201c0 1.233.91 2.272 2.164 2.473l1.833.292c.141.023.282.034.423.034.623 0 1.227-.219 1.703-.625.558-.476.877-1.161.877-1.881v-.494h2v.494c0 .72.319 1.405.877 1.881.477.406 1.08.625 1.703.625.141 0 .282-.011.423-.034l1.833-.292c1.254-.2 2.164-1.24 2.164-2.473v-.201h1c.553 0 1-.448 1-1s-.447-1-1-1z"/>
    <path d="m17 7.367v-1.432c0-.953-.48-1.824-1.285-2.332-.806-.508-1.797-.565-2.655-.152l-.31.089c0-.849-.69-1.54-1.538-1.54h-1.462c-1.517 0-2.75 1.236-2.75 2.755v2.612c-4.128.633-7 2.019-7 3.633 0 2.209 5.373 4 12 4s12-1.791 12-4c0-1.614-2.872-3-7-3.633z"/>
  </SvgAnonymous>
)

const SvgSpinner = styled(Icon)`
  width: 25px; 
  height: 25px;
`

const Spinner = () => (
  <SvgSpinner viewBox="0 0 120 120">
    <g fill="yellow">
      <path d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z">
        <animateTransform 
          attributeName="transform" 
          attributeType="XML" 
          type="rotate"
          dur="2s" 
          from="0 50 50"
          to="360 50 50" 
          repeatCount="indefinite" />
      </path>
    </g>
    <g fill="red">
      <path d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
      c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z">
        <animateTransform 
          attributeName="transform" 
          attributeType="XML" 
          type="rotate"
          dur="1s" 
          from="0 50 50"
          to="-360 50 50" 
          repeatCount="indefinite" />
      </path>
    </g>
    <g fill="blue">
      <path d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5L82,35.7z">
        <animateTransform 
          attributeName="transform" 
          attributeType="XML" 
          type="rotate"
          dur="2s" 
          from="0 50 50"
          to="360 50 50" 
          repeatCount="indefinite" />
      </path>
    </g>
  </SvgSpinner>
)

export const SpinnerAnimate = encodeURIComponent(renderToStaticMarkup(<Spinner />))