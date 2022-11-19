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
  const [nome, setNome] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  return (
    <React.Fragment>
      <img
        onClick={() => setImagem(prompt("qual o link da imagem?"))}
        src={!imagem ? props.dados.fotoPerfil : imagem}
      />
      <div className="texto">
        <strong>{props.dados.nomePerfil}</strong>
        <span>
          <span>{!nome ? props.dados.subNomePerfil : nome}</span>
          <ion-icon
            onClick={() => setNome(prompt("qual seu nome"))}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </React.Fragment>
  );
}
