import { createGlobalStyle } from 'styled-components'

export const colors = {
  cream: '#FFF8F2',
  salmon: '#E66767',
  salmonDark: '#B54B4B',
  black: '#111111',
  white: '#FFFFFF',
  gray: '#E5E5E5'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${colors.cream};
    color: ${colors.salmon};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`

export default GlobalStyle
