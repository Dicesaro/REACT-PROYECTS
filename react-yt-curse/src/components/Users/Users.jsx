import styles from "./Users.module.css";

const users = [
  {
    id: 1,
    name: "Freddy",
    lastname: "Mercury",
    description:
      "Farrokh Bulsara, más conocido como Freddie Mercury (Stone Town, Zanzíbar, 5 de septiembre de 1946 - Kensington, Londres, 24 de noviembre de 1991) fue un cantante, compositor, vocalista y líder de la banda de rock Queen.",
    age: 25,
    img: "https://media.gq-magazine.co.uk/photos/5e667e1e6c6ea50008cf63ad/1:1/w_1612,h_1612,c_limit/GettyImages-639601010.jpg",
    background:
      "https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg",
  },
  {
    id: 2,
    name: "Jose",
    lastname: "Balbin",
    age: 22,
    description:
      "Este colombiano lidera las listas de la música internacionalmente, ha redefinido la música urbana para hacerla una expresión de la cultura latina universal. El sonido urbano de la actualidad está liderado por un nombre que redefinió la música latina, J Balvin.",
    img: "https://yt3.googleusercontent.com/kYaEK2AAn9NZaiYNeBWy7zbQzhJm86mHppxDB5k40aVY9SZhSgVTzuQ4p0oFqmBJUqn16MtJNg=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    name: "Taylor",
    lastname: "Garcia",
    description:
      "Taylor Alison Swift (West Reading, Pensilvania, 13 de diciembre de 1989), más conocida como Taylor Swift, es una cantante, compositora y actriz estadounidense y una de las artistas con mayores ventas discográficas del mundo, más de 114 millones de álbumes.",
    age: 18,
    img: "https://64.media.tumblr.com/bdbab1c81d573e30e251609e696e8e3e/63e12076811ea1ee-20/s1280x1920/e6c5840c2bd2ed0d995d57e31f9b8022c4d4754a.jpg",
  },
];

export const Users = () => {
  return (
    <>
      <div className={styles.card}>
        {users.map((user) => (
          <div className={styles.card_user} key={user.id}>
            <img src={user.img} alt="" />
            <h2>{user.name + " " + user.lastname}</h2>
            <p>{user.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};
