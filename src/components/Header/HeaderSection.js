import React, {useState} from 'react';
import styles from './HeaderSection.module.css';
import {AiFillApple, AiFillAndroid} from 'react-icons/ai';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

const HeaderSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const backgroundImageList = [require('../../assets/images/base.png'), require('../../assets/images/base_2.png'), require('../../assets/images/base_3.png')];

    const handlePrevButtonClick = () => {
        setCurrentImageIndex(currentImageIndex === 0 ? backgroundImageList.length - 1 : currentImageIndex - 1);
    };

    const handleNextButtonClick = () => {
        setCurrentImageIndex((currentImageIndex + 1) % backgroundImageList.length);
    };

    const headerBaseStyle = {
        backgroundImage: `url(${backgroundImageList[currentImageIndex]})`
    };

    return (
        <section className={styles['header-base']} style={headerBaseStyle} data-nav="home">
            <div className={styles['header-base-image']}>
                <img src={require('../../assets/images/base_hand.png')} alt="Hand"/>
            </div>
            <div className={styles['header-base-text']}>
                <h1>Simple, Beautiful <b>and Amazing</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus
                    ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi
                    fringilla lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
                </p>
                <div className={styles['header-base-buttons']}>
                    <a href="#">Download</a>
                    <a href="#">Learn more</a>
                </div>
                <p>
                    Available on:
                    <div id={styles['apple-icon']}><AiFillApple/></div>
                    <div id={styles['android-icon']}><AiFillAndroid/></div>
                </p>
            </div>
            <div id={styles['left-arrow']} onClick={handlePrevButtonClick}><MdArrowBackIosNew/></div>
            <div id={styles['right-arrow']} onClick={handleNextButtonClick}><MdArrowForwardIos/></div>
            <div className={styles['indicators']}>
                {backgroundImageList.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles['indicator']} ${currentImageIndex === index ? styles['active'] : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeaderSection;