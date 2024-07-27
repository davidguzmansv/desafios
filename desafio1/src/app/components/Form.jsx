// Form.js
import React from 'react';
import styles from './viewer.module.css';

const Form = ({ data }) => {
    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <div key={index} className={styles.item}>
                    <h2>{item.titulo}</h2>
                    <p>DESCRIPCIÓN</p>
                    <p>{item.descripcion}</p>
                    <figure>
                        <img src={item.imagen_de_referencia} alt={item.titulo} className={styles.image} />
                    </figure>
                    <div className={styles.caracteristicas}>
                        <h3>CARACTERÍSTICAS</h3>
                        <p>{item.caracteristicas}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Form;