export default () => {
  const sug = [
    {
      imgUsuario: "assets/bad.vibes.memes.svg",
      nomeUsuario: "bad.vibes.memes",
      segueUsuario: "Segue você",
      seguirUsuario: "Seguir",
    },
    {
      imgUsuario: "assets/chibirdart.svg",
      nomeUsuario: "chibirdart",
      segueUsuario: "Segue você",
      seguirUsuario: "Seguir",
    },
    {
      imgUsuario: "assets/razoesparaacreditar.svg",
      nomeUsuario: "razoesparaacreditar",
      segueUsuario: "Segue você",
      seguirUsuario: "Seguir",
    },
    {
      imgUsuario: "assets/adorable_animals.svg",
      nomeUsuario: "adorable_animals",
      segueUsuario: "Segue você",
      seguirUsuario: "Seguir",
    },
    {
      imgUsuario: "assets/smallcutecats.svg",
      nomeUsuario: "smallcutecats",
      segueUsuario: "Segue você",
      seguirUsuario: "Seguir",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você<div>Ver tudo</div>
      </div>

      {sug.map((f) => (
        <Sugestao pessoa={f} />
      ))}
    </div>
  );
};
function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.pessoa.imgUsuario} />
        <div className="texto">
          <div className="nome">{props.pessoa.nomeUsuario}</div>
          <div className="razao">{props.pessoa.segueUsuario}</div>
        </div>
      </div>

      <div className="seguir">{props.pessoa.seguirUsuario}</div>
    </div>
  );
}
