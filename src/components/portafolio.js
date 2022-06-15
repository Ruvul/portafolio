import React from 'react';
import '../styles/portafolio.css';
import NavBar from './navbar';
import '../styles/navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import email from '../media/email.jpg';
import tel from '../media/tel.jpg';
import linkedin from '../media/linkedin.jpg';
import github from '../media/github.jpg';



function Portafolio() { 

  return (
    <div className="Portafolio">
      <div>
        <NavBar/>
      </div>
      <hr />
      <div class="container">
        <h1>Portafolio</h1>
        <div class="dot"></div>
        <hr/>
        <hr/>
        <h1 class="display-1">ALLAN JAIME MONTERO BEDOLLA</h1>
        <h1 class="display-6">SOFTWARE DEVELOPER</h1>
      </div>

      <div class="container">
          <div class="card text-white bg-dark mb-3">
              <div class="card-body">
                <div class="card-title"> About Me </div>
                <div class="card-text">
                I'm interested in learning and teaching. I'm in constant seek of challenging
                scenarios that allows me to put on practice all of me.
                Fan of the astronomy, PC gaming, anime, sci-fi entertainment and a very
                mixed taste of music.
                </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="card text-dark bg-white mb-3">
          <div class="card-header">Experience</div>
              <div class="card-body">
                <div class="card-title"> ARTIFICIAL INTELLIGENCE WITH PYTHON | WORKSHOP ORGANIZER </div>
                <div class="card-text">
                  2020 | AI GAMING LATINOAMERICA

                  <ul>
                    <li>I've organized a workshop for the develop of an AI program that classifies some lunar rocks</li>
                    <li>Organizer and speaker of the main event AI GAMING LATINOAMERICA 2020.</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="card text-white bg-primary mb-3">
          <div class="card-header">Technical Skills</div>
              <div class="card-body">
                <div class="card-title"> PROGRAMMING </div>
                <div class="card-text">
                  <ul>
                    <li>C</li>
                    <li>Java</li>
                    <li>JavaScript (ReactJS, NodeJS)</li>
                    <li>Python</li>
                    <li>PHP</li>
                  </ul>
                </div>
              

                <div class="card-title"> DEPLOYMENT </div>
                <div class="card-text">
                  <ul>
                    <li>Azure</li>
                    <li>Google Cloud</li>
                    <li>AWS</li>
                    <li>Heroku</li>
                    <li>Vercel</li>
                  </ul>
                </div>

                <div class="card-title"> DATABASES </div>
                <div class="card-text">
                  <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

              </div>
          </div>
      </div>

      <div class="container">
          <div class="card text-white bg-danger mb-3">
          <div class="card-header">Education</div>
              <div class="card-body">
                <h3>Computer Systems Engineering | National Polytechnic Institute (IPN)</h3>
                <div class="card-text">
                  <p>2019-CURRENT</p>
                </div>
              

                <h3>Microsoft Learn Student Ambassador | BETA MILESTONE</h3>
                <div class="card-text">
                  <p>2020-CURRENT</p>
                </div>

              </div>
          </div>
      </div>

      <div class="container">
          <div class="card text-white bg-dark mb-3">
          <div class="card-header">Soft Skills</div>
              <div class="card-body">
                <div class="card-text">
                  <ul>
                    <li>Leadership</li>
                    <li>Stress management</li>
                    <li>Communication</li>
                    <li>Autodidact</li>
                    <li>Openness to feedback</li>
                    <li>Adaptability</li>
                    <li>Critical thinking</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>

      <div class="container">
          <div class="card text-white bg-primary mb-3">
          <div class="card-header">Languages</div>
              <div class="card-body">
                <div class="card-text">
                  <ul>
                    <li>Spanish (Native)</li>
                    <li>English (Upper Intermediate)</li>
                    <li>Portuguese (Brasil - Intermediate)</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>

      <div class="container">

          <Carousel>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={email}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>allanmontero@hotmail.com</h3>
              <p>Contact me</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={linkedin}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>/in/allan-montero-10b7441a5</h3>
              <p>Contact me</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={github}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>/Ruvul</h3>
              <p>
                Contact me
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={tel}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>55 5555 5555</h3>
              <p>
                Contact me
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
      </div>

    </div>
  );
}


export default Portafolio;