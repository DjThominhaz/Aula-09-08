import { useEffect, useState } from "react"

export default function(){
    const [media, setMedia]= useState(0)
    const [situ, SetSitu]= useState("---")

    function verificarsituacao(){
        if (media < 0 || media > 10 ){
            SetSitu("Nota Invalida")
        }
        else if (media >= 5){
            SetSitu("Aluno Passou")
        }
        
        else if (media >= 3 && media < 5){
            SetSitu("Aluno ta de Rec")
        }
        else {
            SetSitu("Aluno Reprovou")
        }
    }

    useEffect(() => {
        verificarsituacao();
    }, [media] )


    return(
        <section>
            <h1> Verificador de Situação do Aluno</h1>

            <div>
                <div>
                    Média: <input type="number" value={media} onChange={e => setMedia(Number(e.target.value))} />
                </div>
                    <div>
                        {situ}
                     </div>
                <div>
                </div>
            </div>
        </section>
    )
}