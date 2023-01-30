import React from 'react';
import styles from '../../styles/UI/Loading.module.css'

const LoadingAnimation = () => {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingBar}></div>
        <div className={styles.loadingBar}></div>
        <div className={styles.loadingBar}></div>
        <div className={styles.loadingBar}></div>
      </div>
    );
  }

export default LoadingAnimation;