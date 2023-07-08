import React from "react";
import './styles.css'
import Fotter from "../footer/footer";
import Header from "../header/header";

function Fotos() {
    return (
     <>
     <Header />
            <div id="title">galeria de fotos</div>
            <div className="content">
    

    <div className="elenco-content">


            <a href="https://www.imdb.com/name/nm1500155/" target="_blank">
            
            <div className="cards banner-1">
                robert pattison-batman
            </div>
        </a>
    <a href="https://www.imdb.com/name/nm2368789/?ref_=nv_sr_srsg_0" target="_blank">

        <div className="cards banner-2">
            zoe gravitz - mulher gato
            </div>
        </a>
            <a href="https://www.imdb.com/name/nm0942482/?ref_=nv_sr_srsg_7" target="_blank"> 

            <div className="cards banner-3">
                jeffrey wright - gordon
            </div>
        </a>

    <a href="https://www.imdb.com/name/nm0268199/?ref_=fn_al_nm_1" target="_blank">
        
            <div className="cards banner-4">
                Colin farrel - pinguin
            
            </div>
        </a>

        <a href="https://www.imdb.com/name/nm0785227/?ref_=fn_al_nm_1" target="_blank">

            <div className="cards banner-5">
            Andy serkis - alfred
            </div>
        </a>
    <a href="https://www.imdb.com/name/nm0200452/?ref_=nv_sr_srsg_0" target="_blank">
        
            <div className="cards banner-6">
            Paulo Dano - charada

    </div>
    </a>


    </div>

    </div>

    <Fotter />
        </>

        )
    }

    export default Fotos