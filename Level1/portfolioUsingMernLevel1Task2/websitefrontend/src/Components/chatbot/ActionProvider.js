class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hlo Friend... How may I help You");
    this.updateChatbotState(greetingMessage);
  }

  handleProjectList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, I've done some following project:",
      {
        widget: "projectLinks",
      }
    );

    this.updateChatbotState(message);
  };
  
  handleContact = () => {
    const message = this.createChatBotMessage("For that please check out the contact section");
    this.updateChatbotState(message);
  };
  handleResume = () => {
    const message = this.createChatBotMessage("For that please check out the resume section");
    this.updateChatbotState(message);
  };
  handleServices = () => {
    const message = this.createChatBotMessage("For that please check out the services section");
    this.updateChatbotState(message);
  }; 
  handleFreelancing = () => {
    const message = this.createChatBotMessage("For that please check out the freelancing section");
    this.updateChatbotState(message);
  };


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;