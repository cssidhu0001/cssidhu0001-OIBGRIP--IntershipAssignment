import React from 'react';
import './services.css';
import webdev from '../../Images/icon/webdev-icon.png';
import anroiddev from '../../Images/icon/anroid-icon.png';
import Photography from '../../Images/icon/photo-icon.png';
import socialmedia from '../../Images/icon/social-icon.png';


function Servicespage() {
    return (
        <div className="main-container-Wrapper-Services-Page" id="main-container-Wrapper-Services-Page">
            <p className="Services-page-heading-Para">Services </p>
            <div className="horizontal-Line-Services"></div>
            <p className="Services-page-Quote-Para">Versatile & Expert </p>

            <div className="serivces-parent-container">
                <div className="serives-child-conatiner">

                    <div className="services-details-conatianer-Wrapper">
                        <div className="services-icon-Div">
                            <img src={anroiddev} alt="Web Dev Icon Not Found" className="serivces-icon-Image" />
                        </div>
                        <div className="services-Details-div-container">
                            <p className="services-detial-data-para-heading"> Anroid Development</p>
                            <p className="services-detial-data-para-description">Great content is created for with specific purpose. Identifing the need is crucial in the process.</p>
                        </div>
                    </div>

                    <div className="services-details-conatianer-Wrapper">
                        <div className="services-icon-Div">
                            <img src={webdev} alt="Web Dev Icon Not Found" className="serivces-icon-Image" />
                        </div>
                        <div className="services-Details-div-container">
                            <p className="services-detial-data-para-heading"> Web design</p>
                            <p className="services-detial-data-para-description">Great content is created for with specific purpose. Identifing the need is crucial in the process.</p>
                        </div>
                    </div>
                </div>

                <div className="serives-child-conatiner">
                    <div className="services-details-conatianer-Wrapper">
                        <div className="services-icon-Div">
                            <img src={Photography} alt="Web Dev Icon Not Found" className="serivces-icon-Image" />
                        </div>
                        <div className="services-Details-div-container">
                            <p className="services-detial-data-para-heading"> Photography</p>
                            <p className="services-detial-data-para-description">Great content is created for with specific purpose. Identifing the need is crucial in the process.</p>
                        </div>
                    </div>

                    <div className="services-details-conatianer-Wrapper">
                        <div className="services-icon-Div">
                            <img src={socialmedia} alt="Web Dev Icon Not Found" className="serivces-icon-Image" />
                        </div>
                        <div className="services-Details-div-container">
                            <p className="services-detial-data-para-heading"> Social Media</p>
                            <p className="services-detial-data-para-description">Great content is created for with specific purpose. Identifing the need is crucial in the process.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="pageEnd-horizontal-Line-Services"></div>

        </div>
    )
}
export default Servicespage;