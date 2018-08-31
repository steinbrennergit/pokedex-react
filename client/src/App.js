import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OneButton from "./pages/OneButton";

const App = () => (
  <Router>
    <Route exact path="/" component={OneButton} />
  </Router>
);

export default App;
