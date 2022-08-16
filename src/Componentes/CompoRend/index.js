import "./index.scss";
import { useState } from "react"




export default function(){
const [rend, SetRend] = useState(false);
const [perg, SetPerg] = useState(" ");
const [heroi, SetHeroi] = useState(" ")

    function exibir(){
        SetRend(!rend);
    }

    function Goku(event){
        if (event.target.checked); {
            SetPerg("Goku nao fala isso não ! ")
        }
    }

    function Naruto(event){
        if (event.target.checked); {
            SetPerg("Naruto diz querer ser Hokage bro! ")
        }
    }
    
        function Luffy(event){
          if  (event.target.checked); {
                SetPerg("Agora sim bro! Acertou ")
            }
        }

        console.log(heroi)

    return(

        <section className="Comp-Rend">
            <h1> Treino Renderização </h1>

                <button onClick={exibir}> Conhece Natiruts ?? </button>
                        {rend === true &&
                            <h2> Me namoraa, pois quando saio sei que voce choraaaa </h2>
                        }
                            <hr/>
                        
                        <h3/> Qual o Personagem que diz querer ser o Rei dos Piratas ?
                            <input type='radio' name='Anime' onChange={Goku} /> Goku 
                                <input type='radio' name='Anime' onChange={Luffy}/> Luffy
                                    <input type='radio' name='Anime' onChange={Naruto} /> Naruto

                            <div>
                                {perg}
                            </div> 

                            <div>
                                    <h1> Qual seu Heroi Favorito ??</h1>
                                        <div>
                                            <button onClick={() => SetHeroi('Spider-Man') }> Spider-Man </button> &nbsp;
                                            <button onClick={() => SetHeroi('Super-Man') }> Super-Man </button> &nbsp;
                                            <button onClick={() => SetHeroi('Iron-Man') }> Iron-Man </button> &nbsp;
                                       
                                        </div>

                                    {heroi === "Spider-Man" &&
                                            <p> Melhor Heroi</p>
                                            }

                                        {heroi === "Super-Man" &&
                                            <p> Heroi Clichê</p>
                                            }
                                    
                                        {heroi === "Iron-Man" &&
                                            <p> Sdds apenas</p>
                                        }   
                
                            </div>
        </section>
    )
    }
