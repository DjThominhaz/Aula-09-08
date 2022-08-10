import "./index.scss";
export default function Cardessoas(props){
    function minhaIdade() {
        if (props.idade !== undefined)
            alert ('minha idade é ' + props.idade);
        
        else 
            alert('Nao tenho idade');
    }

    function lerEstilo(){
        if(props.estilo !== undefined)
            return props.estilo;
            
            else return "tropical"
    }

    return(
    <section className="comp-componentes" >
    <div className={lerEstilo()}>
        Olá, Prazer, eu sou o {props.nome}

        <button onClick={minhaIdade}>
            Qual minha Idade ? </button>
    </div>
    </section>
 )
}