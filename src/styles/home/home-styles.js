import styled from 'styled-components'


export const HomeStyles = styled.main`
  position: relative;
  width: 100%;
  & header {
    z-index: 1;
  }
`

export const SectionFound = styled.section`
  top: 10em;
  height: auto;
  font-size: 1.2em;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.text};
  & span {
    color: ${({ theme }) => theme.link};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.link};
    letter-spacing: 1.5px;
  }
`
