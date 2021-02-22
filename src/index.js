import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors:{
    purple:{
      1: "#4f0080",
      2: "#bb4dff",
      3: "#9e00ff",
      4: "#5d2680",
      5: "#7e00cc",

    }
  }
})

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
