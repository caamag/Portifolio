import './App.css';

//components
import Apresentation from './components/apresentation';

const innerWidth = window.innerWidth; 
console.log(innerWidth);


function App() {
  return (
    <div className="App">

      <Apresentation />

    </div>
  );
}

export default App;
