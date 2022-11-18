import React from "react";

export default () => {
  const usuario = {
    fotoPerfil: "assets/catanacomics.svg",
    nomePerfil: "catanacomics",
    subNomePerfil: "Catana",
  };
  return (
    <div className="usuario">
      <Usuario dados={usuario} />
    </div>
  );
};
function Usuario(props) {
  return (
    <React.Fragment>
      <img src={props.dados.fotoPerfil} />
      <div className="texto">
        <strong>{props.dados.nomePerfil}</strong>
        <span>
          <span>{props.dados.subNomePerfil}</span>
          <ion-icon
            onclick="((a)=> { a.parentElement.querySelector('span').innerHTML= prompt('qual seu nome') })(this)"
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </React.Fragment>
  );
}
S;
