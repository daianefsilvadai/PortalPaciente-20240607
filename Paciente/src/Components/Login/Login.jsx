import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/style-login.css";
import { Link } from "react-router-dom";

function Login({ onBack }) {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cpf, password);

    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];

    var usuario = storedUsers.find((p) => p.cpf == cpf);

    if (!usuario) {
      alert("usuario não encontrado!");
      return;
    }

    if (usuario.senha != password) {
      alert("senha não confere!");
      return;
    }

    navigate("/PortalPaciente", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>CPF: </label>
        <input
          type="text"
          minLength={3}
          maxLength={11}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite seu CPF"
        />
      </div>
      <div>
        <label>Senha: </label>
        <input
          type="password"
          minLength={3}
          maxLength={11}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
        />
      </div>
      <div className="recall-forget">
        <label>
          <input type="checkbox" />
          Lembre de mim
        </label>
        <br />
        <a href="#">Esqueceu a senha?</a>
      </div>
      <button type="submit">Entrar</button>
      <div className="cadastre">
        <p>Não tem uma conta?</p>
        <button type="button" onClick={() => navigate("/Cadastro")}>
          Cadastre-se
        </button>
        <button type="button">
          <Link to="/">Voltar</Link>
        </button>
      </div>
    </form>
  );
}

export default Login;
