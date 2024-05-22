export const User = (props) => {
  const { id, name } = props;
  return (
    <>
      <li>{id + " ) " + name}</li>
    </>
  );
};
