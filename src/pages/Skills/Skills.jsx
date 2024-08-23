import React from 'react'
import './Skills.css'
import { TechList } from '../../utils/TechList'
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <>
    <div className="techstack"  id='skill'>
        <RubberBand>
        <h2 className='col-12 mt-3 md-1 text-center text-uppercase'>Skills</h2>
        <hr />
        <p className='pb-3 text-center '>
         👉 Including programming Languages, Frameworks, Databases, Frontend, Backend, APIs, Tools, Testing, etc.
        </p>
        </RubberBand>
        <div className="row">
        {
            TechList.map((tech) =>(
                <Fade left>
                <div key={tech._id} className="col-md-3">
                    <div className="card m-2">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="media d-flex justify-content-center">
                                    <div className="align-self-center">
                                       <tech.icons className="tech-icon" />
                                    </div>
                                    <div className="media-body">
                                        <h5>{tech.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
            ))
        }
    </div>
    </div>
    
    </>
  )
}

export default Skills
