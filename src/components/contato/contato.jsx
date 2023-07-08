import React from "react";
import './styles.css'
import Header from "../header/header";
import Fotter from "../footer/footer";

function Contato() {
    return(
        <>
     
        <Header />
        <div className="main">
            <div className="card-content">

                <div className="title"><h1>entre em contato</h1></div>

                <div className="textfields">

                <div className="textfield">
                    <label for=""></label>
                    <input type="text" name="name" id="name" placeholder="insira seu nome" />
                </div>

                <div className="textfield">
                    <label for=""></label>
                    <input type="email" name="email" id="email" placeholder="insira um email valido" />
                </div>

                <div className="textfield">
                    <label for=""></label>
                    <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder="
                    digite sua mensagem">
                    </textarea>
                </div>

                </div>

                <div className="buttun">
                <button className="botao">enviar</button>
                </div>
                    
            </div>

        </div>
        <Fotter />
        </>
    )
}
export default Contato