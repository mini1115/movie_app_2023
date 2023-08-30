// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import { HashRouter,Router,Route, Routes } from 'react-router-dom';
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from './components/Navigation';

function App(){
  return(
    <HashRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path = "/" exact={true} Component={Home} />
          <Route path = "/about" Component={About} />
        </Routes>
    </HashRouter>
  );
}

export default App;
