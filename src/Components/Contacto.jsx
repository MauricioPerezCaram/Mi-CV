const Contacto = () => {
  const visitarLinkedin = () => {
    window.open("https://www.linkedin.com/in/mauricioperezcaram/", "_blank");
  };

  const visitarGitHub = () => {
    window.open("https://github.com/MauricioPerezCaram", "_blank");
  };

  return (
    <section id="contacto">
      <h2>Podes contactarme en:</h2>
      <div className="redes">
        <button onClick={visitarLinkedin}>Visita mi LinkedIn</button>
        <button onClick={visitarGitHub}>Visita mi GitHub</button>
        <button>Enviame un mail</button>
      </div>
    </section>
  );
};

export default Contacto;
