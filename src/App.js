import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home.js'; 
import About from './components/about.js'; 
import Works from './components/works';
import Form from './components/feedback';
// import TryMoi from './components/tryMoi';
// import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
          <div> 
          <Switch> 
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/works" component={Works} />
               <Route path="/feedback" component={Form}/>
               {/* <Route path="/tryMoi" component={TryMoi} /> */}
           </Switch> 
         
         </div> 
         
      </BrowserRouter>
      
    );
  }
}

export default App;
