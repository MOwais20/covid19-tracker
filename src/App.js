import React from 'react';
import 'fontsource-roboto';
import Header from './components/Header';
import FullWidthGrid from './components/Grid';

function App() {
  return (
    <div style={{ backgroundColor: '#9e9e9e', height: '100vh', width: '100%' }}>
      <Header></Header>
      <FullWidthGrid />
    </div>
  )
}

export default App;