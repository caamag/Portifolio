import './apresentation.css'; 

//nav
import Nav from './Nav';

//hooks
import React, {useState, useEffect} from 'react';    


function Apresentation () {

    //title animation 
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const timeOut = setTimeout(() => {
            setVisible(true); 
        }, 500); 

        return () => clearInterval(timeOut);

    }, []); 

    const titleClass = visible ? 'title visible' : 'title'; 

    //photo animation
    const [photoVisible, setPhotoVisible] = useState(false);
    
    useEffect(() => {

        const timeOut = setTimeout(() => {
            setPhotoVisible(true); 
        }, 600); 

        return () => clearInterval(timeOut); 

    }); 

    const photoClass = photoVisible ? 'photo photoVisible' : 'photo'; 



    return (

        <div className="apresentation-container">

            <Nav />

            <div className={photoClass}></div>

            <a href="https://github.com/caamag" target="blank_"><img className="github-Icon" src="./github.png" alt="githubIcon" /></a>

            <div className={titleClass}>

                <h1>Desenvolvedor</h1>
                <h1>Frontend.</h1>
                <ul>

                    <li>React.js</li>
                    <li>APIs</li>
                    <li>ES6</li>

                </ul>

            </div>

        </div>
    )
}

export default Apresentation; 