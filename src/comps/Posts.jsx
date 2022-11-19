import React from "react";
export default () => {
  const postConteudo = [
    {
      usuarioIMG: "assets/meowed.svg",
      usuario: "meowed",
      conteudoIMG: "assets/gato-telefone.svg",
      curtidoPor: "respondeai",
      likesPost: 101.523,
    },
    {
      usuarioIMG: "assets/barked.svg",
      usuario: "barked",
      conteudoIMG: "assets/dog.svg",
      curtidoPor: "respondeai",
      likesPost: 101.523,
    },
  ];
  return (
    <div className="posts">
      {postConteudo.map((f) => (
        <Post
          key={f.usuario}
          usuarioIMG={f.usuarioIMG}
          usuario={f.usuario}
          conteudoIMG={f.conteudoIMG}
          curtidoPor={f.curtidoPor}
          likesPost={f.likesPost}
        />
      ))}
    </div>
  );
};

function Post(props) {
  const lista = [props];
  return (
    <div className="post">
      {lista.map((f) => (
        <Topo key={f} topo={f} />
      ))}

      {lista.map((f) => (
        <Conteudo key={f} conteudo={f} />
      ))}

      {lista.map((f) => (
        <Fundo key={f} fundo={f} />
      ))}
    </div>
  );
}
function Topo(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={props.topo.usuarioIMG} />
        {props.topo.usuario}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
function Conteudo(props) {
  return (
    <div className="conteudo">
      <img src={props.conteudo.conteudoIMG} />
    </div>
  );
}
function Fundo(props) {
  const [likes, setLikes] = React.useState(false);
  const [book, setBook] = React.useState(false);
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon
            onClick={() => setLikes(!likes)}
            name={likes ? "heart" : "heart-outline"}
            style={likes ? { color: "red" } : { color: "" }}
          ></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon
            onClick={() => setBook(!book)}
            name={book ? "bookmark" : "bookmark-outline"}
          ></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src="assets/respondeai.svg" />
        <div className="texto">
          Curtido por <strong>{props.fundo.curtidoPor}</strong> e
          <strong>
            {" "}
            outras{" "}
            {likes ? props.fundo.likesPost + 0.001 : props.fundo.likesPost}{" "}
            pessoas
          </strong>
        </div>
      </div>
    </div>
  );
}
