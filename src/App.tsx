import React from 'react';
import {Routes,Route}from "react-router-dom";
import {Container} from "react-bootstrap";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Store  from "../src/pages/Store";
import Navbar from "../src/Components/Navbar"


function App() {
  return (
    <>
    <Navbar/>
   <Container className="mb-4">
    <Routes>
      <Route path ="/"  element={<Home/>}></Route>
      <Route path ="/store"  element={<Store/>}></Route>
      <Route path ="/about"  element={<About/>}></Route>
    
    </Routes>
   </Container>

   </>
  );
}

export default App;
