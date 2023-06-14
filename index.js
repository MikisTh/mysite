import React, { Pages } from 'react';
import './index.css';
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
  
  export default index;