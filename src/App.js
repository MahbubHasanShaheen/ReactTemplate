
import './App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Home } from './components/Home.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link}to="/">React Tamplte</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as ={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <div>
  <Routes >
     <Route path="/" exact element={ <Home /> } />
     <Route path="/about" element={ <About /> } />
     <Route path="/contact" element={ <Contact /> } />
  </Routes>
</div>

</div>
</BrowserRouter>

  );
}

export default App

