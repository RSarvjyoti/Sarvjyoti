import React from 'react';
import './Project.css'
import CodeCrafter from '../../assets/images/CodeCrafter.png'
import portfolio from '../../assets/images/PortfolioProject.png'
import artifyHub from '../../assets/images/ArtifyHub.png'
import travalTrakkers from '../../assets/images/TravalTrakker.png'
import frankAndOak from '../../assets/images/FrankAndOak.png'
import bewakoof from '../../assets/images/Bewakoof.png'
import Jump from "react-reveal/Jump";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        "Showcasing collaborative and individual efforts, this GitHub repository features a range of projects that highlight innovation,
        teamwork, and technical expertise in full-stack development and beyond."
        </p>
        {/* card design */}
        <div className="row g-4" id="ads">

            {/* Project 1 */}
            <Jump>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={CodeCrafter}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Code Craffter
                    </h6>
                  </div>
                  <div className='btn-group'>
                  <a
                    className="ad-btn"
                    href="https://onlinecodecrafter.netlify.app/login"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/aniyant/Judicial-JavaScript_038"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src={portfolio}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      My Portfolio
                    </h6>
                  </div>
                  <div className='btn-group'>
                  <a
                    className="ad-btn"
                    href="https://sarvjyoti.vercel.app/"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/RSarvjyoti/Sarvjyoti"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 */}

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={artifyHub }
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Redux</span>
                  <span className="card-detail-badge">Chakra UI</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    ArtifyHub 
                    </h6>
                  </div>
                  <div className='btn-group'>
                  <a
                    className="ad-btn"
                    href="https://artifyhub.netlify.app/"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/RSarvjyoti/Behance"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </div>
            </Jump>
            {/* Project 4 */}
            <Jump>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={frankAndOak}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                    Frank And Oak
                    </h6>
                  </div>
                  <div className='btn-group'>
                  <a
                    className="ad-btn"
                    href="https://frankandoak.netlify.app/"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/AdityaSingh-byte/Frank-and-Oak"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </div>


            {/* Project 5 */}


            {/* Project 6 */}

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Frontend</span>
                  <img
                    src={bewakoof}
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">JavaScript</span>
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Bootstrap</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Bewacoof
                    </h6>
                  </div>
                  <div className='btn-group'>
                  <a
                    className="ad-btn"
                    href="https://verdant-queijadas-785dd0.netlify.app/"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Go Live
                  </a>
                  <a
                    className="ad-btn"
                    href="https://github.com/ROHANKUMAR347/algorithm-mystique-23"
                    target="_blank"
                     rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  </div>
                </div>
              </div>
            </div>
            </Jump>

        </div>
      </div>

    </>
  )
}

export default Projects
