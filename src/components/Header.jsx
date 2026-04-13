export default function Header({ setPage }) {
  return (
    <div>
      <h1>Projeto React</h1>

      <button onClick={() => setPage("todo")}>To-Do List</button>
      <button onClick={() => setPage("counter")}>Contador</button>
      <button onClick={() => setPage("game")}>Jogo da Velha</button>
      <button onClick={() => setPage("calc")}>Calculadora</button>
      <button onClick={() => setPage("cep")}>Buscar CEP</button>
    </div>
  );
}