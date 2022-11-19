import React from "react";
export default () => {
  const list = [
    "home",
    "search-outline",
    "add-circle-outline",
    "heart-outline",
    "person-outline",
  ];
  return (
    <div className="fundo-mobile">
      {list.map((n) => (
        <ion-icon key={n} name={n}></ion-icon>
      ))}
    </div>
  );
};
