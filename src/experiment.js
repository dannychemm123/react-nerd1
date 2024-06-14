function App() {
    const names =["Angular","Express","React","Vue"]
  return (
    <div className="App"> 
    {names.map((names,key)=>{
      return <h1 key={key}>{names}</h1>
    }

    )}
    {/*<User name = "Danny" age = {24} email = "danny@danny.com"/>
    <User name = "Conti" age = {32} email = "Conti@conti.com"/>
    <User/>
    <Job salary = {9000} position="Senior SDE" company = "Amazon"/>
    <Job salary = {7000} position="Junior SDE" company = "Google"/>
    <Job salary = {10000} position="Project Manager" company = "Netflix"/>*/}

    </div>
  );
}

const User = (props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  )
}
 const Job = (props) => {
  return (
    <div>
    <h1>{props.salary}</h1>
    <h1>{props.position}</h1>
    <h1>{props.company}</h1>
    </div>
  )
 }
export default App;

{/* 
    
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
      if (planets.isGasPlanet) return <h1>{planets.name}</h1>
    }

  )}
    
    </div>
  );
}


export default App;

    */}