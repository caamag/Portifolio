import './App.css';

//components
import Presentation from './components/presentation';
import About from './components/about';
import Projects from './components/projects';
import MainProjects from './components/mainProjects';
import Form from './components/form';
import Footer from './components/footer';

import {useState} from 'react'; 

const pages = [
  {id: 1, page: 'home'}, 
  {id: 2, page: 'projects'}
]; 

function App() {

  const [profilePage, setProfilePage] = useState(pages[0].page); 

  //change to project page
  function showProjects () {setProfilePage(pages[1].page)}

  return (
    <div className="App">
      
      {/*home page*/}

      {profilePage === 'home' && [<Presentation showProjects={showProjects}/>,
      <About />,
      <MainProjects />,
      <Form />,
      <Footer showProjects={showProjects}/>]}

      {/*Project page*/}
      {profilePage === 'projects' && <Projects />}

    </div>
  );
}

export default App;
