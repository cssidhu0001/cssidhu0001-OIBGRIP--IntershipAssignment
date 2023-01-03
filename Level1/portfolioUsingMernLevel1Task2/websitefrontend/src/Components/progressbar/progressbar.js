import React from 'react'
import './progressbar.css'

const ProgressBar = () => {
  window.onload = () => {
    var checkbar = [true, true, true, true, true, true]
    var subjpercent = [78, 85, 80,90, 75, 80] 
    var NavbarArray = ['navHome','navAbout','navResume','navHobbies','navServices','navPortfolio','navFreelancing','navContact']
    var contentsArray = ["intro-Div-Wrapper", "main-container-Wrapper-About-Page", "main-container-Wrapper-Resume-Page", "main-container-Wrapper-Hobbies-Page", "main-container-Wrapper-Services-Page", "main-container-Wrapper-About-Portfolio", "main-container-Wrapper-ProjectContactUs-Page", "main-container-Wrapper-ContactUs-Page"]
    var browserareaValue = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
    
    if (document.getElementById("main-Box-of-Website")) {
      document.getElementById("main-Box-of-Website").addEventListener("scroll", () => {
        for (var bar = 0; bar <subjpercent.length; bar++) {
          var browserarea = document.getElementById("myProgress" + bar).getBoundingClientRect()
          if (checkbar[bar]) {
            if (Number(browserarea.bottom) < 725 && Number(browserarea.top) > 412) {
              progressbarWidth(subjpercent[bar], 0, bar)
              checkbar[bar] = false;
            }
          }
        }

        function clearNavBorder(nav){
          for(let i=0;i<NavbarArray.length;i++){
            document.getElementById(NavbarArray[i]).style.borderBottom="0px solid #e71d36";
            document.getElementById(NavbarArray[i]).style.borderRadius="0px solid #e71d36";
          }
          document.getElementById(NavbarArray[nav]).style.borderBottom="2px solid #e71d36";
          document.getElementById(NavbarArray[nav]).style.borderRadius="2px solid #e71d36";
        }

        for(let i=0;i<NavbarArray.length;i++){
          browserareaValue[i][0] = document.getElementById(contentsArray[i]).getBoundingClientRect().bottom
          browserareaValue[i][1] = document.getElementById(contentsArray[i]).getBoundingClientRect().top
        }

        if (browserareaValue[7][0]<790 && browserareaValue[7][1]<64){
          clearNavBorder(7)
        } else if (browserareaValue[6][0]<222 && browserareaValue[6][1]<69){
          clearNavBorder(6)
        } else if (browserareaValue[5][0]<193 && browserareaValue[5][1]<84){
          clearNavBorder(5)
        } else if (browserareaValue[4][0]<762 && browserareaValue[4][1]<102){
          clearNavBorder(4)
        } else if (browserareaValue[3][0]<415 && browserareaValue[3][1]<121){
          clearNavBorder(3)
        } else if (browserareaValue[2][0]<1070 && browserareaValue[2][1]<110){
          clearNavBorder(2)
        } else if (browserareaValue[1][0]<730 && browserareaValue[1][1]<87){
          clearNavBorder(1)
        } else{
          clearNavBorder(0)
        }
        if (window.innerWidth < 901){
          document.getElementById("navbar-responsive-Container").style.display="none"
          document.getElementById("close-menu-icon").style.display="none"
          document.getElementById("menu-icon").style.display="flex"
          document.getElementById("website-responsive-head").style.paddingBottom="1rem"
        }
        if (document.getElementById("messagebox").style.display==="flex"){
          document.getElementById("helpbtn").style.display="flex";
          document.getElementById("messagebox").style.display="none";
        }
      })
    }
  }

  function progressbarWidth(progressvalue, i, bar) {
    if (i === 0) {
      i = 1;
      var elem = document.getElementById("myBar" + bar);
      var perecentageshowingspan = document.getElementById("mybarspan" + bar);
      var width = 1;
      var id = setInterval(frame, 7);
      function frame() {
        if (width >= progressvalue) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          perecentageshowingspan.innerHTML = width * 1 + "%";
        }
      }
    }
  }

  return (
    <div id="main-Box-of-Website">
      

      <div id="progressBar">
      
      <div className="progressbar-assembled-Div-main-Child-Wrapper">
     
      <div className="progressbardata">
        <p className="progressbar-para-head">Python 3</p>
        <div id="myProgress0" >
          <div id="myBar0"><span id="mybarspan0">0%</span></div></div></div>
        
        <div className="progressbardata">
        <p className="progressbar-para-head">Git</p>
        <div id="myProgress1" >
          <div id="myBar1"><span id="mybarspan1">0%</span></div></div></div>
          </div>


        <div className="progressbar-assembled-Div-main-Child-Wrapper">

        <div className="progressbardata">
        <p className="progressbar-para-head">Javascript</p>
        <div id="myProgress2" >
          <div id="myBar2"><span id="mybarspan2">0%</span></div>
        </div></div>

        <div className="progressbardata">
        <p className="progressbar-para-head">HTML/CSS</p>
        <div id="myProgress3" >
          <div id="myBar3"><span id="mybarspan3">0%</span></div>
        </div></div> </div>
        

        <div className="progressbar-assembled-Div-main-Child-Wrapper">
        <div className="progressbardata">
        <p className="progressbar-para-head">SQL</p>
        <div id="myProgress4" >
          <div id="myBar4"><span id="mybarspan4">0%</span></div>
        </div> </div>
        
        <div className="progressbardata">
        <p className="progressbar-para-head">C/C++</p>
        <div id="myProgress5" >
          <div id="myBar5"><span id="mybarspan5">0%</span></div>
        </div>
        </div>
        </div>

        </div>

      </div>



    
  )
}

export default ProgressBar;
