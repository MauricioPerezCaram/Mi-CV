import "./App.css";
import Contacto from "./Components/Contacto";
import Inicio from "./Components/Inicio";
import NavBar from "./Components/NavBar";
import Proyectos from "./Components/Proyectos";
import Tecnologias from "./Components/Tecnologías";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Tecnologias />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;
