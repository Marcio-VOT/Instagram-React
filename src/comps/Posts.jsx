export default () => {
  return (
    <div className="posts">
      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="assets/meowed.svg" />
            meowed
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src="assets/gato-telefone.svg" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
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
      </div>

      <div className="post">
        <div className="topo">
          <div className="usuario">
            <img src="assets/barked.svg" />
            barked
          </div>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img src="assets/dog.svg" />
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src="assets/adorable_animals.svg" />
            <div className="texto">
              Curtido por <strong>adorable_animals</strong> e
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
