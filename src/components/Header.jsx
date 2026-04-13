export default function Header({ setPage }) {
  return (
    <header className="header">
      <h1>Projeto React</h1>

      <nav className="header-nav">
        <button onClick={() => setPage("todo")}>To-Do</button>
        <button onClick={() => setPage("counter")}>Contador</button>
        <button onClick={() => setPage("game")}>Jogo da Velha</button>
        <button onClick={() => setPage("calc")}>Calculadora</button>
        <button onClick={() => setPage("cep")}>CEP</button>
      </nav>
    </header>
  );
}