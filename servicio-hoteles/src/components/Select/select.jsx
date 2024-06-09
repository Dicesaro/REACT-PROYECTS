import style from "./select.module.css";

export const InputSelect = ({ id, name, value, onChange, options, label }) => {
  return (
    <div className={style.input_data}>
      <label>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="1">Elije un departamento</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
