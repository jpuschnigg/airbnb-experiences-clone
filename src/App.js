import './index.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';

function App() {
  return (
    <div>
      <NavBar />
      <div className='content-container'>
        <div className='hero'>
          <Hero />
          <div className='exp-container'>
            <Experiences
              exp={require("./images/swimmer.png")}
              availability={require("./images/sold_out.png")}
              caption={require("./images/swimmer-cap.png")}
            />
            <Experiences
              exp={require("./images/wedding.png")}
              availability={require("./images/online.png")}
              caption={require("./images/wedding-cap.png")}
            />
            <Experiences
              exp={require("./images/mountain-bike.png")}
              availability={require("./images/sold_out.png")}
              caption={require("./images/bike-cap.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
