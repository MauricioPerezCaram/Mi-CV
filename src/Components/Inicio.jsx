import { useTranslation } from "react-i18next";

const Inicio = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="contenedor-inicio" id="inicio">
      <div className="logo-inicio">
        <img src="/fotocv.png" alt="foto MPC" />
      </div>
      <div className="texto-inicio">
        <h1>{t("inicio.h1")}</h1>
        <h3>{t("inicio.h3")}</h3>
        <h4>{t("inicio.h2")}</h4>
      </div>
    </section>
  );
};

export default Inicio;
