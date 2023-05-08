import React from 'react';
import styles from './ContactSection.module.css';
import LeafletMap from './LeafletMap';

const ContactSection = () => {
    return (
        <section data-nav="contact" className={styles['contact']}>
            <div className={styles['map-container']}>
                <LeafletMap />
            </div>
            <form className={styles['contact-form']}>
                <h2>Contact</h2>
                <div className={styles['form-group']}>
                    <input type="text" name="name" placeholder="Your name" required />
                </div>
                <div className={styles['form-group']}>
                    <input type="email" name="email" placeholder="Your email" required />
                </div>
                <div className={styles['form-group']}>
                    <input type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className={styles['form-group']}>
                    <textarea name="message" placeholder="Message" rows="7" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default ContactSection;