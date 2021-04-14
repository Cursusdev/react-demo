import { createGlobalStyle } from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    display: flex;
    flex-grow: 1;
    min-height: 100%;
    flex-direction: column;
    overflow: hidden;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
  }
  button { 
    color: inherit;
    font: inherit;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    line-height: normal;
    border: none;
    text-align: inherit;
    background-color: transparent;
    outline: none;
  }
  button.active {
    font-weight: bold;
    outline: none;
  }
  section {
    position relative;
    height: 100vh;
  }
`

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
