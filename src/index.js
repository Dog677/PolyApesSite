import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import MintPage from "./MintPage";


function Site() {
  return (
    
    <div className="Site">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={() => <App />} />
          <Route path="/mint" exact component={() => <MintPage />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById('root')
);