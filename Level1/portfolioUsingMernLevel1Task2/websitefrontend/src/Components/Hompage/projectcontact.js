import React, { useState, useMemo} from 'react';
import './projectcontact.css';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Control from 'react-select/dist/declarations/src/components/Control';


function Projectcontact() {
    const [countryvalue, countrysetValue] = useState('')
    // const [clicked,setClicked]=useState(false)
    const [projecttypevalue, projecttypesetValue] = useState('')

    const showprojectfillform=()=>{
        document.getElementById("project-contactUS-main-container-Wrapper").style.display="flex";
        document.getElementById("minus-sign").style.display="block";
        document.getElementById("plus-sign").style.display="none";
        document.getElementById("leaveusMessage-div-Wrapper").style.borderRadius=".4rem .4rem 0rem 0rem";
        document.getElementById("leaveusMessage-div-Wrapper").style.boxShadow="none";
    }   

    const hideprojectfillform=()=>{
        document.getElementById("project-contactUS-main-container-Wrapper").style.display="none";
        document.getElementById("minus-sign").style.display="none";
        document.getElementById("plus-sign").style.display="block"; 
        document.getElementById("leaveusMessage-div-Wrapper").style.borderRadius=".4rem .4rem .4rem .4rem";
    }
    
    const colourStyles = {

        control:(base, state)=>({
            ...base,
            background: "#4f5663",
            // match with the menu
            borderRadius:5,
            Outline:null,
            // Overwrittes the different states of border
            borderColor: state.isFocused?" #494949 ":"#4f5663" ,
            // Removes weird border around container
            boxShadow: state.isFocused ?  "1px 1px 10px #AFAFAF "  : null,
            "&:hover": {
              // Overwrittes the different states of border
              borderColor: state.isFocused ? "#494949" : null,
              
            }
        }),
        option: (styles, {  isSelected }) => {
            return{
                ...styles,
                backgroundColor: isSelected ? '#e71d36' : 'white',
                ':hover': {
                    ...styles[':hover'],
                    backgroundColor: isSelected ? '#ec4155' : '#ff556a'
                },
            }
        }    
    }

    const options = useMemo(() => countryList().getData(), [])
    const projecttypeoption = [
        { label:"Web Development", value:"Web-Development"},
        { label:"Software Development", value:"Software-Development"},
        { label:"Anroid Development", value:"Anroid-Development"},
        { label:"IOS Development", value:"IOS-Development"},
        { label:"Other", value:"Other"}
    ]

    const [projectqueue, fill_details] = useState({
        firstname:"",
        lastname:"",
        contactno:"",
        email:"",
        country:"",
        briefinfo:"",
        altcontactno:"",
        projecttype:"",
        projectinfo:"",
        note:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        fill_details({
            ...projectqueue,
            [name]: value
        })
    }

    const countrychangeHandler = countryvalue => {
        countrysetValue(countryvalue)
        fill_details({
            ...projectqueue,
            'country': countryvalue['label'],
        })
    }

    const projecttypechangeHandler = projecttypevalue => {
        projecttypesetValue(projecttypevalue)
        fill_details({
            ...projectqueue,
            'projecttype': projecttypevalue['label']
        })
    }

    const submitform=()=>{    
        const { firstname, lastname, contactno, email, briefinfo, country} = projectqueue
        // projecttype, note, projectinfo, altcontactno
        if (projectqueue){
            if(firstname && lastname && contactno && email && briefinfo && country ) {
                axios.post("http://localhost:4000/projectqueue",projectqueue).then(res=>{
                    toast.info(res.data.alertmsg,{
                        position:"top-center"
                    })
                    
                    document.getElementById('project-fname').value='';              projectqueue.firstname='';  
                    document.getElementById('project-lname').value='';              projectqueue.lastname='';  
                    document.getElementById('project-contact').value='';            projectqueue.contactno='';  
                    document.getElementById('project-altcontact').value='';         projectqueue.altcontactno='';  
                    document.getElementById('project-email').value='';              projectqueue.email='';  
                    document.getElementById('project-brief-info').value='';         projectqueue.briefinfo='';
                    document.getElementById('project-note').value='';               projectqueue.note='';          
                    document.getElementById('project-New').checked=false;           projectqueue.projectinfo='';  
                    document.getElementById('project-On-Going').checked=false;
                    document.getElementById('project-Other').checked=false;

                    document.getElementById('project-country').value='';            projectqueue.country='';  
                    document.getElementById('project-type-of-project').value='';    projectqueue.projecttype='';
                    // countryvalue=""

                })
            } else {
                toast.warn("Please provide all the mentioned entries to contact us.",{
                    position:"top-center"
                })
            }   
        }
    }


    return (
        <>
     <div  className="main-container-Wrapper-ProjectContactUs-Page" id="main-container-Wrapper-ProjectContactUs-Page">
            <p className="ProjectContactUs-page-heading-Para">Have a Project? </p>
            <div className="horizontal-Line-ProjectContactUs"></div>
            <p className="ProjectContactUs-page-Quote-Para">Available for Freelance </p> 
            <div className="pageTop-horizontal-Line-ProjectContactUs"></div>
            </div>
    <div className="leaveusMessage-div-Wrapper" id="leaveusMessage-div-Wrapper" >
    <div className="leave-Message-parent-wrapper">
        <p className="get-in-touch-para">
            Get in Touch we me..&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p className="icon-para-plus-icon">  
            <i id="plus-sign" className="fa fa-plus" onClick={showprojectfillform}/> 
            <i id="minus-sign" className="fa fa-minus" onClick={hideprojectfillform}/> 
        </p>
    </div>
    </div>  

<div className="project-contactUS-main-container-Wrapper" id="project-contactUS-main-container-Wrapper">
<div className="project-contactUS-main-container-Wrapper-Parent">

                <p className="project-contactUS-formParaHead"> Reach Us for Project!!</p>
            <div className="project-contactUS-formdivmaincontainer">

                <div className="project-contactUS-formdiv">
                <div className="mainproject-contactUS-form">
                {/* <form> */}
                    <div className="fromnamediv">
                    <div>
                     
                    <input type='text' className='project-input' id='project-fname' name="firstname"
                     value={projectqueue.firstname} onChange={handleChange} 
                     placeholder='First Name*' required />
                    </div>
                    <div>
            
                    <input type='text' className='project-input' id='project-lname' name="lastname" 
                    value={projectqueue.lastname} onChange={handleChange} 
                    placeholder='Last Name*' required />
                    </div>
                    </div>

                    <div className="fromcontactdiv">
                    <div>
                   
                    <input type='text' className='project-input' id='project-contact' name="contactno" 
                    value={projectqueue.contactno} onChange={handleChange}
                     placeholder='Contact Number*' required />
</div>
<div>
                    <input type='text' className='project-input' id='project-altcontact' name="altcontactno" 
                    value={projectqueue.altcontactno} onChange={handleChange}
                     placeholder='Alternate Number' />
                    </div>
                    <div>

                    <input type='text' className='project-input' id='project-email' name="email"
                     value={projectqueue.email} onChange={handleChange} 
                     placeholder='Email Address*' required />
                    </div>
                    </div>


                    <div className="country-dropdown">

                        <label htmlFor='project-country'  className="project-contact-us-label">Where Are You From*</label><br />
                        <Select options={options} id='project-country' className='project-input-dropdown'   styles={colourStyles} value={countryvalue} onChange={countrychangeHandler}   />

                    </div>

                        <label htmlFor='project-New' className='project-contact-us-label'>Project Info</label>
                    <div className="project-information">

                        <input type="radio"  id="project-New" name="projectinfo" value="New" onChange={handleChange} />
                        <label htmlFor="project-New"  className="project-info-radio">New </label>

                        <input type="radio" id="project-On-Going" name="projectinfo" value="On-Going" onChange={handleChange} />
                        <label htmlFor="project-On-Going" className="project-info-radio">On Going</label>
                        
                        <input type="radio"   id="project-Other" name="projectinfo" value="Other" onChange={handleChange} />
                        <label htmlFor="project-Other" className="project-info-radio">Other</label>

                    </div>

                    <label htmlFor="project-type-of-project" className="project-contact-us-label">Project Type</label>
                    <Select id="project-type-of-project" className='project-input-dropdown' styles={colourStyles} options={projecttypeoption} value={projecttypevalue} onChange={projecttypechangeHandler} />
        
                    <div className="message-div">
            
                    <textarea rows="5" cols="69" className='brief-intro-about-project' name="briefinfo" id='project-brief-info'
                     value={projectqueue.briefinfo} onChange={handleChange}  
                     placeholder='Brief Info about your Project*'
                    required />
                    </div>
                    
                    <textarea rows="5" cols="69" className='brief-intro-about-project-message' name="note" id='project-note'
                     value={projectqueue.note} onChange={handleChange}  
                     placeholder='Project Note' />

                    <div className="button-div-project-form">
                        <button  className="submit-buttton-project" onClick={submitform}  value="submit">Submit</button>
                    </div>
                    
                    </div>
                    </div>
                    </div>
                    
                      
                {/* </form> */}

                </div>
                </div>
                <div className="pageEnd-horizontal-Line-ProjectContactUs"></div>
          </>      
            
    )


}

export default Projectcontact;