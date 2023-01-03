import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from "./LearningOptions/LearningOptions";
import LinkList from "./LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage("Hi, I'am the assistant of Mr. Charanjeet Singh Sidhu || How may I help you!!!", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "projectLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "CGI Apps",
            url: "http://localhost:3000/#main-container-Wrapper-About-Portfolio",
            id: 1,
          },
          {
            text: "Web Apps",
            url: "http://localhost:3000/#main-container-Wrapper-About-Portfolio",
            id: 2,
          },
          {
            text: "Android Application",
            url: "http://localhost:3000/#main-container-Wrapper-About-Portfolio",
            id: 3,
          },
          {
            text: "Python Project",
            url: "http://localhost:3000/#main-container-Wrapper-About-Portfolio",
            id: 4,
          },
        ],
      },
    },
  ],
};

export default config;