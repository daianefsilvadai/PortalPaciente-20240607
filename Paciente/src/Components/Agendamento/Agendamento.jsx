import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Agendamento() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [dados, setDados] = useState({
    data: "",
    hora: "",
    especialidade: "",
    medico: "",
    estado: "",
    cidade: "",
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(storedUsers);
  }, []);

  const estados = ["SP", "RJ", "MG", "RS", "SC"];
  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Osasco"],
    RJ: ["Rio de Janeiro", "Duque de Caxias", "Petrópolis"],
    MG: ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
    RS: ["Porto Alegre", "Caxias do Sul", "Gramado"],
    SC: ["Blumenau", "Joinville", "Lages"],
  };

  const especialidades = ["Cardiologista", "Ginecologista", "Dermatologista"];
  const medicos = ["Dr. João", "Dr. Maria", "Dr. Pedro"];

  const handleSubmit = (event) => {
    event.preventDefault();
    let agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];

    const agendamento = {
      usuario: nomeUsuario,
      ...dados,
    };

    agendamentos.push(agendamento);
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    // Resetar os campos após submissão
    setNomeUsuario("");
    setDados({
      data: "",
      hora: "",
      especialidade: "",
      medico: "",
      estado: "",
      cidade: "",
    });
    alert("Agendamento feito com sucesso");
    navigate("/PortalPaciente", { replace: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const handleChangeUsuario = (event) => {
    const { value } = event.target;

    setNomeUsuario(value);
  };

  return (
    <div className="agendamento-consulta">
      <h2>Agendar Consulta</h2>

      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label>Usuarios:</label>
          <select
            name="nomeUsuario"
            value={nomeUsuario}
            onChange={handleChangeUsuario}
          >
            <option value="">Selecione</option>
            {usuarios.map((usuario) => (
              <option key={usuario.nome} value={usuario.nome}>
                {usuario.nome}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nome do Usuário:</label>
          <input type="text" value={nomeUsuario} disabled />
        </div>

        <div>
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={dados.data}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Hora:</label>
          <input
            type="time"
            name="hora"
            value={dados.hora}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Especialidade:</label>
          <select
            name="especialidade"
            value={dados.especialidade}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            {especialidades.map((especialidade) => (
              <option key={especialidade} value={especialidade}>
                {especialidade}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Médico:</label>
          <select name="medico" value={dados.medico} onChange={handleChange}>
            <option value="">Selecione</option>
            {medicos.map((medico) => (
              <option key={medico} value={medico}>
                {medico}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Estado:</label>
          <select name="estado" value={dados.estado} onChange={handleChange}>
            <option value="">Selecione</option>
            {estados.map((estado) => (
              <option key={estado} value={estado}>
                {estado}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Cidade:</label>
          <select
            name="cidade"
            value={dados.cidade}
            onChange={handleChange}
            disabled={!dados.estado}
          >
            <option value="">Selecione</option>
            {cidadesPorEstado[dados.estado]?.map((cidade) => (
              <option key={cidade} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Agendar</button>

        <button>
          <Link to="/AtualizarDados">Editar</Link>
        </button>
      </form>
    </div>
  );
}

export default Agendamento;
