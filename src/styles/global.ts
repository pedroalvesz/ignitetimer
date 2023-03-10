import {createGlobalStyle, ThemeConsumer} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${({theme}) => theme['green-500']};
}

body {
  background-color: ${({theme}) => theme['gray-900']};
  color: ${({theme}) => theme.white };

};

body, input, button, textarea {
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
}
`