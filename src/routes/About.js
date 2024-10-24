import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/Aboutcontent';

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="About Us" text="Im a Mern Stack Developer"/>
      <Aboutcontent />
      <Footer />

    </div>
  )
}

export default About