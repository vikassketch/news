import React from 'react';
import Section1 from './Section1'
import Navbar from './Navbar';

import NewsLetter from './NewsLetter';
import Boxes from './Boxes';
import Section2 from './Section2';
import Instructors from './Instructors';
import Accordion from './Accordion';
import Footer from './Footer';
import Contacts from './Contacts';
import Modal from './Modal';

const Page1 = () => {
  return (
    <>
    <Navbar/> 
  <Section1/>
  <Modal/>
  <NewsLetter/>
  <Boxes/>
  <Section2/>
  <Accordion/>
  <Instructors/>
  <Contacts/>
  <Footer/> 
      
    </>
  );
}

export default Page1;
