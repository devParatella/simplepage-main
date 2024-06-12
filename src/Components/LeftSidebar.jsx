import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './leftsidebar.module.css';
import devParatella from '../assets/IMG/DevParatellaNoBg.png';
import ProgressBar from '../Components/ProgressBar.jsx';

export default function LeftSidebar() {
    const progress = 70;

    return (
        <div className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&authuser=0&hl=pt-BR"
                alt="Top Image"
                className={styles.topImage}
            />
            <div className='frame'>
                <img src={devParatella} alt="Center Image" className={styles.centerImage} />
            </div>
            <h1 className={styles.title}>Marcos Paratella Júnior</h1>
            <p className={styles.text1}>Desenvolvedor FullStack</p>
            <ProgressBar progress={progress} />
            <a href="https://www.linkedin.com/in/marcos-paratella-74b291239/" className={`${styles.link} ${styles.linkedin}`} target="_blank" rel="noopener noreferrer">
                <button className={`${styles.button} ${styles.buttonEdin}`}>
                    <FaLinkedin className={styles.icon} /> Marcos Paratella
                </button>
            </a>
            <a href="https://github.com/DevParatella" className={`${styles.link} ${styles.linkGit}`} target="_blank" rel="noopener noreferrer">
                <button className={`${styles.button} ${styles.buttonGit}`}>
                    <FaGithub className={styles.icon} /> DevParatella
                </button>
            </a>
        </div>
    );
}
