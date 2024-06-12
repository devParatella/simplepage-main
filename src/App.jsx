import { useState } from 'react';
import LeftSidebar from './Components/LeftSidebar.jsx';
import MainContent from "./Components/MainContent.jsx";
import Slide from './Components/Slide.jsx';
import reactImage from "./assets/IMG/react-logo.png";
import './App.css';

function App() {
  const [showTopContent, setShowTopContent] = useState(false);

  const handleMouseMove = (e) => {
    if (e.clientY <= 10) {
      setShowTopContent(true);
    } else {
      setShowTopContent(false);
    }
  };

  const slideComponents = [
    <LeftSidebar key="leftSidebar" />,
    <MainContent key="mainContent" />,
  ];

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <div className={`top-content ${showTopContent ? 'show' : ''}`}>
        <img src={reactImage} alt="React Image" className="reactImage" />
        <p>Curriculo em React</p>
      </div>
      <div className="desktop-content">
        <div className="fixed">
          <LeftSidebar />
        </div>
        <div className="scrollable">
          <MainContent />
        </div>
      </div>
      <div className="mobile-content">
        <Slide components={slideComponents} time={30000} />
      </div>
    </div>
  );
}

export default App;
