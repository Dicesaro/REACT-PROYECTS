import { Input } from "./Input.jsx";

export const Form = ({ onSubmit, title, body }) => {
  const [first, setfirst] = useState(second);
  return (
    <>
      <form onSubmit={onSubmit}>
        <Input text="Titulo" type="text" name="title" value={title} />
        <Input text="Body" type="text" name="body" value={body} />
        <button>Enviar</button>
      </form>
    </>
  );
};
