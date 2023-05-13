import React from "react";
import style from "./Menu.module.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className={style.menu}>
        <div class="linha">
          <header>
            <div class="coluna col4">
              <h1 className={style.logo}>Vinícius F. de Oliveira</h1>
            </div>
            <div class="coluna col8">
              <nav>
                <ul class="menu inline sem-marcador">
                  <li>
                    <Link to="/">home</Link>  {/* Objetivo */}
                  </li>
                  <li>
                    <Link to="/perfil">perfil</Link>  {/* Minha foto redonda e dados pessoais */}
                  </li>
                  <li>
                    <Link to="/cursos">Cursos</Link>  {/* Cursos, escolariedade */}
                  </li>
                  <li>
                    <Link to="/contato">contato</Link>   {/* Meios de contato: telefone, email e endereço */}
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
export default Menu;
