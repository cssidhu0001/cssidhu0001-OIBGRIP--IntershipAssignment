import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Components/Hompage/homepage';
import Projects from './Components/portfolio/projects';

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route  exact path="/"><Homepage/></Route>
        <Route exact path="/projects">   <Projects/></Route>
      </Switch>
    </Router>
    </>
  );
}
export default App;
