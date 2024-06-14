
import './App.css';

function App() {
    const planets = [
      { name: 'Mars', isGasPlanet: false },
      { name: 'Earth', isGasPlanet: false},
      { name: 'Jupiter', isGasPlanet: true },
      { name: 'Saturn', isGasPlanet: true},
      { name: 'Venus', isGasPlanet: false},
      { name: 'Neptune', isGasPlanet: true},
      { name: 'Uranus', isGasPlanet: true},
    ]
  return (
    <div className="App"> 
    {planets.map((planets,key)=>{
      if (planets.isGasPlanet) return <div>{planets.name}</div>
    }

  )}
    
    </div>
  );
}


export default App;
