import logo from './media/logo.svg';
import './styles/App.css';
import Header from './components/header.js';
import NavBar from './components/navbar.js';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
    </div>
  );
}

export default App;
