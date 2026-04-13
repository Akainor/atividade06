import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculator";
import CepSearch from "./components/CepSearch";

function App() {
  const [page, setPage] = useState("todo");

  function renderPage() {
    switch (page) {
      case "todo":
        return <TodoList />;
      case "counter":
        return <Counter />;
      case "game":
        return <TicTacToe />;
      case "calc":
        return <Calculator />;
      case "cep":
        return <CepSearch />;
      default:
        return <TodoList />;
    }
  }

  return (
    <div className="app-wrapper">
      <Header setPage={setPage} />

      <main className="app-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;