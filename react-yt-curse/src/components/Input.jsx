export const Input = ({ text, type, onChange, name, value }) => {
  return (
    <>
      <label>{text}</label>
      <br />

      <input
        id={crypto.randomUUID()}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
      />
      <br />
    </>
  );
};
