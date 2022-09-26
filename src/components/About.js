import React from 'react';
import Navbar2 from './Navbar2';
import Section3 from './Section3';
import Categories from './Categories';

const About = ({about,categories}) => {
  return (
    <>
  <Navbar2/>
  <Section3  about={about}/>
  <Categories categories={categories}/>
  </>
  );
}

export default About;
