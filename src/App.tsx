import React from 'react';
import { Box } from './utils/Box';
import { GlobalStyle } from './global-styles/GlobalStyle';
import data from './data';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Box as="main">
      <GlobalStyle />
      <Box as="section">
        <Menu data={data} />
      </Box>
    </Box>
  );
}

export default App;
