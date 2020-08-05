import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter,Route } from "react-router-dom";
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/resume' component={Resume} />
      </BrowserRouter>
    </div>
  );
}

export default App;
