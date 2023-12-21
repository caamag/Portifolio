
import './footer.css';

function Footer ({showProjects}) {

    return(

        <footer className='footer'>

            <div className='links-container'>

                <ul>

                    <li><a href='mailto:caiolopesfv@gmail.com'>caiolopesfv@gmail.com</a></li>
                    <li><button onClick={showProjects}>Projetos</button></li>

                </ul>

            </div>

            <div className='contacts'>

                <a href='https://www.linkedin.com/in/caio-lopes-programador/' target='blank_'>LN</a>
                <a href='https://github.com/caamag' target='blank_'>GH</a>
                <a href='https://wa.me/5511966197683' target='blank_'>WPP</a>

            </div>

        </footer>

    )

}; 

export default Footer; 