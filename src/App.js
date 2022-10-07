import './App.css';
import './index.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content-container'>
        <div className='hero'>
          <Hero />
          <Experiences />
        </div>
      </div>
    </div>
  );
}

export default App;
