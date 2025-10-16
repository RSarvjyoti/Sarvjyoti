import React from 'react';
import { useTheme } from '../../context/ThemeContext'; 
import './Home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Sarvjyoti.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prev) => (prev === 'light' ? "dark" : "light"));
  };

  const handleResumeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    // Open the PDF in a new tab
    const newTab = window.open(Resume, '_blank', 'noopener,noreferrer');
    // Trigger download after opening in a new tab
    if (newTab) {
      newTab.onload = () => {
        // Create a temporary anchor element for the download
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Sarvjyoti.pdf'; // Ensure the filename is Sarvjyoti.pdf
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Cleanup the element
      };
    }
  };

  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi<span><img src="https://user-images.githubusercontent.com/74038190/214644152-52f47eb3-5e31-4f47-8758-05c9468d5596.gif" alt="" />, </span> I'm </h2>
            <h1>
              <Typewriter
                options={{
                  strings: ['Sarvjyoti', "Enthusiast in MERN stack development!",'Full-stack developer!',"Frontend development", "Backend development"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a 
                href="https://api.whatsapp.com/send?phone=9565229415" 
                className='btn btn-hire' 
                rel='noreferrer' 
                target='_blank'>
                Hire Me
              </a>
              <a 
                className='btn btn-cv' 
                href={Resume} 
                onClick={handleResumeClick} 
                download="Sarvjyoti.pdf" 
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div> 
      </div>
    </>
  );
};

export default Home;
