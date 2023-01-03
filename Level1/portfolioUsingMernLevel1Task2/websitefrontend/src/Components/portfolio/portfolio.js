import React from 'react';
import './portfolio.css';
import Projects from './projects';

import Achievement from './Achievement';
import Workshop from './workshop';
import Certificates from './certificate';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Portfolio() {

    var showmoreContent="All"
    const arraybartitlehead = ["title-head-projects","title-head-achievements","title-head-workshops","title-head-certification","title-head-all"]
    const arraybartitleheaddiv = ["projects-maincontainer-wrapper","achievement-maincontainer-wrapper","workshop-maincontainer-wrapper","certificate-maincontainer-wrapper"]
    function BorderBottom(show,getcontent){
        let i=0;
        for (i=0;i<5;i++){
            document.getElementById(arraybartitlehead[i]).style.borderBottom="none"    
        }
        document.getElementById(arraybartitlehead[show]).style.borderBottom="2px solid black"
        if (show === 4){
            for (i=0;i<4;i++){
                document.getElementById(arraybartitleheaddiv[i]).style.display="flex"
            }
        } else {
            for (i=0;i<4;i++){
                document.getElementById(arraybartitleheaddiv[i]).style.display="none"
            }
            document.getElementById(arraybartitleheaddiv[show]).style.display="flex"
        }
        showless()
        showmoreContent = getcontent
    }

    const displayAll = () => {
        BorderBottom(4,"All")
        showless()
    }
    const displayProjects = () => {
        BorderBottom(0,"hide-project")
    }
    const displayAchievements = () => {
        BorderBottom(1,"Available-soon")
    }
    const displayWorkshops = () => {
        BorderBottom(2,"Available-soon")
    }
    const displayCertification = () => {
        BorderBottom(3,"hide-certificate")
    }

    const showmore = () => {
        document.getElementById("show-less-para").style.display="block"
        document.getElementById("show-more-para").style.display="none"
        if (showmoreContent==="All"){
            document.getElementById("achievement-maincontainer-wrapper").style.display="flex"
            document.getElementById("workshop-maincontainer-wrapper").style.display="flex"
            document.getElementById("certificate-maincontainer-wrapper").style.display="flex"
            document.getElementById("hide-certificate").style.display="flex"
            document.getElementById("hide-project").style.display="flex"
            document.getElementById("hide-certificate").style.flexDirection="column"
        } else if (showmoreContent === "Available-soon") {
            toast.info("Available Soon...",{
                position:"top-center"
            })
        } else {
            document.getElementById(showmoreContent).style.display="flex"
            document.getElementById(showmoreContent).style.flexDirection="column"
        }
    }    
    
    const showless = () => {
        document.getElementById("show-more-para").style.display="block"
        document.getElementById("show-less-para").style.display="none"
        if (showmoreContent==="All"){
            document.getElementById("achievement-maincontainer-wrapper").style.display="none"
            document.getElementById("workshop-maincontainer-wrapper").style.display="none"
            document.getElementById("certificate-maincontainer-wrapper").style.display="none"
            document.getElementById("hide-certificate").style.display="none"
            document.getElementById("hide-project").style.display="none"
        } else if(showmoreContent==="Available-soon") {
            // do nothing
        }else {
            document.getElementById(showmoreContent).style.display="none"
        }
        window.location.href="#main-container-Wrapper-About-Portfolio" 
    }

    return (
        <>
        <div>
        <div className="main-container-Wrapper-About-Portfolio" id="main-container-Wrapper-About-Portfolio">
            <p className="portfolio-page-heading-Para">Portfolio</p>
            <div className="horizontal-Line-portfolio"></div>
            <p className="portfolio-page-Quote-Para">Skills & Experiences </p>  
        </div>
        <div className="head-name-under-portfolio">
        <div className="head-name-under-portfolio1">
            
            <p className="portfolio-heads-hyperlinks"><span className="title-head" id="title-head-all" onClick={displayAll}>All</span><span>|</span></p>
            <p className="portfolio-heads-hyperlinks"><span className="title-head" id="title-head-projects" onClick={displayProjects}>Projects</span><span>|</span></p>
            <p className="portfolio-heads-hyperlinks"><span className="title-head" id="title-head-achievements" onClick={displayAchievements}>Achievements</span><span className="span-portfolio-achievements">|</span></p>
           </div>
        <div className="head-name-under-portfolio1">

            <p className="portfolio-heads-hyperlinks"><span className="title-head" id="title-head-workshops" onClick={displayWorkshops}>Workshops</span><span>|</span></p>
            <p className="portfolio-heads-hyperlinks"><span className="title-head" id="title-head-certification" onClick={displayCertification}>Certification</span></p>
        </div>
        </div>

        <Projects/>
        <Achievement/>
        <Workshop/>
        <Certificates/>
        
        <div className="show-more-less">
            <p className="show-more-para" id="show-more-para" onClick={showmore}>show more </p>
            <p className="show-less-para" id="show-less-para" onClick={showless}>show less </p>
        </div>

        <div className="pageEnd-horizontal-Line-portfolio"></div>
        </div>
        </>
    )
}

export default Portfolio;
