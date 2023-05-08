import React from 'react';
import stylesFeatureSection from '../Features/FeaturesSection.module.css';
import Gallery from './Gallery';

const GallerySection = () => {
    const galleryData = [
        {
            image: require('../../assets/images/screenshot.png'),
            title: 'Screen shot #1',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            image: require('../../assets/images/screenshot.png'),
            title: 'Screen shot #2',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            image: require('../../assets/images/screenshot.png'),
            title: 'Screen shot #3',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        },
        {
            image: require('../../assets/images/screenshot.png'),
            title: 'Screen shot #4',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.'
        }
    ];

    return (
        <section className={stylesFeatureSection['content-section']} data-nav="gallery" style={{ marginBottom: '5rem'}} >
            <div className={stylesFeatureSection['center-title']}>
                <h1 style={{ marginTop: '2.5rem'}}>show the gallery</h1>
                <p>summarise what your product is all about</p>
            </div>
            <div className={stylesFeatureSection['content']}>
                {galleryData.map((gallery, index) => (
                    <Gallery key={index} image={gallery.image} title={gallery.title} description={gallery.description}/>
                ))}
            </div>
        </section>
    );
}

export default GallerySection;