import React from 'react';
import '@picocss/pico';
import '../styles/navbar.css'
import logo from '../media/logo_am_blanco.png';

function NavBar() {
    return (
      <div>
          <main class="container-fluid">
            <nav>
                <ul>
                    <li><a href="#"><img src={logo} alt="logo" width="100" height="auto"/></a></li>

                    <li>
                      <details role="list" dir="rtl">
                        <summary aria-haspopup="listbox" role="link">Projects</summary>
                        <ul role="listbox">
                          <li><a href="#">This page</a></li>
                        </ul>
                      </details>
                    </li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="about.html">About</a></li>
                </ul>
            </nav>
          </main>
      </div>
    );
  }


  export default NavBar;