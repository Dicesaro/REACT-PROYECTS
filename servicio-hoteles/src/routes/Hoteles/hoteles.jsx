import style from "./hoteles.module.css";

const Hotel = ({ name, info, img }) => {
  return (
    <>
      <div className={style.comp_hotel}>
        <img
          src={
            "https://programacion.net/files/article/20160819020822_image-not-found.png"
          }
          alt="img-default"
        />
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    </>
  );
};
export const Hoteles = () => {
  return (
    <>
      <section className={style.section_hotels}>
        <h1>Hoteles registrados!</h1>
        <div className={style.div_hotels}>
          <Hotel name="Hotel 1" info="Info del hotel 1" />
          <Hotel name="Hotel 2" info="Info del hotel 2" />
          <Hotel name="Hotel 3" info="Info del hotel 3" />
          <Hotel name="Hotel 4" info="Info del hotel 4" />
        </div>
      </section>
    </>
  );
};
