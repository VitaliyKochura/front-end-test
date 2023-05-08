import React from 'react';
import styles from './Gallery.module.css';

const Gallery = ({image, title, description }) => {
    return (
        <div className={styles['gallery-item']}>
            <div className={styles['gallery']}>
                <img src={image} alt={title} />
                <a className={styles['overlay']} href="#"></a>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
}

export default Gallery;