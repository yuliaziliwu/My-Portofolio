import * as React from 'react';
import Navbar from './components/Navbar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Organization from './components/sections/Organization';
import Skill from './components/sections/Skill';
import Project from './components/sections/Project';
import Footer from './components/Footer';

export default function BasicButtons() {
  return (
    <div>
      <Navbar />
       <div style={{ paddingTop: 20 }} />
      <Home />
      <About />
      <Education />
      <Experience />
      <Organization />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}