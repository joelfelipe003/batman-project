import React from "react";
import logo from '../../assets/logo batman.jpeg';
import './styles.css'

function Fotter() {
    return (
        <div>
            <footer>

                <img id="logo" src={logo} />
                <span>todos os direitos©️</span>
                <span>desenvolvido por felipe</span>  
            </footer>
        </div>
    )
}

export default Fotter
