import { useState } from "react";
import "../App.css";

export default function CepSearch() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  async function buscar() {
    if (cep.length !== 8) {
      setError("CEP deve ter 8 dígitos");
      setData(null);
      return;
    }

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const json = await res.json();

      if (json.erro) {
        setError("CEP não encontrado");
        setData(null);
      } else {
        setData(json);
        setError("");
      }
    } catch {
      setError("Erro ao buscar CEP");
      setData(null);
    }
  }

  return (
    <div className="cep-container">
      <h2>Buscar CEP</h2>

      <div className="cep-input-area">
        <input
          className="cep-input"
          placeholder="Digite o CEP (somente números)"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className="cep-btn" onClick={buscar}>
          Buscar
        </button>
      </div>

      {error && <p className="cep-error">{error}</p>}

      {data && (
        <div className="cep-result">
          <p><strong>Rua:</strong> {data.logradouro}</p>
          <p><strong>Bairro:</strong> {data.bairro}</p>
          <p><strong>Cidade:</strong> {data.localidade}</p>
          <p><strong>Estado:</strong> {data.uf}</p>
        </div>
      )}
    </div>
  );
}