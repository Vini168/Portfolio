import React from "react";
const Contato = () => {
  return (
    <div>
      <div class="linha">
        <section>
          <div class="coluna col7">
            <h2>
              <strong>Localização</strong>
            </h2>
            <img src="img/maps.png" alt="" />
            <ul class="sem-padding sem-marcador">
              <li>
                <h3>
                  <strong>Rua: </strong>Rua dos Pumas, 115
                </h3>
              </li>
              <li>
                <h3>
                  <strong>Bairro: </strong>Jardim do Engenho
                </h3>
              </li>
              <li>
                <h3>
                  <strong>Cidade: </strong>Cotia
                </h3>
              </li>
              <li>
                <h3>
                  <strong>Estado: </strong>São Paulo
                </h3>
              </li>
            </ul>
          </div>

          <div class="coluna col5 contato">
            <h2>
              <strong>Contato Direto:</strong>
            </h2>
            <img src="img/icons.png" alt="" />
            <ul class="sem-padding sem-marcador">
              <li>
                <h3>
                  <strong>Telefone: </strong> (11) 9 9675-9947
                </h3>
              </li>
              <li>
                <h3>
                  <strong>E-mail: </strong>vinicius000168@gmail.com
                </h3>
              </li>
              <li>
                <h3>
                  <b>Instagram: </b><a href="https://www.instagram.com/vinusferreira/">@vinusferreira</a>
                </h3>
              </li>
              <li>
                <h3>
                  <b> GitHub: </b><a href="https://github.com/Vini168">Vini168</a>
                </h3>
              </li>
              <li>
                <h3>
                  <b> LinkedIn: </b><a href="https://www.linkedin.com/in/vin%C3%ADcius-ferreira-de-oliveira-4659ab1a5/">ViníciusF.</a>
                </h3>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Contato;
