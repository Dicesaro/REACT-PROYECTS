import style from "./input.module.css";

export const InputData = ({ text, type, onChange, name, value, error }) => {
  return (
    <div className={style.input_data}>
      <label>{text}</label>
      <input
        id={name}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={error ? style.error : value ? style.valid : ""}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};
