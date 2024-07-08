import { useEffect, useState } from "react";
import { Form } from "./components/Form";

export const Axios = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    // PETICION GET
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addPost = async (title, body) => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPost((posts) => [data, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setPost(
          post.filter((post) => {
            return post.id !== id;
          })
        );
      } else {
        return;
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(title, body);
  };

  return (
    <>
      <h1>API REST Vanilla</h1>
      <div className="add-post-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name=""
            className="form-control"
            id=""
            cols="10"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>

      <section>
        {post.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <div>{post.body}</div>
              <button type="delete" onClick={() => deletePost(post.id)}>
                DELETE
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
