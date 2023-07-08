import React from "react";
import './styles.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo batman.jpeg';



function Header() {
    return (
        <header>
            <img id="logo" src={logo} />
            <nav>
                <ul>
                   <Link style={{textDecoration: 'none'}} to={'/'} >
                    <li>home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contato'} >
                    <li>contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                    <li>fotos</li>
                    </Link>
                    
                    <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                    <li>comentarios</li>
                    </Link>
                </ul> 
            </nav>
        </header>
    )
}

export default Header;