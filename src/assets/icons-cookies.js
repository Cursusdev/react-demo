import React from 'react'
import styled from 'styled-components'


const Icon = styled.svg.attrs({ 
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``

const SvgMechanical = styled(Icon)`
  width: 20px; 
  height: 20px;
  fill: ${({ theme }) => theme.nav};
`

export const Mechanical = () => (
  <SvgMechanical viewBox="0 0 418.879 418.879">
    <path d="M188.634,234.066c8.462-5.287,16.126-11.735,22.767-19.127l23.942,13.826l21.8-37.76l-23.894-13.796
    c3.038-9.275,4.825-19.113,5.16-29.311l27.183-4.793l-7.574-42.938l-27.178,4.793c-3.756-9.309-8.795-17.965-14.906-25.744
    l17.766-21.17L200.3,30.022l-17.751,21.152c-8.67-4.646-18.059-8.119-27.954-10.203V13.385h-43.6v27.586
    c-9.896,2.084-19.285,5.557-27.956,10.203l-17.75-21.152l-33.4,28.025l17.764,21.17c-6.11,7.779-11.149,16.436-14.905,25.744
    L7.57,100.168L0,143.106l27.179,4.793c0.335,10.199,2.123,20.035,5.161,29.313L8.444,191.007l21.801,37.759l23.943-13.822
    c6.639,7.389,14.303,13.838,22.766,19.125l-9.451,25.963l40.972,14.91l9.438-25.928c4.864,0.688,9.831,1.053,14.882,1.053
    c5.051,0,10.019-0.363,14.883-1.053l9.437,25.93l40.97-14.914L188.634,234.066z M132.793,200.065
    c-30.702,0-55.68-24.977-55.68-55.68c0-30.701,24.978-55.68,55.68-55.68s55.68,24.979,55.68,55.68
    C188.473,175.088,163.496,200.065,132.793,200.065z"/>
    <path d="M376.041,266.807l-18.795,6.08c-3.584-6.229-8.014-11.869-13.115-16.779l10.504-16.764l-26.447-16.57l-10.498,16.75
    c-6.604-2.438-13.602-3.973-20.826-4.471l-2.725-19.559l-30.912,4.309l2.725,19.559c-6.809,2.453-13.125,5.847-18.812,9.996
    l-14.672-13.244l-20.912,23.168l14.684,13.259c-3.562,6.118-6.277,12.752-8.02,19.726l-19.744-0.714l-1.129,31.188l19.743,0.716
    c1.246,7.198,3.486,13.991,6.558,20.271l-15.578,12.143l19.185,24.615l15.609-12.164c5.438,4.582,11.511,8.396,18.031,11.311
    l-4.138,19.344l30.522,6.52l4.133-19.314c3.516,0.01,7.072-0.229,10.652-0.727c3.582-0.498,7.07-1.25,10.447-2.215l9.256,17.451
    l27.574-14.623l-9.266-17.471c5.48-4.586,10.271-9.918,14.252-15.812l18.338,7.436l11.727-28.924l-18.303-7.422
    c1.234-6.875,1.529-14.027,0.764-21.293l18.799-6.084L376.041,266.807z M297.129,350.006
    c-21.771,3.031-41.949-12.209-44.98-33.977c-3.037-21.769,12.207-41.949,33.977-44.979c21.768-3.036,41.941,12.207,44.98,33.978
    C334.135,326.795,318.896,346.969,297.129,350.006z"/>
    <path d="M418.146,158.647l0.732-24.629l-15.586-0.463c-0.977-5.428-2.723-10.803-5.285-15.971l12.24-9.67l-15.271-19.33
    l-12.238,9.666c-4.365-3.627-9.193-6.584-14.318-8.816l3.164-15.291l-24.123-4.996l-3.17,15.281
    c-5.559,0.008-11.156,0.797-16.641,2.412l-7.391-13.727l-21.695,11.684l7.391,13.729c-4.363,3.686-8.107,7.934-11.176,12.566
    l-14.496-5.77l-9.111,22.893l14.508,5.779c-0.955,5.508-1.141,11.158-0.514,16.799l-14.809,4.898l7.732,23.395l14.809-4.896
    c2.9,4.986,6.426,9.396,10.426,13.201l-8.191,13.268l20.963,12.946l8.209-13.292c5.285,1.896,10.828,3.051,16.453,3.414
    l2.252,15.453l24.383-3.561l-2.246-15.434c2.602-0.957,5.17-2.109,7.684-3.463c2.516-1.352,4.891-2.867,7.123-4.51l11.648,10.371
    l16.387-18.398l-11.656-10.383c2.795-4.9,4.875-10.164,6.203-15.619L418.146,158.647z M359.436,171.844
    c-15.281,8.227-34.404,2.492-42.627-12.783c-8.23-15.277-2.494-34.404,12.787-42.627c15.273-8.229,34.395-2.49,42.625,12.787
    C380.443,144.499,374.711,163.616,359.436,171.844z"/>
  </SvgMechanical>
)


const SvgTimer = styled(Icon)`
  width: 20px; 
  height: 20px;
  fill: ${({ theme }) => theme.nav};
`

export const Timer = () => (
  <SvgTimer viewBox="0 0 612 612">
    <path d="M432.272,68.692l-20.554,35.567l71.221,41.109l20.555-35.568c5.661-9.873,2.29-22.4-7.545-28.104l-35.567-20.555
      C450.542,55.443,437.977,58.814,432.272,68.692z"/>
    <path d="M306,92.56c13,0,25.699,1.272,38.25,3.065V62.357l26.297-0.201V19.125C370.547,8.554,361.993,0,351.422,0h-90.643
      c-10.571,0-19.125,8.554-19.125,19.125v43.031l26.096,0.201v33.268C280.301,93.832,293,92.56,306,92.56z"/>
    <path d="M306,114.75c-137.312,0-248.625,111.312-248.625,248.625S168.688,612,306,612s248.625-111.312,248.625-248.625
      S443.312,114.75,306,114.75z M422.185,480.229L277.312,379.933V238.34h41.808v119.689l126.86,87.827L422.185,480.229z"/>
  </SvgTimer>
)

const SvgShare = styled(Icon)`
  width: 20px; 
  height: 20px;
  fill: ${({ theme }) => theme.nav};
`

export const Share = () => (
  <SvgShare viewBox="0 0 512 512">
    <path d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124
      c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90
      c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59
      C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806
      l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90
      C496,372.371,455.629,332,406,332z"/>
  </SvgShare>
)
