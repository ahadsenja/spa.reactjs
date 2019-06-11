import React from 'react';
import './App.css';
import Main from './app/Main'
import NavbarMenu from './components/Navbar/Navbar'
import { Container } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header>
        <NavbarMenu />
      </header>
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
