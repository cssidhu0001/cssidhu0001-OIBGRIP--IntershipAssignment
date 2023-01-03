import React, {useState} from 'react';
import './contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {

    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        contactno:"",
        email:"",
        message:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const submitform=()=>{        
        const {firstname,lastname,contactno,email,message}=user
        if (user){
            if(firstname && lastname && contactno && email && message ) {
                axios.post("http://localhost:4000/contactus",user).then(res=>{
                    toast.info(res.data.alertmsg,{
                        position:"top-center"
                    })
                    document.getElementById('fname').value='';     user.firstname=''
                    document.getElementById('lname').value='';     user.lastname=''
                    document.getElementById('contact').value='';   user.contactno=''
                    document.getElementById('email').value='';     user.email=''
                    document.getElementById('message').value='';   user.message=''
                    // window.location.reload()
                })
            } else {
                toast.warn("Please provide all the mentioned entries to contact me.",{
                    position:"top-center"
                })
            }   
        }
    }
   
    return (
        <div  className="main-container-Wrapper-ContactUs-Page" id="main-container-Wrapper-ContactUs-Page">
            <p className="ContactUs-page-heading-Para">Contact </p>
            <div className="horizontal-Line-ContactUs"></div>
            <p className="ContactUs-page-Quote-Para">Reach us </p> 
            <div className="pageTop-horizontal-Line-ContactUs"></div>
<div className="address-main-container-Wrapper-form-Location">
            <div className="contactusformdivmaincontainer">
                <p className="contactformParaHead"> leave us a message</p>
                <div className="contactusformdiv">
                <div className="maincontactform">
                {/* <form> */}
                    <div className="fromnamediv">
                    <div>
                     
                    <input type='text' className='contactinput' id='fname' name="firstname" value={user.firstname} onChange={handleChange}placeholder='First Name*' required />
                    </div>
                    <div>
            
                    <input type='text' className='contactinput' id='lname' name="lastname" value={user.lastname} onChange={handleChange} placeholder='Last Name*' required />
                    </div>
                    </div>

                    <div className="fromcontactdiv">
                    <div>
                   
                    <input type='text' className='contactinput' id='contact' name="contactno" value={user.contactno} onChange={handleChange} placeholder='Contact Number*' required />
                    </div>
                    <div>

                    <input type='text' className='contactinput' id='email' name="email" value={user.email} onChange={handleChange} placeholder='Email Address*' required />
                    </div>
                    </div>

                    <div className="message-div">
            
                    <textarea rows="5" cols="69" className='contactmessagetextarea' name="message" id='message' value={user.message} onChange={handleChange}  placeholder='Message*'
                    required />
                    </div>
                    
                    <div className='btndiv'>
                        <button className='submitbtn' onClick={submitform} value="submit">Reach Us</button>
                    </div>
                      
                {/* </form> */}
                </div>
                </div>
            </div>

            <div className="contactus-address-div">
                <div className="contactus-address-div-parent-wrapper">
                <p className="adress-para-head">Reach us</p>
                <p className="adress-description">Feel free to contact me at any time.</p>
                <p className="address-contactus-para"><i className="fas fa-map-marker-alt"  /> Address:  <span>Sidhu Farm House, Hathikhal,Goraparow,Haldwani,Uttarkhand, 263139</span></p>
                <button className="locate-me-button"  ><a href="https://www.google.com/maps/place/SIDHU+FARM+HOUSE/@29.1877445,79.5240899,13.47z/data=!4m11!1m5!8m4!1e3!2s103541417284020850484!3m1!1e1!3m4!1s0x0:0x97d713ac15ae8460!8m2!3d29.1590615!4d79.5296287" target='_blank' rel="noreferrer"> <i className="fas fa-map-marked-alt"/>Click to Locate</a></button>
                <p className="phoneno-address-para"><a href="tel:+918954208211"><i className="fas fa-mobile-alt"/>+918954208211 </a></p>
                <p className="Email-address-para"><a href="mailto:sidhucharan53@gmail.com "><i className="fas fa-envelope"/>sidhucharan53@gmail.com </a></p>
                </div>
            </div>
           
            </div>
            
            <div className="pageEnd-horizontal-Line-ContactUs"></div>
            <ToastContainer />
        </div>
    )
}

export default ContactUs;