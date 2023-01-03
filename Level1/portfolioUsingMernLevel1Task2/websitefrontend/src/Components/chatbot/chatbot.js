import React from 'react'
import Chatbot from 'react-chatbot-kit'
import './chatbot.css'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import botImage from '../../Images/icon/iconimage.png'

function Chatbotbtn() {

    const displaymessagebox=()=>{
        document.getElementById("helpbtn").style.display="none";
        document.getElementById("messagebox").style.display="flex";
        document.getElementById("messagebox").style.flexDirection="column";
    }

    const notdisplaymessagebox=()=>{
        document.getElementById("helpbtn").style.display="flex";
        document.getElementById("messagebox").style.display="none";
    }

    return (
        <>
        <button aria-label="Help" className="helpbutton wrapper-AtBcr u-userLauncherColor" id="helpbtn" onClick={displaymessagebox}>
        <div className="chatbox-wrapper-button">
        <div>
            <img className="botImage" src={botImage} alt="" />
        </div>
        <span className="u-inlineBlock">&nbsp;Mr. Assistant</span></div>
        </button>
        <div id="messagebox" className="helpcontainer">
            <div className="helpcontainerheading">
                <span className="helptitle">Mr. Charanjeet Assistant</span>
                <div className="helpminimisebar" onClick={notdisplaymessagebox}>
                    <svg width="16" height="16" viewBox="0 0 16 16" data-garden-id="buttons.icon" data-garden-version="8.13.0" 
                        theme="[object Object]" className="sc-bwzfXH hDrfMZ">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M3 8h10">
                    </path></svg>
                </div>
            </div>
            <div className="helpcontainercontains">
                <div className="App">
                    <header className="App-header">
                    <Chatbot config={config} actionProvider={ActionProvider} 
                        messageParser={MessageParser} />
                    </header>
        </div>
                </div>
            </div>
        </>
    )
}

export default Chatbotbtn;
