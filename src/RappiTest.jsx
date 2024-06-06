import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "./modal/Modal";

export const RappiTest = () => {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const getAPI = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/";
      const response = await fetch(url);
      const result = await response.json();
      setTodos(result);
    };
    getAPI();
  }, []);

  const handleClick = async (e) => {
    setModal(true);
    const url = `https://jsonplaceholder.typicode.com/users/${e}`;
    const response = await fetch(url);
    const result = await response.json();
    setUser(result);
  };

  const handleFilter = () => {
    const newTodo = todos.sort((x, y) => {
      // true values first
      return x.completed === y.completed ? 0 : x ? -1 : 1;
      // false values first
      // return (x === y)? 0 : x? 1 : -1;
    });
    setTodos([...newTodo]);
  };

  useEffect(() => {}, [todos]);

  return (
    <div>
      <button onClick={() => handleFilter()} className="btn btn-info">
        Filtrar completados
      </button>
      {modal && <Modal user={user} setModal={setModal} />}
      <h1>RappiTest</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ToDo</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <th scope="row">{todo.id}</th>
              <td> {todo.title}</td>
              <td>
                <button
                  onClick={() => handleClick(todo.userId)}
                  className="btn btn-primary"
                >
                  mas detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
