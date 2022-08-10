import './App.css';
import Cardpessoas from './componentes/index.js';

function App(){
  let nome="Thominhaz";
  let idade= 21;
  
  return(
    <div className="app">
          <h1> Hello Wolrd</h1>
        <Cardpessoas nome = {nome} idade = {idade}/>
        <Cardpessoas nome = "Davigay" idade = {40}/>
        <Cardpessoas nome = "AdmViadin" />
        <Cardpessoas nome = "KaioGG" estilo = "claro" />



    </div>
  );
}

export default App;
