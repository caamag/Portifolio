import './Nav.css'; 

import { useState } from 'react';

function Nav ({showProjects}) {

    const [sidebar, setSidebar] = useState(false); 

    function showSidebar () {setSidebar(!sidebar)}

    const sidebarClass = sidebar ? 'sidebar visibleNav' : 'sidebar'; 

    function reload () {return window.location.reload()}

    return (

        <div className="Navegation">

            <button className='navegation-button' onClick={showSidebar}><img src='./nav-icon.png' alt='navegation button'></img></button>

            <div className={sidebarClass}>

                <ul className="first-list">

                    <li><button onClick={reload}>Home</button></li>
                    <li><button onClick={showProjects}>Projetos</button></li>
                    <li><a href="./Currículo Caio Magalhães.pdf" target="blank_">CV</a></li>

                </ul>

                <ul className="contacts">

                    <li><a href="https://www.linkedin.com/in/caio-lopes-programador/" target="blank_">LN</a></li>
                    <li><a href="https://github.com/caamag" target="blank_">GH</a></li>
                    <li><a href="https://wa.me/5511966197683" target="blank_">WPP</a></li>

                </ul>

            </div>

        </div>

    ); 
}; 

export default Nav; 