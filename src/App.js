import React from "react";
import Footer from "./components/Footer";
import {Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";

const App = () => {
  return(
    <>
      <Header/>
      <Routes>
        <Route path ='/' element = {<Main/>}/>
        <Route path = '/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;