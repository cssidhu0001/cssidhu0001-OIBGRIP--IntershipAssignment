import React from 'react';
import './hobbies.css';

function Hobbiespage() {
    return (
        <div  className="main-container-Wrapper-Hobbies-Page" id="main-container-Wrapper-Hobbies-Page">
        <p className="Hobbies-page-heading-Para">Hobbies </p>
        <div className="horizontal-Line-Hobbies"></div>
        <p className="Hobbies-page-Quote-Para">Cheerful & Enthusiastic </p>    
        
        <div className="hobbies-page-displayicon-container">
            <div className="hobbies">
                <img className="myicon" src={require("../../Images/icon/reading.png").default} alt=''/>
                <p className="hobbies-para-heading">Reading</p>
            </div>
            <div className="hobbies">
                <img className="myicon" src={require("../../Images/icon/learning.png").default} alt=''/>
                <p className="hobbies-para-heading">Learning</p>
            </div>
            <div className="hobbies">
                <img className="myicon" src={require("../../Images/icon/photo.png").default} alt=''/>
                <p className="hobbies-para-heading">Photography</p>
            </div>
            <div className="hobbies">
                <img className="myicon" src={require("../../Images/icon/movie.png").default} alt=''/>
                <p className="hobbies-para-heading">Movies</p>
            </div>
            <div className="hobbies">
                <img className="myicon" src={require("../../Images/icon/games.png").default} alt=''/>
                <p className="hobbies-para-heading">Video-Games</p>
            </div>
        </div>


        <div className="pageEnd-horizontal-Line-Hobbies"></div>
        </div>
    )
}

export default Hobbiespage;
