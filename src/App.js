import './App.scss';
import Cardpessoas from './Componentes/CardPessoas';
import Contador from './Componentes/Adicionar';
import Somar from './Componentes/Somar';
import Comp4 from './Componentes/Comp4';
import Comp5 from './Componentes/Comp5';
import Comp6 from './Componentes/Comp6';
import Comp7 from './Componentes/Comp7';
import Comp8 from './Componentes/Comp8';
import SituaçãoAluno from './Componentes/SituaçãoAluno';
import CompoRend from './Componentes/CompoRend';
import Comp9 from './Componentes/Comp9';
import Comp10 from './Componentes/Comp10';


function App(){
  let nome="Thominhaz";
  let idade= 21;
  
  return(
    <section className="app">
          <h1> Hello Wolrd</h1>
        <Cardpessoas nome = {nome} idade = {idade}/>
        <br></br>
        <Cardpessoas nome = "Davigay" idade = {40}/>
        <br></br>
        <Cardpessoas nome = "AdmViadin" />
        <br></br>
        <Cardpessoas nome = "KaioGG" estilo = "claro" />
        <br></br>
          <Contador> </Contador>
          <br></br>
          <Somar> </Somar>
          <br></br>
          <Comp4></Comp4>
          <br></br>
          <br></br>
          <Comp5></Comp5>
          <br></br>
          <Comp6></Comp6>
          <Comp7></Comp7>
          <Comp8></Comp8>
          <SituaçãoAluno></SituaçãoAluno>
          <CompoRend></CompoRend>
          <Comp9></Comp9>
          <Comp10></Comp10>


        
    </section> 

  );
}

export default App;
