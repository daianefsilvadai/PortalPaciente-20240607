import React from "react";
import Logo from "../../assets/logo_hospital.png";
import IconeAgendamento from "../../assets/icone_agendamento.png";
import IconeHistorico from "../../assets/icone_historico.png";
import IconeAtualizarDados from "../../assets/icone_atualizar_dados.png";
import { useNavigate } from "react-router-dom";

function PortalPaciente() {
  const navigate = useNavigate();

  const handleAgendamento = (e) => {
    navigate("/Agendamento", { replace: true });
  };

  const handleHistorico = (e) => {
    navigate("/Historico", { replace: true });
  };

  const handleAtualizacao = (e) => {
    navigate("/Atualizacao", { replace: true });
  };

  return (
    <>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <h2>Portal do Paciente</h2>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
          }}
          onClick={handleAgendamento}
        >
          <img
            src={IconeAgendamento}
            style={{ width: "100px", height: "auto" }}
          />
        </button>
        <button
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
          }}
          onClick={handleHistorico}
        >
          <img
            src={IconeHistorico}
            style={{ width: "100px", height: "auto" }}
          />
        </button>
        <button
          style={{
            border: "none",
            background: "none",
            padding: 0,
            cursor: "pointer",
          }}
          onClick={handleAtualizacao}
        >
          <img
            src={IconeAtualizarDados}
            style={{ width: "100px", height: "auto" }}
          />
        </button>
      </div>
    </>
  );
}

export default PortalPaciente;
