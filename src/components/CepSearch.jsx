import { useState } from "react";

export default function CepSearch() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);

  async function buscar() {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await res.json();
    setData(json);
  }

  return (
    <div>
      <h2>Buscar CEP</h2>

      <input onChange={(e) => setCep(e.target.value)} />
      <button onClick={buscar}>Buscar</button>

      {data && (
        <div>
          <p>Rua: {data.logradouro}</p>
          <p>Cidade: {data.localidade}</p>
          <p>Estado: {data.uf}</p>
        </div>
      )}
    </div>
  );
}