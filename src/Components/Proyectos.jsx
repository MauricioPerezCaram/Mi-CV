const Proyectos = () => {

  const abrirpaginaestudio = () => {
    window.open('https://primer-subida-githhub-pre-entrega.vercel.app/', '_blank');
  };

  const abrirapplestore= () => {
    window.open('https://entrega-final-react-perez-caram.vercel.app/');
  }

  return (
    <section id="proyectos">
      <h2 className="h2proyectos">Proyectos en los que he trabajado</h2>
      <div className="container-proyectos">
        <div className="proyecto" onClick={abrirpaginaestudio}>
          <img src="Estudio Jco. PC & Asoc.png" alt="Estudio Jco. PC & Asoc" />
          <h3>Landing Page</h3>
          <h4>Pérez Caram & Asociados</h4>
          <h5>Tecnologías empleadas:</h5>
          <ul>
            <li>HTML</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="proyecto" onClick={abrirapplestore}>
          <img src="Apple Store Mendoza.png" alt="Apple Store Mendoza" />
          <h3>E-commerce</h3>
          <h4>Apple Store Mendoza</h4>
          <h5>Tecnologías empleadas:</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>REACT</li>
            <li>FIREBASE</li>
          </ul>
        </div>
       
      </div>
    </section>
  );
};

export default Proyectos;
