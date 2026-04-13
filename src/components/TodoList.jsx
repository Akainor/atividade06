import { useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task !== "") {
      setList([...list, task]);
      setTask("");
    }
  }

  function removeTask(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}