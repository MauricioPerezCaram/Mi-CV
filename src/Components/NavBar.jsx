import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#inicio">{t("navbar.inicio")}</a>
        </li>
        <li>
          <a href="#tecnologias">{t("navbar.tecnologias")}</a>
        </li>
        <li>
          <a href="#proyectos">{t("navbar.proyectos")}</a>
        </li>
        <li>
          <a href="#sobremi">{t("navbar.sobremi")}</a>
        </li>
        <li>
          <a href="#contacto">{t("navbar.contacto")}</a>
        </li>
        <div className="banderitas">
          <img src="es.png" onClick={() => i18n.changeLanguage("es")} />

          <img src="gb.png" onClick={() => i18n.changeLanguage("en")} />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
