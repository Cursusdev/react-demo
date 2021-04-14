import React from 'react'
import styled from 'styled-components'


const Icon = styled.svg.attrs({ 
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

const SvgCheck = styled(Icon)`
  width: 15px;
  height: 15px;
`

export const Check = () => (
  <SvgCheck viewBox="0 0 32 32" fill="#ffffff">
    <path d="m16,0c-8.836,0 -16,7.164 -16,16s7.164,16 16,16s16,-7.164 16,-16s-7.164,-16 -16,-16zm-2.48,23.383l-7.362,-7.363l2.828,-2.828l4.533,4.535l9.617,-9.617l2.828,2.828l-12.444,12.445z" />
  </SvgCheck>
)

const SvgInfo = styled(Icon)`
  width: 15px;
  height: 15px;
`

export const Info = () => (
  <SvgInfo viewBox="0 0 85 85" fill="#ffffff">
    <path d="m42.5,0.003c-23.472,0 -42.5,19.028 -42.5,42.5s19.028,42.5 42.5,42.5s42.5,-19.027 42.5,-42.5s-19.028,-42.5 -42.5,-42.5zm-0.212,66.267c0,0 -1.972,1.311 -3.32,1.305c-0.12,0.055 -0.191,0.087 -0.191,0.087l0.003,-0.087c-0.283,-0.013 -0.568,-0.053 -0.855,-0.125l-0.426,-0.105c-2.354,-0.584 -3.6,-2.918 -3.014,-5.271l3.277,-13.211l1.479,-5.967c1.376,-5.54 -4.363,1.178 -5.54,-1.374c-0.777,-1.687 4.464,-5.227 8.293,-7.896c0,0 1.97,-1.309 3.319,-1.304c0.121,-0.056 0.192,-0.087 0.192,-0.087l-0.005,0.087c0.285,0.013 0.57,0.053 0.857,0.124l0.426,0.106c2.354,0.584 3.788,2.965 3.204,5.318l-3.276,13.212l-1.482,5.967c-1.374,5.54 4.27,-1.204 5.446,1.351c0.777,1.685 -4.559,5.201 -8.387,7.87zm8.306,-41.294c-0.818,3.295 -4.152,5.304 -7.446,4.486c-3.296,-0.818 -5.305,-4.151 -4.487,-7.447c0.818,-3.296 4.152,-5.304 7.446,-4.486c3.296,0.817 5.304,4.151 4.487,7.447z" />
  </SvgInfo>
)

const SvgWarning = styled(Icon)`
  width: 15px;
  height: 15px;
`

export const Warning = () => (
  <SvgWarning viewBox="0 0 1792 1792" fill="#ffffff">
    <path d="m1024,1375l0,-190q0,-14 -9.5,-23.5t-22.5,-9.5l-192,0q-13,0 -22.5,9.5t-9.5,23.5l0,190q0,14 9.5,23.5t22.5,9.5l192,0q13,0 22.5,-9.5t9.5,-23.5zm-2,-374l18,-459q0,-12 -10,-19q-13,-11 -24,-11l-220,0q-11,0 -24,11q-10,7 -10,21l17,457q0,10 10,16.5t24,6.5l185,0q14,0 23.5,-6.5t10.5,-16.5zm-14,-934l768,1408q35,63 -2,126q-17,29 -46.5,46t-63.5,17l-1536,0q-34,0 -63.5,-17t-46.5,-46q-37,-63 -2,-126l768,-1408q17,-31 47,-49t65,-18t65,18t47,49z" />
  </SvgWarning>
)

const SvgError = styled(Icon)`
  width: 15px;
  height: 15px;
`

export const Error = () => (
  <SvgError viewBox="0 0 32 32">
    <g>
      <circle fill="#ffffff" r="16" cy="16" cx="16"/>
    </g>
    <g fill="#d72828">
      <path d="m14.5,25l3,0l0,-3l-3,0l0,3zm0,-19l0,13l3,0l0,-13l-3,0z" />
    </g>
  </SvgError>
)