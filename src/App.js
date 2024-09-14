import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./\broutes/AppRoutes";

const App = () => {
  return(
    <>
      <Header/>
        <AppRoutes/>
      <Footer/>
    </>
  );
};

export default App;