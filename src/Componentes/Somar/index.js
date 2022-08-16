import './index.scss';
import { useState } from 'react';

export default function Calculadora (){
    const [n1, setN1] = useState()
    const [n2, setN2]= useState()
    const [res, setRes]= useState()

function somar (){
    let x = n1+n2
        setRes(x)
}


return(
    <section>
        <h1> Somar </h1>
            <div>
                Numero 1: <input type={Number} value={n1} onChange = {e => setN1(Number(e.target.value)) } />
            </div>
                <br></br>
                <div>
                    Numero 2: <input type={Number} value={n2} onChange = {e => setN2(Number(e.target.value)) } />
                </div>
                    <div> {res} </div>
                        <button onClick={somar}> Somar </button>

    </section>
    )
}