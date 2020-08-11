import React from "react";
import logoImg from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import backIcon from "../../assets/images/icons/back.svg";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div id="container">
      <div id="right-container">
        <div className="go-back-link">
          <Link to="/login">
            <img src={backIcon} alt="voltar" />
          </Link>
        </div>
        <form id="form">
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar</p>
          <div id="input-block">
            <input type="text" placeholder="Nome" className="email" />
            <input type="text" placeholder="Sobrenome" className="email" />
            <input type="email" placeholder="E-mail" className="email" />
            <input type="password" placeholder="Senha" className="password" />
          </div>

          <Button
            title="Concluir cadastro"
            onClick={() => {
              alert("You clicked me!");
            }}
          />
        </form>
      </div>

      <div id="left-container">
        <div className="background-image">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
