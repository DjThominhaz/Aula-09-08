import { useState } from "react";

export default function(){
    const [resp, setResp] = useState(" ");


return(
    <section> 
        <h1>{resp} </h1>
            <select value={resp} onChange = {e => setResp(e.target.value)}>
                <option >Csharp</option>
                <option >JS</option>
            </select>
            


    </section>
)
}