import './apresentation.css'; 

//nav
import Nav from './Nav';


function Apresentation () {

    return (

        <div className="apresentation-container">

            <Nav />

            <div className="photo"></div>

            <a href="https://github.com/caamag" target="blank_"><img className="github-Icon" src="./github.png" alt="githubIcon" /></a>

            <div className="title">

                <h1>Desenvolvedor</h1>
                <h1>Frontend.</h1>
                <ul>

                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>ES6</li>

                </ul>

            </div>

        </div>

    )

}

export default Apresentation; 