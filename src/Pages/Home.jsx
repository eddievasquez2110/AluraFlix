import GlobalStyle from "../GlobalStyle.js";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import React, { Fragment } from "react";



const Home = () => {
  return (
    <Fragment>
      <GlobalStyle/>
      <Header />
      <Footer 
        logo="/images/logo.png"
        descripcion="Realizado por Edd"
      />
    </Fragment>
  );
}

export default Home;