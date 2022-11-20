import React from "react";

export default () => {
  const usuario = {
    fotoPerfil: "assets/catanacomics.svg",
    nomePerfil: "catanacomics",
    subNomePerfil: "Catana",
  };

  return (
    <div data-test="user" className="usuario">
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
        data-test="profile-image"
        onClick={() => setImagem(prompt("qual o link da imagem?"))}
        src={!imagem ? props.dados.fotoPerfil : imagem}
      />
      <div className="texto">
        <strong>{props.dados.nomePerfil}</strong>
        <span>
          <span data-test="name">
            {!nome ? props.dados.subNomePerfil : nome}
          </span>
          <ion-icon
            data-test="edit-name"
            onClick={() => setNome(prompt("qual seu nome"))}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </React.Fragment>
  );
}
