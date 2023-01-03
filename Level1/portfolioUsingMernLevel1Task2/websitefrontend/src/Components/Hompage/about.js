import React from 'react';
import './about.css';
import ProgressBar from '../progressbar/progressbar';
function About() {
    return (
        <div  className="main-container-Wrapper-About-Page" id="main-container-Wrapper-About-Page">
        <p className="about-page-heading-Para">About </p>
        <div className="horizontal-Line"></div>
        <p className="about-page-Quote-Para">Creative and Passionate </p>    
        <div className="about-para-Detailed">
            <p>To advance my career and enhance my creative skills and become a part of a  pool of highly experienced and talented team of your organization.</p>
            <p>Proven ability to leverage full-stack knowledge and experiences to build interactive and user centered website design to scale.</p>
            <p> Proven ability in optimizing web functionalities that improve data retrieval and workflow efficiencies.</p>
        </div>

<ProgressBar/>
        <div className="pageEnd-horizontal-Line-about"></div>
        </div>
    )
}

export default About;
