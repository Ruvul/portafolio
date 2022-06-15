import './styles/App.css';
import NavBar from './components/navbar';
import Header from './components/header';
import CV from './components/cv';
import './styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Header/>
        <CV />
      </div>
    </div>
  );
}

export default App;
