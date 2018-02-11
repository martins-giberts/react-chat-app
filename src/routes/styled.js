import styled, {injectGlobal} from 'styled-components'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * { margin: 0; padding: 0; text-decoration: none; }
  html { font-size: 62.5%; }
  body {
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    box-sizing: border-box;
  }
`

export const AppContainer = styled.div`
  margin: 20px;
`
