import './Nav.css'; 

import { useState } from 'react';

function Nav () {

    const [sidebar, setSidebar] = useState(false); 

    function showSidebar () {setSidebar(!sidebar)}

    const sidebarClass = sidebar ? 'sidebar visibleNav' : 'sidebar'; 

    return (

        <div className="Navegation">

            <button onClick={showSidebar}><img src='./nav-icon.png'></img></button>

            <div className={sidebarClass}>

                <ul className="first-list">

                    <li>Projetos</li>
                    <li><a href="./Currículo Caio Magalhães.pdf" target="blank_">CV</a></li>
                    <li>caiolopesfv@gmail.com</li>

                </ul>

                <ul className="contacts">

                    <li><a href="https://www.linkedin.com/in/caio-lopes-programador/" target="blank_">LN</a></li>
                    <li><a href="https://github.com/caamag" target="blank_">GH</a></li>
                    <li><a href="" target="blank_">WPP</a></li>

                </ul>

            </div>

        </div>

    ); 

}; 

export default Nav; 