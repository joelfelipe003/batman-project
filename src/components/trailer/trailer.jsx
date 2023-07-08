import React from "react";
import './styles.css'
import Video from '../../assets/video.mp4'

function Trailer() {
    return(
        <div id='trailer-container'>
            <div className="contents">
                <video controls className="trailer">
                    <source src={Video}/>
        seu navegador nao possui suporte para video
                </video>
                <div id='sinopse'>
                    <p className="description">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis,o vigilante solitário se estabelece como a personificação da vingança para a população.

                    </p>
                    <button className="button">comprar ingresso</button>
                </div>
            </div>

        </div>
    )

}

export default Trailer