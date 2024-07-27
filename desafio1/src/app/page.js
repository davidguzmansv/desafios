// page.js
import React from 'react';
import JsonData from './components/JsonData';
import styles from './components/viewer.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <JsonData />
    </div>
  );
};

export default HomePage;
