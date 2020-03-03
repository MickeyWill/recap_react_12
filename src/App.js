import React from 'react';

import {  
	BrowserRouter as Router,  
	Switch,  
	Route,  
	Link  
} from 'react-router-dom';

import PageUn from "./components/PageUn";
import PageDeux from "./components/PageDeux";
import PageTrois from "./components/PageTrois";
import PageQuatre from "./components/PageQuatre";
import PageCinq from "./components/PageCinq";
import PageSix from "./components/PageSix";
import PageSept from "./components/PageSept";

const App = () => {

  return(
    <Router>
      <h1 className="text-center text-white my-5 bg-info">React Recap</h1>
      <div className="container text-center">
        <Link to="/" className="h2 text-danger mx-3">Home</Link>
        <Link to="/PageDeux" className="h3 text-success mx-3">Exo 2</Link>
        <Link to="/PageTrois" className="h3 text-warning mx-3">Exo 3</Link>
        <Link to="/PageQuatre" className="h3 mx-3">Exo 4</Link>
        <Link to="/PageCinq" className="h3 text-dark mx-3">Exo 5</Link>
        <Link to="/PageSix" className="h3 text-secondary mx-3">Exo 6</Link>
        <Link to="/PageSept" className="h3 text-info mx-3">Exo 7</Link>
      </div>
        <hr className="bg-warning"/>

      <Switch>
    
        <Route exact path="/"><PageUn /></Route>
        <Route path="/PageDeux"><PageDeux /></Route>
        <Route path="/PageTrois"><PageTrois /></Route>
        <Route path="/PageQuatre"><PageQuatre /></Route>
        <Route path="/PageCinq"><PageCinq /></Route>
        <Route path="/PageSix"><PageSix /></Route>
        <Route path="/PageSept"><PageSept /></Route>

      </Switch>

    </Router>
  )
}

export default App;