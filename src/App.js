import './App.scss';
import Cardpessoas from './Componentes/CardPessoas';
import Contador from './Componentes/Adicionar';
import Somar from './Componentes/Somar';


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
                      
    </section> 

  );
}

export default App;
