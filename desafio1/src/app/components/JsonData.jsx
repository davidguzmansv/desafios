"use client"
import React, { useState, useEffect } from 'react';
import styles from './viewer.module.css';

const JsonData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data/datos.json'); // Ajusta la ruta al archivo JSON
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const renderCharacteristics = (caracteristicas) => {
    if (Array.isArray(caracteristicas)) {
      return caracteristicas.map((caracteristica, index) => (
        <li key={index}>{caracteristica}</li>
      ));
    } else if (typeof caracteristicas === 'object' && caracteristicas !== null) {
      return Object.values(caracteristicas).map((caracteristica, index) => (
        <li key={index}>{caracteristica}</li>
      ));
    } else if (typeof caracteristicas === 'string') {
      return caracteristicas.split(', ').map((caracteristica, index) => (
        <li key={index}>{caracteristica}</li>
      ));
    }
    return null;
  };

  const renderItems = (items) => {
    if (!Array.isArray(items)) {
      return <div>Error: Expected an array of items</div>;
    }

    return items.map((item, index) => {
      const imageKey = Object.keys(item).find(key => key.toLowerCase().includes('imagen'));
      return (
        <div key={index} className={styles.item}>
          <div className={styles.itemHeader}>
            <h2>{item.titulo}</h2>
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemDescription}>
              <h3>Descripción</h3>
              <p>{item.descripcion}</p>
            </div>
            {imageKey && (
              <img 
                src={item[imageKey]} 
                alt={item.titulo} 
                onError={(e) => e.target.src = 'https://via.placeholder.com/75'}
              />
            )}
          </div>
          <h3>Características</h3>
          <ul>
            {renderCharacteristics(item.caracteristicas)}
          </ul>
          <hr />
        </div>
      );
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const mainArray = Object.values(data).find(value => Array.isArray(value));

  if (!Array.isArray(mainArray)) {
    return <div>Error: Expected an array of data</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {renderItems(mainArray)}
      </div>
    </div>
  );
};

export default JsonData;
