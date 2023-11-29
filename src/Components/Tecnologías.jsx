const Tecnologias = () => {
  return (
    <div className="tecnologias-completas">
      <h2 className="tecnologias-desarrollo">
        Tecnologías con las que desarrollo
      </h2>
      <div className="logostecnologías">
        <img src="js.png" alt="html" />
        <img src="CSS3_logo.svg.png" alt="html" />
        <img src="JavaScript-logo.png" alt="html" />
        <img src="react-1-logo-png-transparent.png" alt="html" />
      </div>
      <div className="contenedor-tecnologias" id="tecnologias">
        <div>
          <h3>Desarrollo Web</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Flexbox</li>
            <li>Bootstrap</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>SCSS</li>
            <li>SEO</li>
          </ul>
        </div>
        <div>
          <h3>Javascript</h3>
          <ul>
            <li>Funciones</li>

            <li>Dom</li>
            <li>Evetos</li>
            <li>Storage y JSON</li>
            <li>Librerías</li>
            <li>Asincronía y Promesas</li>
            <li>Ajax & Fetch</li>
            <li>Frameworks</li>
          </ul>
        </div>
        <div>
          <h3>ReactJS</h3>
          <ul>
            <li>JSX</li>
            <li>Promises, Asincronía y Map</li>
            <li>API</li>
            <li>Hooks, Children y Patrones</li>
            <li>Routing y navegación</li>
            <li>Eventos</li>
            <li>Context</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <h2>Tecnologías aprendiendo</h2>
      <div className="logostecnologías">
        <img src="mongodb.png" alt="mongodb" />
        <img src="Typescript_logo_2020.svg.png" alt="mongodb" />

        <img src="1920px-Node.js_logo.svg.png" alt="nodejs" />
        <img
          src="AwcMggxFR7LsNEXNz85rvYxmGZ8cZWGbIgXnl-vQ8LE.webp"
          alt="html"
        />
      </div>
      <div className="contenedor-tecnologias">
        <ul>
          <li>BACKEND</li>
        </ul>
        <ul>
          <li>TYPESCRIPT</li>
        </ul>
      </div>
    </div>
  );
};

export default Tecnologias;
