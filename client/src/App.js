import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Btns from "./pages/Btns";

const App = () => (
  <Router>
    <Route exact path="/" component={Btns} />
  </Router>
);

export default App;
