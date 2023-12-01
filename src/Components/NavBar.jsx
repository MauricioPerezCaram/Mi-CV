import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <nav className="navbar">
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <ul>
        <li>
          <a href="#inicio">{t("navbar.inicio")}</a>
        </li>
        <li>
          <a href="#tecnologias">Tecnologías</a>
        </li>
        <li>
          <a href="#proyectos">Proyectos</a>
        </li>
        <li>
          <a href="#sobremi">Sobre mi</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
