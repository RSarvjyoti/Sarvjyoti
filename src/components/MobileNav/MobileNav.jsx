import React, { useState } from 'react';
import './MobileNav.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FcAbout, FcHome,  FcBiotech, FcPositiveDynamic , FcContacts  } from "react-icons/fc";
import { Link } from 'react-scroll';

const MobileNav = () => {

    const [open, setOpen] = useState(false);

    // handle Open

    const handleOpen = () =>{
        setOpen(!open);
    }

    // handle menu click

    const handleMenuClick = () =>{
        setOpen(false)
    }

  return (
    <>
      <div className="mobile-nav">

        <div className="mobile-nav-header">

            {open ? (<IoCloseSharp size={30} className='moblie-nav-icon' onClick={handleOpen} />) :
             (<GiHamburgerMenu size={30} className='moblie-nav-icon' onClick={handleOpen} />)}

            <span className='mobile-nav-title'>Sarvjyoti</span>
        </div>

        {open && (
                    <div className="mobile-nav-menu">
                    <div className="nav-items">
                      <div className="nav-item">
                        <div className="nav-link">
                          <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                           <FcHome />
                           Home
                          </Link>
                        </div>
                        <div className="nav-link">
                          <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                           <FcAbout />
                           About
                          </Link>
                        </div>
                        <div className="nav-link">
                         <Link to='skill' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} >
                         <FcBiotech />
                          Skills
                         </Link>
                        </div>
                        <div className="nav-link">
                          <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                            <FcPositiveDynamic />
                            Projects
                          </Link>
                        </div>
                        <div className="nav-link">
                          <Link to='contact'spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <FcContacts />
                           Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                    </div>
                  )}

       </div>
    </>
  )
}

export default MobileNav
