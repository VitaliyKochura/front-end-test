import React from 'react';
import styles from './FeaturesSection.module.css';
import Feature from './Feature';

const FeaturesSection = () => {
    const featureData = [
        {
            icon: require('../../assets/images/attractive_layout.png'),
            title: 'Attractive Layout',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
        },
        {
            icon: require('../../assets/images/fresh_design.png'),
            title: 'Fresh Design',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
        },
        {
            icon: require('../../assets/images/multipurpose.png'),
            title: 'Multipurpose',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
        },
        {
            icon: require('../../assets/images/easy _to_customize.png'),
            title: 'Easy to customize',
            description: 'Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.',
        },
    ];

    return (
        <section className={styles['features']} data-nav="features">
            <div className={styles['center-title']}>
                <h1>summarise the features</h1>
                <p>summarise what your product is all about</p>
            </div>
            <div className={styles['content']}>
                {featureData.map((feature, index) => (
                    <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description}/>
                ))}
            </div>
        </section>
    );
}

export default FeaturesSection;