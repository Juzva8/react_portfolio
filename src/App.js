import React from 'react';
import './App.css';
import NavBar from '../src/components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio'
import Resume from './Pages/Resume/Resume';
import Contact from './Pages/contact/contact'



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Resume' component={Resume} />      
        <Route path='/contact' component={Contact} />
        <Route path='/portfolio' component={Portfolio} />
      </Switch>

      <Footer />
    </Router>
  );
}
export default App;