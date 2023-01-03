import React from 'react'
import './homepage.css';
import adminImage from "../../Images/CharanjeetSingh.png";
import About from './about';
import Resume from '../../resume/ResumeCharanjeetSinghSidhu.pdf'
import Resumepage from './resume';
import Hobbiespage from './hobbies';
import Servicespage from './services';
import ContactUs from '../contactus/contact';
import Footer from '../footer/footer';
import Projectcontact from '../Hompage/projectcontact';
import Navbar from '../Navbar/navbar';
import Portfolio from '../portfolio/portfolio';
import Chatbotbtn from '../chatbot/chatbot'

function Homepage() {
    return (
       
        <div className="homepage-container-Wrapper" id="homepage-container-Wrapper">
            <div className="navbar-side-Wrapper"><Navbar/> </div>
            <div className="Wrapper-Box-content-Hompage">
                <div className="main-Box-of-Website" id="main-Box-of-Website">
                    <div className="intro-Div-Wrapper" id="intro-Div-Wrapper">
                        <div className="intro-Div-Wrapper-Details">
                            <div className="name-div">
                                <p className="website-para1">Hi, I'm</p>
                                <p className="website-para2">Charanjeet Singh  <span>Sidhu</span></p>
                            </div>
                            <div className="horizontal-Line-homepage"></div>
                            <div className="expertise-in-div"> IT Expert <span>Full Stack Developer</span><span> Graphic Designer</span> </div>
                        </div>
                        <div className="intro-Div-Wrapper-photo">
                            <img src={adminImage} alt="Charanjeet Singh Sidhu Data Not Found" className="admin-Image" />
                        </div>
                    </div>
                    <div className="buttons-Wrapper">
                        <button className="download-Resume-Button" > <a href={Resume} download="Charanjeet-Singh-Sidhu" >downlaod resume</a></button>
                        <button className="view-Portfolio-Button">view portfolio</button>
                    </div>

<About/>
<Resumepage/>
<Hobbiespage/>
<Servicespage/>
<Portfolio/>

<Projectcontact />
<ContactUs/>

<Chatbotbtn/>

<Footer/>



                </div>
            </div>
        </div>
    )
}

export default Homepage;
