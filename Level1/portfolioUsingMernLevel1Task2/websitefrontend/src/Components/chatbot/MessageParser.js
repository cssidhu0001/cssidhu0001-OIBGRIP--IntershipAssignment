class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet();
      }
  
      if (lowerCaseMessage.includes("project")) {
        this.actionProvider.handleProjectList();
      }
      if (lowerCaseMessage.includes("contact")) {
        this.actionProvider.handleContact();
      }
      if (lowerCaseMessage.includes("resume")) {
        this.actionProvider.handleResume();      
      }
      if (lowerCaseMessage.includes("services")) {
        this.actionProvider.handleServices();      
      }
      if (lowerCaseMessage.includes("freelancing")) {
        this.actionProvider.handleFreelancing();      
      }
    }
  }
  
  export default MessageParser