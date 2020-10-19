import React from 'react';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  // console.log(props);
  return (
    <div>
      <Nav />
      {/* <p>I am the page content 📚</p> */}
      {/* {props.children} */}
      {children}
      <Footer />
    </div>
  );
}
