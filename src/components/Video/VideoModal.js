import React from 'react';
import Modal from 'react-modal';
import styles from './VideoModal.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

function VideoModal({isOpen, onClose}) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className={styles['modal']} appElement={document.getElementById('root')} style={{overlay: {zIndex: 1000}}}>
            <iframe title="video" src="https://www.youtube.com/embed/Tn6-PIqc4UM" allowFullScreen></iframe>
            <button onClick={onClose}><FontAwesomeIcon icon={faWindowClose}/></button>
        </Modal>
    );
}

export default VideoModal;