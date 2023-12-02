import { useTranslation } from "react-i18next";

const SobreMi = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="sobremi" className="sobremi">
      <h2 className="tecnologias-desarrollo">{t("sobremi.titulo")}</h2>
      <p>{t("sobremi.p1")}</p>
      <p>{t("sobremi.p2")}</p>
      <p>{t("sobremi.p3")}</p>
    </section>
  );
};

export default SobreMi;
