import React, { useState } from "react";
import axios from "axios";

const DeletePosts = async (id) => {

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });
  await client.delete(`${id}`);
  setPosts(
    posts.filter((post) => {
      return post.id !== id;
    })
  );

  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="button">
              <div className="delete-btn" onClick={() => deletePosts(post.id)}>
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DeletePosts;
