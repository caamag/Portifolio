import './App.css';

//components
import Apresentation from './components/apresentation';
import About from './components/about';
import Projects from './components/projects';

import {useState} from 'react'; 

const pages = [
  {id: 1, page: 'home'}, 
  {id: 2, page: 'projects'}
]; 

function App() {

  const [profilePage, setProfilePage] = useState(pages[0].page); 

  //project stage
  function showProjects () {setProfilePage(pages[1].page)}

  return (
    <div className="App">
      
      {/*home page*/}
      {profilePage == 'home' && <Apresentation showProjects={showProjects}/>}
      {profilePage == 'home' && <About />}


      {/*Project page*/}
      {profilePage == 'projects' && <Projects />}

    </div>
  );
}

export default App;
