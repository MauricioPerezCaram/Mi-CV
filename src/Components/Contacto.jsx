import { useTranslation } from "react-i18next";

const Contacto = () => {
  const [t, i18n] = useTranslation("global");

  const visitarLinkedin = () => {
    window.open("https://www.linkedin.com/in/mauricioperezcaram/", "_blank");
  };

  const visitarGitHub = () => {
    window.open("https://github.com/MauricioPerezCaram", "_blank");
  };

  return (
    <section id="contacto" className="contacto">
      <h2>{t("contactame.contactame")}</h2>
      <div className="redes">
        <button onClick={visitarLinkedin}>{t("contactame.linkedin")}</button>
        <div className="mail">
          <img src="mail.png" alt="" />
          <p>perezcarammauricio@gmail.com</p>
        </div>
        <button onClick={visitarGitHub}>{t("contactame.github")}</button>
      </div>
    </section>
  );
};

export default Contacto;
