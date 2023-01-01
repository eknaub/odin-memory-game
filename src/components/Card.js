import React from 'react';

function Card(props) {
  const {
    card: { imgPath, title},
    handleGameLoop,
  } = props;

  return (
    <button
      onClick={handleGameLoop.bind(this, title)}
    >
      <figure>
        <img src={imgPath} alt={title}/>
        <figcaption>{title}</figcaption>
      </figure>
    </button>
  );
}

export default Card;