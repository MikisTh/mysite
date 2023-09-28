import React, { Pages } from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import home from './pages/home'
import experience from './pages/experience'
import formation from './pages/formation'
import skills from './pages/skills'
import about from './pages/about'
import contacts from './pages/contacts'


class index extends Pages {
    render() {
      return (
        <div id="colorlib-page">
          <div id="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
              <Home></Home>
              <About></About>
              <Formation></Formation>
              <Experience></Experience>
              <Skills></Skills>
              <Contacts></Contacts>
          
                </div>
            </div>
        </div>
      );
    }
  }

  <Route path="/">
  <div className="container">
    <h1 style={{textAlign: 'center'}}>Hello, React!</h1>

    <Footer/>
  </div>
</Route>

  export default index;
