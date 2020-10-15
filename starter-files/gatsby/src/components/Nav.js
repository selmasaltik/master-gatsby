import React from 'react';
// import { Link, navigate } from 'gatsby';
import { Link } from 'gatsby';

// function goToSlicemasters() {
//   // 1. Wait for 2 seconds
//   setTimeout(() => {
//     console.log('Go to slicers! 🚀');
//     navigate('/slicemasters', { replace: true });
//   }, 2000);
//   // 2. Change the page
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li> */}
        {/* <li>
          <button type="button" onClick={goToSlicemasters}>Click me to see Slicemasters after 2 seconds ⏳</button>
        </li> */}
          <li>
          <Link to="/beers">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
}