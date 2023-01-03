import React from 'react'
import './navbar.css';

function Navbar() {
    
    const displaymenu=()=>{
        if (document.getElementById("navbar-responsive-Container").style.display === "block"){
            document.getElementById("navbar-responsive-Container").style.display="none"
            document.getElementById("close-menu-icon").style.display="none"
            document.getElementById("menu-icon").style.display="flex"
            document.getElementById("website-responsive-head").style.paddingBottom="1rem"
        } else {
            document.getElementById("navbar-responsive-Container").style.display="block"
            document.getElementById("close-menu-icon").style.display="flex"
            document.getElementById("menu-icon").style.display="none"
            document.getElementById("website-responsive-head").style.paddingBottom="0rem"
        }
    }

    return ( 
        <>
    <div className="blank-box-left-side-Homepage"> 
    .  </div>
        <div className="navbar-maincontainer-Wrapper">
<div className="vertical-line-left"></div>
        <div className="website-head">
        <a href="/"  ><p className="website-head-link-para">charanjeet<br/> singh</p> <span>sidhu</span></a>
        <div className="horizontal-line-below-head"></div> 
        
        </div>

        <div className="navbar-parent-Container" id="navbar-parent-Container">
            <ul>
                <li> <a id='navHome' href="#intro-Div-Wrapper" className="navHtml" >Home</a></li>
                <li> <a id='navAbout' href="#main-container-Wrapper-About-Page" className="navHtml" >About</a></li>
                <li> <a id='navResume' href="#main-container-Wrapper-Resume-Page" className="navHtml" >Resume</a></li>
                <li> <a id='navHobbies' href="#main-container-Wrapper-Hobbies-Page" className="navHtml" >Hobbies</a></li>
                <li> <a id='navServices' href="#main-container-Wrapper-Services-Page" className="navHtml" >Services</a></li>
                <li> <a id='navPortfolio' href="#main-container-Wrapper-About-Portfolio" className="navHtml" >Portfolio</a></li>
                <li> <a id='navFreelancing' href="#main-container-Wrapper-ProjectContactUs-Page" className="navHtml" >Freelancing</a></li>
                <li> <a id='navContact' href="#main-container-Wrapper-ContactUs-Page" className="navHtml" >Contact</a></li>
            </ul>
            
        </div>
        <div className="navbar-footer" id="navbar-footer">
        <ul className="followup-Links-UL-Navbar">
                    <li><a href="https://www.facebook.com/cssidhu13" target='_blank' rel="noreferrer" className="follow-Hyperlink-Navbar"><i className="fab fa-facebook-square"/></a></li>
                    <li><a href="https://wa.me/918433024414" target='_blank' rel="noreferrer" className="follow-Hyperlink1-Navbar"><i className="fab fa-whatsapp-square"/></a></li>
                    <li><a href="https://www.instagram.com/13_cssidhu/" target='_blank' rel="noreferrer" className="follow-Hyperlink2-Navbar"><i className="fab fa-instagram-square"/></a></li>
                    <li><a href="https://github.com/cssidhu0001" target='_blank' rel="noreferrer" className=" follow-Hyperlink2-Navbar follow-Hyperlink3-Navbar"><i className="fab fa-github-square"/></a></li>
                    </ul>
        </div>
        </div>

        
        {/* responsive web nav-bar content */}
        <div className="website-responsive-head" id="website-responsive-head">
<div className="responsive-navbar-wrapper-data">
            <div className="menu-icon" id="menu-icon" onClick={displaymenu}>
            <i className="fas fa-bars"></i> 
            </div>
            <div className="close-menu-icon" id="close-menu-icon" onClick={displaymenu}>
            <i className="fas fa-times"></i> 
            </div>

            <a href="/"  ><span className="website-responsive-head-link-para">Deepak <span> Kumar</span></span></a>
            </div>
            <div className="navbar-responsive-Container" id="navbar-responsive-Container">
                <ul>
                    <li> <a id='navHome' href="#intro-Div-Wrapper" className="navHtml" >Home</a></li>
                    <li> <a id='navAbout' href="#main-container-Wrapper-About-Page" className="navHtml" >About</a></li>
                    <li> <a id='navResume' href="#main-container-Wrapper-Resume-Page" className="navHtml" >Resume</a></li>
                    <li> <a id='navHobbies' href="#main-container-Wrapper-Hobbies-Page" className="navHtml" >Hobbies</a></li>
                    <li> <a id='navServices' href="#main-container-Wrapper-Services-Page" className="navHtml" >Services</a></li>
                    <li> <a id='navPortfolio' href="#main-container-Wrapper-About-Portfolio" className="navHtml" >Portfolio</a></li>
                    <li> <a id='navFreelancing' href="#main-container-Wrapper-ProjectContactUs-Page" className="navHtml" >Freelancing</a></li>
                    <li> <a id='navContact' href="#main-container-Wrapper-ContactUs-Page" className="navHtml" >Contact</a></li>
                </ul>
            </div>
        

        
        </div>
        
        </>
    )
}

export default Navbar;


