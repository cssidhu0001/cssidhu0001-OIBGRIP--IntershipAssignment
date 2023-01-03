import React from "react";
import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Project",
      handler: props.actionProvider.handleProjectList,
      id: 1,
    },
    { text: "Contact", 
      handler: props.actionProvider.handleContact, 
      id: 2 
    },
    { text: "Resume", 
      handler: props.actionProvider.handleResume, 
      id: 3 
    },
    { text: "Services", 
      handler: props.actionProvider.handleServices, 
      id: 4 
    },
    { text: "Freelancing", 
      handler: props.actionProvider.handleFreelancing, 
      id: 5 
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
