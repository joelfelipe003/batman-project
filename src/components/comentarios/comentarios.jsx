import React from "react";
import Header from "../header/header";
import './styles.css';
import Fotter from "../footer/footer";

function Comentarios() {
    return (
        <>
        <Header />
        <div class="container">
        <div class="comentarios">
            <div class="avaliacao-1">
                <div class="imagem-de-perfil">
                    <img src="" alt="" width="100px"/>
            </div>
                <div class="usuario">
                    <h4>isabela rezende</h4>
                </div>
                <div class="nota">
                    ★★★★★
                </div>

                <div class="texto">
                    <span>Incrível! Esse filme superou todas as minhas expectativas. A interpretação do protagonista foi incrível e a trama envolvendo a luta contra a sociedade secreta The Court of Owls foi emocionante e surpreendente. Definitivamente um dos melhores filmes de super-heróis que já vi."</span>
                </div>
                </div>

                <div class="avaliacao-2">
                    <div class="imagem-de-perfil">
                        <img src="./foto de perfil-2.jpeg" alt="" width="100px"/>
                </div>
                    <div class="usuario">
                        <h4>Heitor carvalho</h4>
                    </div>
                    <div class="nota">
                        ★★★★★
                    </div>
    
                    <div class="texto">
                        <span>O filme do Batman de 2022 foi uma experiência incrível! A trama envolvendo a luta contra a sociedade secreta The Court of Owls foi muito bem construída e me deixou ansioso para saber o que ia acontecer a seguir. As cenas de ação foram muito bem coreografadas e a fotografia do filme estava espetacular. Com certeza vale a pena assistir no cinema!</span>
                    </div>
                    </div>


                    <div class="avaliacao-3">
                        <div class="imagem-de-perfil">
                            <img src="./selfie-4.avif" alt="" width="100px"/>
                    </div>
                        <div class="usuario">
                            <h4>miguel Ramos</h4>
                        </div>
                        <div class="nota">
                            ★★★★★
                        </div>
        
                        <div class="texto">
                            <span>CARA QUE FILME ESPLENDIDO, SEI NEM ESCREVER MAIS, TENHO NEM PALAVRAS A DESCREVER O QUANTO EU AMEI ESSE FILME! ELE TA MTO PERFEITO E MUITO BEM ELABORADO! me fez ficar muito surpreso com algumas coisas, mas são mínimas comparadas ao filme todo..</span>
                        </div>
                        </div>
                
                

            </div>

        </div>

        <Fotter />
        </>
    )
}

export default Comentarios