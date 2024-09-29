import React, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/ImgSlider";


const Main = () => {
    return(
        <>
        <Header/>
        <Slider title="CPU" content="전북대학교 중앙 컴퓨터동아리  CPU"/>
        <Footer/>

        </>
    );
};





export default Main;