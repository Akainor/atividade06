import { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    // 🔥 carrega direto no useState (melhor forma)
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  // 🔹 salva sempre que mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  }, [list]);

  function addTask() {
    if (task.trim() === "") return;

    setList((prev) => [...prev, task]);
    setTask("");
  }

  function deleteTask(index) {
    setList((prev) => prev.filter((_, i) => i !== index));
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(list[index]);
  }

  function saveEdit(index) {
    setList((prev) => {
      const newList = [...prev];
      newList[index] = editText;
      return newList;
    });

    setEditIndex(null);
    setEditText("");
  }

  return (
    <div>
      <h2>To-Do List</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(index)}>Salvar</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => startEdit(index)}>Editar</button>
                <button onClick={() => deleteTask(index)}>Excluir</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}