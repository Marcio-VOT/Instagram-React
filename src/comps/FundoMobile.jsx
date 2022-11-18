export default () => {
  const list = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div class="fundo-mobile">
      {list.map((n) => (
        <ion-icon name={n}></ion-icon>
      ))}
    </div>
  );
};
