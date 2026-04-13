import { useState, useEffect } from "react";
import "../App.css";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  function addTask() {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  }

  function deleteTask(index) {
    setList(list.filter((_, i) => i !== index));
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(list[index]);
  }

  function saveEdit(index) {
    const newList = [...list];
    newList[index] = editText;
    setList(newList);
    setEditIndex(null);
    setEditText("");
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">To-Do List</h2>

      <div className="todo-input-area">
        <input
          className="todo-input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button className="todo-add" onClick={addTask}>
          Adicionar
        </button>
      </div>

      <ul className="todo-list">
        {list.map((item, index) => (
          <li key={index} className="todo-item">
            {editIndex === index ? (
              <>
                <input
                  className="todo-edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  className="todo-save"
                  onClick={() => saveEdit(index)}
                >
                  Salvar
                </button>
              </>
            ) : (
              <>
                <span className="todo-text">{item}</span>

                <div className="todo-actions">
                  <button
                    className="todo-edit"
                    onClick={() => startEdit(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="todo-delete"
                    onClick={() => deleteTask(index)}
                  >
                    Excluir
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}