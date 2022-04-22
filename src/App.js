import './santidad.jpg';
import './styles/App.css';
import '@picocss/pico';
import NavBar from './components/navbar';
import Header from './components/header';
import './styles/navbar.css';
import {ReactComponent as Logo} from './logo.svg';
import logo from './logo.svg';

function App() {
  return (
    <div className="App" data-theme="dark">
      <div class="hero">
        <NavBar/>
        <Header/>
      </div>
    </div>
  );
}

export default App;
