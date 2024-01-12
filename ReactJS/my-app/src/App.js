import React,{useState,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import ManageState from "./components/ManageState";
import { MyContextProvider, useMyContext } from "./components/MyContext";
import ReducerHook from "./components/ReducerHook";
import useCustomHook from "./utils/useCustomHook";

const MyComponent = () => {
  const contextValue = useMyContext();

  return (
    <div>
      <p>{contextValue}</p>
    </div>
  );
};

const App = () => {

  const { values, handleChange, resetForm } = useCustomHook({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with values:', values);
    resetForm(); 
  };

  // Api's data
  const [posts, setPosts] = useState([]);
    
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/manage-state" element={<ManageState />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <hr />
      <MyContextProvider>
        <MyComponent />
      </MyContextProvider>

      <hr />
      <h3>UseReducer Practice</h3>
      <ReducerHook />

      <hr />
      
      <center>
        <h3>This custom hooks that print the value in one Object for multipleTime</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </label><br /><br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </label><br /><br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </label><br /><br />
        <button type="submit">Submit</button><br /><br />
        </form>
      </center>
      
      <hr />
      <h3>Fetching third party Api's data</h3>
      <div className="posts-container">
        {posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <div className="delete-btn">Delete</div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default App;
