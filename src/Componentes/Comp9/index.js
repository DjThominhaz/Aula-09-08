import { useState } from "react"





export default function(){

const[rend, SetRend] = useState(false)

function exibir(){
    SetRend(!rend)
}


return(
    <section>
            <h1> Biscoitinho da Sorte !!</h1>
                <button onClick={exibir}> Abri Biscoito</button>
                    {rend === true &&
                        <h2> A verdade nunca é plena, mata a alma e a envenena !</h2>
                    }



    </section>






)
    
}