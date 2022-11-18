export default () => {
  const esquerda = [
    "heart-outline",
    "chatbubble-outline",
    "paper-plane-outline",
  ];
  const direita = ["bookmark-outline"];
  return (
    <div className="posts">
      <Post
        usuarioIMG="assets/meowed.svg"
        usuario="meowed"
        conteudoIMG="assets/gato-telefone.svg"
        acoesEsquerda={esquerda}
        acoesDireita={direita}
      />
      <Post
        usuarioIMG="assets/barked.svg"
        usuario="barked"
        conteudoIMG="assets/dog.svg"
        acoesEsquerda={esquerda}
        acoesDireita={direita}
      />
    </div>
  );
};

function Post(props) {
  const lista = [props];
  return (
    <div className="post">
      {lista.map((f) => (
        <Topo topo={f} />
      ))}

      {lista.map((f) => (
        <Conteudo conteudo={f} />
      ))}

      {lista.map((f) => (
        <Fundo fundo={f} />
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
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
          {props.fundo.acoesEsquerda.map((f) => (
            <ion-icon name={f}></ion-icon>
          ))}
        </div>
        <div>
          {props.fundo.acoesDireita.map((f) => (
            <ion-icon name={f}></ion-icon>
          ))}
        </div>
      </div>

      <div className="curtidas">
        <img src="assets/respondeai.svg" />
        <div className="texto">
          Curtido por <strong>respondeai</strong> e
          <strong>outras 101.523 pessoas</strong>
        </div>
      </div>
    </div>
  );
}
