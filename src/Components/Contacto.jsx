const Contacto = () => {
  const visitarLinkedin = () => {
    window.open("https://www.linkedin.com/in/mauricioperezcaram/", "_blank");
  };

  const visitarGitHub = () => {
    window.open("https://github.com/MauricioPerezCaram", "_blank");
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Podes contactarme en</h2>
      <div className="redes">
        <button onClick={visitarLinkedin}>Visita mi LinkedIn</button>
        <div className="mail">
          <img src="mail.png" alt="" />
          <p>perezcarammauricio@gmail.com</p>
        </div>
        <button onClick={visitarGitHub}>Visita mi GitHub</button>
      </div>
    </section>
  );
};

export default Contacto;
