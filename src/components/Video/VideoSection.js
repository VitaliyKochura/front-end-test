import React, {useState} from 'react';
import styles from './VideoSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import VideoModal from './VideoModal';

const VideoSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <section data-nav="video" className={styles['video']}>
            <div className={styles['content']} >
                <a onClick={handleOpenModal}><FontAwesomeIcon icon={faPlay}/></a>
                <h1>Watch the best Technology in <b>Action</b></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus
                    ullamcorper. Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla
                    lacinia. Nullam pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.</p>
            </div>
            <VideoModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}

export default VideoSection;