import './App.css';
import logo from './logo.svg';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="Aman" heroName ="superman" >
        <p>This is Aman</p>
      </Greet>
      <Greet name="Pratham" heroName = "batman" >
      <button>Action</button>
      </Greet>
      <Greet name="Shresta" heroName ="hawkeye" />
      {/* <Welcome/>
    <Hello/> */}

    </div>
  );
}

export default App;
