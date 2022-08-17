import { useState } from "react"

export default function(){
    const [perg, SetPerg] = useState(" ");




return(
    <section>
        <h1> Amigo Poser ?? </h1>
        
            <p> Qual o nome do personagem de "Friends" que adora Dinossauros ?</p>

        <div>
            <input type='text' value={perg} onChange = {e => SetPerg(e.target.value)} />
                {perg === "Joey" &&
                     <div>  
                         <h1> Acertoooou </h1> 
                            <img src="https://thumbs.dreamstime.com/b/o-bonitinho-personagem-de-desenho-animado-dinossauro-est%C3%A1-bravo-com-suas-presas-ilustra%C3%A7%C3%A3o-do-um-fofo-brava-212752871.jpg" />
                     
                     </div>}


        </div>
    </section>
)

}