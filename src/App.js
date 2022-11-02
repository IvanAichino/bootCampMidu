import './App.css';
import Saludo from './Components/Saludo';
import MiNombre from './Components/MiNombre';

function App() {
  const usuario = "Iván Lucas Aichino"
  
  return (
    <div className="App">
       <Saludo data={"Terricola"} />
       <MiNombre user={usuario} />
    </div>
  );
}

export default App;
