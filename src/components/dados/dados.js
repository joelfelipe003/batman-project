import React, { useContext } from "react";
import { UserContext } from "../../contexts/dadosContext";

function Dados() {
    const {dados} = useContext(UserContext)

        return (
            <div>
                {dados ? 'esses sao seus dados' : 'vc precisa inserir seus dados'}
            </div>
        )
}
export default Dados