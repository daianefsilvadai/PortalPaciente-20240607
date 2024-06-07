import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [dtNasc, setDtNasc] = useState("");
  const [senha, setSenha] = useState("");
  const [confiSenha, setConfiSenha] = useState("");
  const navigate = useNavigate();

  const estados = ["SP", "RJ", "MG", "RS", "SC"];
  const cidadesPorEstado = {
    SP: ["São Paulo", "Campinas", "Osasco"],
    RJ: ["Rio de Janeiro", "Duque de Caxias", "Petrópolis"],
    MG: ["Belo Horizonte", "Uberlândia", "Juiz de Fora"],
    RS: ["Porto Alegre", "Caxias do Sul", "Gramado"],
    SC: ["Blumenau", "Joinville", "Lages"],
  };

  const generos = ["Masculino", "Feminino"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Paciente cadastrado: ", nome, cpf, senha, confiSenha);
  };

  const salvar = () => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = {
      id: usuarios ? usuarios.length + 1 : 1,
      nome: nome,
      cpf: cpf,
      telefone: telefone,
      endereco: endereco,
      estado: estado,
      cidade: cidade,
      cep: cep,
      genero: genero,
      email: email,
      dtNasc: dtNasc,
      senha: senha,
      confiSenha: confiSenha,
    };
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  };

  const handleCadastrarClick = () => {
    salvar();
    alert("Cadastro realizado com sucesso!");
    navigate("/Login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>CPF: </label>
        <input
          type="text"
          value={cpf}
          minLength={11}
          maxLength={11}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Telefone: </label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Endereço: </label>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Estado: </label>
        <select
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          {estados.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Cidade: </label>
        <select
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          disabled={!estado}
          required
        >
          <option value="">Selecione</option>
          {cidadesPorEstado[estado]?.map((cidade) => (
            <option key={cidade} value={cidade}>
              {cidade}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>CEP: </label>
        <input
          type="text"
          value={cep}
          minLength={8}
          maxLength={8}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Gênero: </label>
        <select
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          {generos.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data de Nascimento: </label>
        <input
          type="date"
          value={dtNasc}
          onChange={(e) => setDtNasc(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Senha: </label>
        <input
          type="password"
          value={senha}
          minLength={3}
          maxLength={8}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Confirmar Senha: </label>
        <input
          type="password"
          value={confiSenha}
          minLength={3}
          maxLength={8}
          onChange={(e) => setConfiSenha(e.target.value)}
          required
        />
      </div>

      <button type="button" onClick={handleCadastrarClick}>
        Cadastrar
      </button>
    </form>
  );
}

export default Cadastro;
