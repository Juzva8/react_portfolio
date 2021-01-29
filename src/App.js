import React from 'react';
import './App.css';
import NavBar from '../src/components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/post/:postId' component={PostPage} />
        <Route path='/our-story' component={OurStory} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={SignIn} /> */}
      </Switch>

      <Footer />
    </Router>
  );
}
export default App;