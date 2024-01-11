const getTodos = (req, res) => {
  res.send("I am the get todos route");
};

const createTodo = (req, res) => {
    res.send("I am CreateTodos")
}
export { getTodos,createTodo};
