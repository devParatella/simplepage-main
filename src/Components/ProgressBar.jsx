import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Importe o PropTypes
import styles from './ProgressBar.module.css';

export default function ProgressBar({ progress }) {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage(progress);
    }, [progress]);

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
            </div>
            <span className={styles.percentage}>{percentage}%</span>
        </div>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
};
