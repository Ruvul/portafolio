import React from 'react';
import '@picocss/pico';
import '../styles/header.css'

function Header() {
    return (
      <div class="header">
          <header class="container">
              <div id="content">
                    <div class="dot"></div>
                    <hgroup>
                        <h1>ALLAN MONTERO</h1>
                        <h2>Welcome to my website!</h2>
                    </hgroup>
                    <p><a href="#" role="button" onclick="event.preventDefault()">Call to action</a></p>
              </div>
          </header>
      </div>
    );
  }


  export default Header;