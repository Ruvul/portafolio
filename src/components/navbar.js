import React from 'react';
import '../styles/navbar.css';

function NavBar() {
  return (
    <div id="nav">
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="news.html">News</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="about.html">About</a></li>
          </ul>
    </div>
  );
}


export default NavBar;