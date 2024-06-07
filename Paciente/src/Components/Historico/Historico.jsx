import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Historico() {
  const navigate = useNavigate();
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    setConsultas(agendamentos);
  }, []);

  const handleVoltar = (e) => {
    navigate("/PortalPaciente", { replace: true });
  };

  return (
    <>
      <div className="historico-consultas">
        <h2>Historicos</h2>
        <ul>
          {consultas.map((consulta, index) => (
            <li key={index}>
              {consulta.usuario} - {consulta.data} - {consulta.especialidade}
            </li>
          ))}
        </ul>
      </div>
      <button
        style={{
          border: "none",
          background: "none",
          padding: 0,
          cursor: "pointer",
        }}
        onClick={handleVoltar}
      >
        Voltar
      </button>
    </>
  );
}

export default Historico;
