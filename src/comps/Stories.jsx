export default () => {
  const str = [
    { imagem: "./assets/9gag.svg", usuario: "9gag" },
    { imagem: "./assets/meowed.svg", usuario: "meowed" },
    { imagem: "./assets/barked.svg", usuario: "barked" },
    {
      imagem: "./assets/nathanwpylestrangeplanet.svg",
      usuario: "nathanwpylestrangeplanet",
    },
    { imagem: "./assets/wawawicomics.svg", usuario: "wawawicomics" },
    { imagem: "./assets/respondeai.svg", usuario: "respondeai" },
    { imagem: "./assets/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "./assets/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];
  return (
    <div className="stories">
      {str.map((dados) => (
        <Str dados={dados} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
};

function Str(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.dados.imagem} />
      </div>
      <div className="usuario">{props.dados.usuario}</div>
    </div>
  );
}
