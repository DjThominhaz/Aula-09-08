import { useState } from "react"
import './index.scss'


export default function Contador(){
    const [cont, setCont] = useState(0);

    function add(){
        setCont(cont +1 );
}
    
return(
        <section className="Comp-Contador">
                <h1> Contador</h1>

                <div>{cont}</div>

                    <button onClick={add}> Adcionar</button>
        </section>

    )
}