import React from 'react'
import './About.css'
import Pic from '../../images/profile.png'
import Jump from "react-reveal/Jump";

const About = () => {
  return (
   <>
   <Jump>
   <div className="about" id='about'>
    <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Pic} alt="my-pic" />
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About Me</h1>
            <p>
            Hello! I'm Sarvjyoti, and I completed my Diploma in Information Technology from Government Girls Polytechnic Ayodhya UP (BTEUP) in 2023. As an aspiring MERN stack developer at Masai School, I've built a solid foundation in web development through projects like a personal portfolio website, an E-commerce app, and a real-time Code editor(Code Craffter). I am skilled in Java, JavaScript, React, Node.js, Express.js, Mysql and  MongoDB.
            Passionate about problem-solving, I've solved over 100 DSA problems on LeetCode and more than 700 on the Masai OJ platform. In my free time, I enjoy cooking and playing badminton. I also love exploring new technologies and working collaboratively.
            I am excited to contribute to innovative projects and grow my skills. Feel free to explore my portfolio or connect with me .
            Thank you for visiting my portfolio!

            </p>
        </div>
    </div>
   </div>
   </Jump>
   </>
  )
}

export default About
