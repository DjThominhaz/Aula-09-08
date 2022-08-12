import { useState } from "react"

export default function(){
    const [att, setAtt] = useState(" ")
    const [res, setRes] = useState(" ")

    function Atualizacao (){
            setRes(att)
    }



return(
        <section>
            <h1>{res}</h1>
                <input type='text' value={att} onChange = {e => setAtt(e.target.value)} />
                    <button onClick={Atualizacao}> Atualizar </button>

        </section>



    )
}