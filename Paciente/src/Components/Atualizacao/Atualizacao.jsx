import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Atualizacao() {
  const navigate = useNavigate();
  const [dados, setDados] = useState({ nome: "", email: "", telefone: "" });
  const [usuarios, setUsuarios] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(storedUsers);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUsers = [...usuarios];
    if (editIndex !== null) {
      updatedUsers[editIndex] = dados;
    } else {
      updatedUsers.push(dados);
    }
    setUsuarios(updatedUsers);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
    setDados({ nome: "", email: "", telefone: "" });
    setEditIndex(null);
    navigate("/PortalPaciente", { replace: true });
  };

  const handleEdit = (index) => {
    setDados(usuarios[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = usuarios.filter((_, i) => i !== index);
    setUsuarios(updatedUsers);
    localStorage.setItem("usuarios", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2>{editIndex !== null ? "Editar Usuário" : "Atualizar dados"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
        />
        <label>Telefone:</label>
        <input
          type="tel"
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
        />
        <button type="submit">
          {editIndex !== null ? "Atualizar" : "Cadastrar"}
        </button>
      </form>

      <h2>Usuários Cadastrados</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            {usuario.nome} - {usuario.email} - {usuario.telefone}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Atualizacao;
