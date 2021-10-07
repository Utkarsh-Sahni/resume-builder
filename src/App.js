import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './components/form.css';
import Navbar from './components/Navbar.js';
import PersonalDetails from './components/PersonalDetails.js';
import EducationalDetails from './components/EducationalDetails.js'
import ProjectDetails from './components/ProjectDetails.js'
import ExperienceDetails from './components/ExperienceDetails.js'
import ExtraDetails from './components/ExtraDetails.js'


function App() {

  const [mode, setMode] = useState('light')

  const toggleMode= () => {
    if(mode=== 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#002141'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'

    }
    

  }

  return  (
      <Router>
        <React.StrictMode>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <Switch>
          <Route exact path="/personaldetails">
          <PersonalDetails mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/educationaldetails">
          <EducationalDetails mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/projectdetails">
          <ProjectDetails mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/experiencedetails">
          <ExperienceDetails mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/extradetails">
          <ExtraDetails mode={mode} toggleMode={toggleMode}/>
          </Route>
        </Switch>
        </React.StrictMode>
      </Router>
  );
}

export default App  ;

