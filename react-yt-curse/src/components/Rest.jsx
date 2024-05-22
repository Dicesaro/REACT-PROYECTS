import { useFetch } from "../useFetch.js";
import { User } from "./User.jsx";
import style from "./Rest.module.css";
export const Rest = () => {
  const { data, loading, error, handleCancelRequest } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className={style.container}>
      <button onClick={handleCancelRequest}>Cancel</button>
      <h1>Using Fetch like a PRO</h1>
      <span>
        {error && <li>Error:{error}</li>}
        {loading && <li>Loading...</li>}
        {data.map((item) => (
          <User key={item.id} id={item.id} name={item.name} />
        ))}
      </span>
    </div>
  );
};
