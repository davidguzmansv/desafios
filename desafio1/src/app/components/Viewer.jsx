// Viewer.js
import React from 'react';
import styles from './viewer.module.css';

const Viewer = ({ titulo, descripcion, caracteristicas, imagen_de_referencia }) => {
  return (
    <div className={styles.card}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <img src={imagen_de_referencia} alt={titulo} />
      <h3>Características</h3>
      <ul>
        {caracteristicas.map((caracteristica, index) => (
          <li key={index}>{caracteristica}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Viewer;
