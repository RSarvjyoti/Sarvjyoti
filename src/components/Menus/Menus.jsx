import React from 'react'
import './Menus.css'
import profile from '../../images/profile.png';
import { FcAbout, FcHome,  FcBiotech, FcPositiveDynamic , FcContacts  } from "react-icons/fc";
import { Link } from 'react-scroll';
import Fade from "react-reveal/Fade";

import Zoom from "react-reveal/Zoom";

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
      <>
      <Zoom >
        <div className="navbar-profile-pic">
          <img src={profile} alt="profile pic" />
        </div>
        </Zoom>
        <Fade left>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
               <FcHome />
               Home
              </Link>
            </div>
            <div className="nav-link">
              <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
               <FcAbout />
               About
              </Link>
            </div>
            <div className="nav-link">
             <Link to='skill' spy={true} smooth={true} offset={-100} duration={100} >
             <FcBiotech />
              Skills
             </Link>
            </div>
            <div className="nav-link">
              <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} >
                <FcPositiveDynamic />
                Projects
              </Link>
            </div>
            <div className="nav-link">
              <Link to='contact'spy={true} smooth={true} offset={-100} duration={100} >
              <FcContacts />
               Contact
              </Link>
            </div>
          </div>
        </div>
        </Fade>
      </>
    ) : (
      <>
      <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
             <Link to='home' spy={true} smooth={true} offset={-100} duration={100} >
              <FcHome title='Home'/>
              </Link>
            </div>
            <div className="nav-link">
             <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
              <FcAbout title='About' />
              </Link>
            </div>
            <div className="nav-link">
            <Link to='skill' spy={true} smooth={true} offset={-100} duration={100} >
             <FcBiotech title='skills' />
             </Link>
            </div>
            <div className="nav-link">
            <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} >
             <FcPositiveDynamic title='Projects' />
             </Link>
            </div>
            <div className="nav-link">
            <Link to='contact'spy={true} smooth={true} offset={-100} duration={100} >
              <FcContacts title='Contact' />
              </Link>
            </div>
          </div>
        </div>
      </>
    )}
    </>
  )
}

export default Menus
