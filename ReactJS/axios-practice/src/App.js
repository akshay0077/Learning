import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    const fetchPost = async () => {
      let response = await client.get("?_limit=10");
      setPosts(response.data);
    };
    fetchPost();
  }, []);

  const deletePost = async (id) => {
    await client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  const addPosts = async (title, body) => {
    let response = await client.post("", {
      title: title,
      body: body,
    });
    setPosts((posts) => [response.data, ...posts]);
    setTitle("");
    setBody("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <div className="delete-btn" onClick={() => deletePost(post.id)}>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="app">
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
      </div>
    </>
  );
};

export default App;
