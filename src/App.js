import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Products from "./Components/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
