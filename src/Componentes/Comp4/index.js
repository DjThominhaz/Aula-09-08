import { useState } from "react";

export default function Componente4(){
    const [resp, setResp] = useState(" ");


return(
    <div>
        <h1> {resp} </h1>
            <input value={resp} onChange = {e => setResp(e.target.value)} />


    </div>
    )
}