import NavBar from './navbar';
import '../styles/navbar.css';
import '../styles/cv.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mountain from '../media/dark_mountain.jpg';
import cv from '../media/CV.jpg';


function CV() {
  return (
    <div className="cv">
      <div>
        <note className="c">
        <body>
            <img width="580" height="720" src={cv}/>
        </body>
        </note>

      </div>
    </div>
  );
}

export default CV;
