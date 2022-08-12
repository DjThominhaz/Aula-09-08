import { useState } from "react"

export default function(){
    const [chek, setChek] = useState(" ");


    return(
        <section>
            <div>
                <h1> Selecionado </h1>
                    <p>{chek ? 'Sim': 'não'}</p>
                    <input type='checkbox' value={chek} onChange = {e => setChek(e.target.checked)}/>
            </div>
            
        </section>





    )
 }