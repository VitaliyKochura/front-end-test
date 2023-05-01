import React, {useEffect, useState} from 'react';
import styles from './Header.module.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {IoClose} from 'react-icons/io5';
import HeaderSection from './HeaderSection';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - parseInt(window.getComputedStyle(section).marginTop);
                const sectionBottom = sectionTop + section.offsetHeight;


                if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
                    setActiveSection(section.getAttribute('data-nav'));
                }
            });

            if (scrollTop < sections[0].offsetTop) {
                setActiveSection('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigationClick = (event, sectionNavData) => {
        event.preventDefault();

        const section = document.querySelector(`section[data-nav="${sectionNavData}"]`);
        const sectionTop = section.offsetTop - parseInt(window.getComputedStyle(section).marginTop);

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });

        setActiveSection(section.getAttribute('data-nav'));
    };

    return (
        <>
            <header>
                <a href="/">
                    <img src={require('../../assets/images/logo_bazinger.png')} alt="Logo"/>
                </a>
                <ul className={`${styles['nav-list']} ${isOpen ? styles['open'] : ''}`}>
                    <li><a href="#" className={activeSection === 'home' ? `${styles.active}` : ''}
                           onClick={(e) => handleNavigationClick(e, 'home')}>Home</a></li>
                    <li><a href="#" className={activeSection === 'features' ? `${styles.active}` : ''}
                           onClick={(e) => handleNavigationClick(e, 'features')}>Features</a></li>
                    <li><a href="#" className={activeSection === 'gallery' ? `${styles.active}` : ''}>Gallery</a></li>
                    <li><a href="#" className={activeSection === 'video' ? `${styles.active}` : ''}>Video</a></li>
                    <li><a href="#" className={activeSection === 'prices' ? `${styles.active}` : ''}>Prices</a></li>
                    <li><a href="#"
                           className={activeSection === 'testimonials' ? `${styles.active}` : ''}>Testimonials</a></li>
                    <li><a href="#" className={activeSection === 'download' ? `${styles.active}` : ''}>Download</a></li>
                    <li><a href="#" className={activeSection === 'contact' ? `${styles.active}` : ''}>Contact</a></li>
                </ul>
                {isOpen ? <IoClose id={styles['hamburger-menu-icon']} onClick={() => setIsOpen(!isOpen)}/> :
                    <GiHamburgerMenu id={styles['hamburger-menu-icon']} onClick={() => setIsOpen(!isOpen)}/>}
            </header>
            <HeaderSection/>
        </>
    );
}

export default Header;