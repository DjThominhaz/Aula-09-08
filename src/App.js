import './App.scss';
import Cardpessoas from './Componentes/CardPessoas';
import Contador from './Componentes/Adicionar';
import Somar from './Componentes/Somar';
import Comp4 from './Componentes/Comp4';
import Comp5 from './Componentes/Comp5';

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
        
    </section> 

  );
}

export default App;
