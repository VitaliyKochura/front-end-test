import React from 'react';
import styles from './Feature.module.css';

const Feature = ({icon, title, description}) => {
    return (
        <div className={styles['feature']}>
            <a href="#" className={styles['feature-icon']}>
                <img src={icon} alt={title} />
            </a>
            <h3><a href="#">{title}</a></h3>
            <p>{description}</p>
        </div>
    );
};

export default Feature;