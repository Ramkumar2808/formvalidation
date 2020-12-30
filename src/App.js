import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";

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
