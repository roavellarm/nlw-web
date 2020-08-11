import React from "react";
import logoImg from "../../assets/images/logo.svg";
import "./styles.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import heartImg from "../../assets/images/icons/purple-heart.svg";

export default function Login() {
  return (
    <div id="container">
      <div id="left-container">
        <div className="background-image">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>
        </div>
      </div>

      <div id="right-container">
        <main>
          <form id="form">
            <h2>Fazer login</h2>
            <div id="input-block">
              <input type="email" placeholder="E-mail" className="email" />

              <input type="password" placeholder="Senha" className="password" />
            </div>

            <div className="links">
              <div className="checkbox-container">
                <span className="checkbox">
                  <input type="checkbox" />
                </span>
                Lembrar-me
              </div>
              <Link to="/" className="link">
                Esquecí minha senha
              </Link>
            </div>

            <Button
              title="Entrar"
              onClick={() => {
                alert("You clicked me!");
              }}
            />
          </form>

          <div id="footer">
            <div className="link-cadastro">
              Não tem conta?
              <Link to="/register" className="footer-link">
                Cadastre-se
              </Link>
            </div>

            <div className="heart">
              {`É de graça   `}
              <img src={heartImg} alt="Heart Icon" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
