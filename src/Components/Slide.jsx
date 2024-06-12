import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './slide.module.css';

const Slide = ({ components, time }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, time);

    return () => clearInterval(interval);
  }, [components.length, time]);

  return (
    <div className={styles.slideContainer}>
      {components[currentIndex]}
    </div>
  );
};

Slide.propTypes = {
  components: PropTypes.arrayOf(PropTypes.element).isRequired,
  time: PropTypes.number.isRequired,
};

export default Slide;
