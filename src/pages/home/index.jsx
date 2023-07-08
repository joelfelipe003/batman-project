import React from "react";
import Header from "../../components/header/header";
import './styles.css'
import Trailer from "../../components/trailer/trailer";
import Cards from "../../components/cards/cards";
import Fotter from "../../components/footer/footer";



function Home() {

    return(
        <>
        <Header />
        <div id='banner'></div>
        <Trailer />
        <Cards />
        <Fotter />
        </>
    )
}
export default Home