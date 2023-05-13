import React from "react";
export const Perfil = () => {
  return (
    <div>
      <div class="linha">
        <section>
          <h2><strong>Dados Pessoais</strong></h2>
          <div class="coluna col4">
            <img src="img/eu2.png" alt="" />
            <p><h3><strong>Vinícius Ferreria de Oliveira</strong></h3></p>
          </div>
          <div class="coluna2 col8">
            <ul class="sem-padding sem-marcador">
              <li>
                <h3><strong>Data de Nasc: </strong>14/04/2006</h3>
              </li>
              <li>
                <h3><strong>Estado Civil: </strong>Solteiro</h3>
              </li>
              <li>
                <h3><strong>Nacionalidade: </strong>Brasileiro</h3>
              </li>
            </ul>
            <br/>
            <h3>
              Meu interesse é voltado em tecnologia e desafios. Gosto de programar e pretendo 
              ingressar na faculdade para que eu possa aprimorar meus conhecimentos dentro dessa área. 
              Sou muito empenhado em realizar meus objetivos e alcançar meus sonhos.
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Perfil;
