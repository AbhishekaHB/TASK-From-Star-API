import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cartlist from "./components/Cartlist";
import Details from "./components/Details";
import Display from "./components/Display";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navabar from "./components/Navabar";
import Notfoundpage from "./components/Notfoundpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navabar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="Display">
            <Display/>
          </Route>
          <Route path="/details:id">
            <Details/>
          </Route>
          <Route path="/Cartlist">
            <Cartlist/>
          </Route>
          <Route path="*">
            <Notfoundpage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
