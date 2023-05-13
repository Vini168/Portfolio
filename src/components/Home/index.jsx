import React from "react";
export const Home = () => {
  return (
    <div>
      <div class="linha">
        <section>
          <h2><strong>Seja muito bem-vindo(a) ao meu portfólio profissional !</strong></h2>
          <div class="coluna">
            <ul class="sem-padding sem-marcador">
              <li>
                <p><h3>Estou em busca de novas oportunidades para ampliar meus conhecimentos e crescer profissionalmente.
                 Acredito na importância de desafios que impulsionem o aprendizado contínuo, e estou entusiasmado em 
                 explorar novas possibilidades.</h3></p>
                 <p><h3>Aqui você encontrará uma visão geral
                 <Link to="/perfil"> sobre mim</Link>, minhas habilidades,
                 <Link to="/cursos"> cursos</Link> e meus
                 <Link to="/contato"> contatos</Link>.</h3></p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
