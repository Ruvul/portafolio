import React from 'react';
import '../styles/header.css'
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
              <div class="container">
                <div class="heading">
                    <h1 class="display-1">ALLAN MONTERO</h1>
                    <h2>Welcome to my website!</h2>
                    <Button variant="dark" href="/portafolio">
                        Portafolio
                    </Button>
                </div>
                
              </div>
      </div>
    );
  }


  export default Header;