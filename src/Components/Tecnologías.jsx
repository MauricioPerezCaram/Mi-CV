import { useTranslation } from "react-i18next";

const Tecnologias = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="tecnologias-completas">
      <h2 className="tecnologias-desarrollo">{t("tecnologias.h2")}</h2>
      <div className="logostecnologías">
        <img src="js.png" alt="html" />
        <img src="CSS3_logo.svg.png" alt="html" />
        <img src="JavaScript-logo.png" alt="html" />
        <img src="react-1-logo-png-transparent.png" alt="html" />
      </div>
      <div className="contenedor-tecnologias" id="tecnologias">
        <div>
          <h3>{t("tecnologias.dw")}</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Flexbox</li>
            <li>Grids</li>
            <li>Bootstrap</li>

            <li>SASS</li>
            <li>SEO</li>
          </ul>
        </div>
        <div>
          <h3>Javascript</h3>
          <ul>
            <li>Function</li>
            <li>Dom</li>
            <li>Events</li>
            <li>Storage y JSON</li>
            <li>Promises y Async</li>
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
            <li>Context</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <h2>{t("tecnologias.aprendiendo")}</h2>
      <div className="logostecnologías">
        <img src="1920px-Node.js_logo.svg.png" alt="nodejs" />

        <img src="express-js.png" alt="nodejs" />
        <img src="mongodb.jpg" alt="mongodb" />

        <img src="Typescript_logo_2020.svg.png" alt="ts" />
      </div>
      <div className="contenedor-tecnologias"></div>
    </div>
  );
};

export default Tecnologias;
