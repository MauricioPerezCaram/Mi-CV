import "./App.css";
import Contacto from "./Components/Contacto";
import Inicio from "./Components/Inicio";
import NavBar from "./Components/NavBar";
import Proyectos from "./Components/Proyectos";
import SobreMi from "./Components/SobreMi";
import Tecnologias from "./Components/Tecnologías";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Inicio />
      <Tecnologias />
      <Proyectos />
      <SobreMi />
      <Contacto />
    </div>
  );
}

export default App;
