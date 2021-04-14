import styled from 'styled-components'


export const ToggleContainer = styled.div`
  position: relative;
  width: 40px;
  display: inline-block;
  div {
    float: left;
    width: 40px;
    height: 22px;
    margin: 0;
    padding: 1px;
    border-radius: 10px;
    ${props => props.isTheme
    ? `background: radial-gradient(circle at 20px 20px, #FFF, #5cabff);`
    : `background: radial-gradient(circle at 20px 20px, #5cabff, #000);`}
    transition: all 0.3s ease;
    cursor: pointer;
    userSelect: none;
  }
  & div > span {
    display: inline-block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    content: " ";
    float: ${props => props.isTheme ? "right" : "left"};
    transition: all 0.6s ease;
    cursor: pointer;
  }
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const ToggleStyle = styled.div`
  position: relative;
  width: 45px;
  display: inline-block;
  margin-top: -2px;
  & .toggle-background {
    float: left;
    width: 35px;
    height: 19px;
    margin: 0;
    padding: 2.5px;
    border-radius: 4px;
    ${props => props.checked
    ? `background-color: #E74C3C;`
    : `background-color: #2ECC71;`}
    color: #fff;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    userSelect: none;
    user-select: none;
  }
  & span {
    display: inline-block;
    border-radius: 4px;
    width: 15px;
    height: 15px;
    content: " ";
    ${props => props.checked
    ? 'float: right;'
    : 'float: left;'}
    transition: all 0.6s ease;
    background: #fff;
    cursor: pointer;
  }
  ${props => props.checked
    ? `& label {
        font-size: .8em;
        cursor: pointer;
        vertical-align: text-top;
      }`
    : `& label {
        font-size: .9em;
        margin-right: -3px;
        cursor: pointer;
        vertical-align: text-top;
      }`}
`
