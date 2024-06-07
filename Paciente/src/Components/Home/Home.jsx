import React from "react";
import { Link } from "react-router-dom";
import Foto from "../../assets/Foto1.png";
import "../Home/style-home.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    //localStorage.clear();
  }, []);

  return (
    <section className="container">
      <div className="textHome">
        <h2>Faça sua consulta online de forma rápida e fácil.</h2>

        <h4>Agende agora mesmo sua consulta.</h4>
        <h5>Sua saúde é prioridade.</h5>
        <button className="btHome">
          <Link to="/Login">Agendar</Link>
        </button>
      </div>

      <div className="Foto1">
        <img src={Foto} alt="" />
      </div>
    </section>
  );
}
