import React, { useState } from "react";

const AddPosts = async (title, body) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  let response = await client.post("", {
    title: title,
    body: body,
  });
  setPosts((posts) => [response.data, ...posts]);
  setTitle("");
  setBody("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
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
  );
};

export default AddPosts;
