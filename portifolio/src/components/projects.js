//style
import './projects.css'; 

//components
import Nav from './Nav';

function Projects () {

    const projectCard = [

        {id: 1, title: 'Help center Vitacon', url: 'https://vitaconsupport.zendesk.com/hc/en-us',
        img: './vitacon-icon.jpeg', technologies: 'JS, Zendesk Api, Handlebars'},

        {id: 2, title: 'Mini Game', url: 'https://statuesque-unicorn-fc118f.netlify.app',
        img: './game-icon.png', technologies: 'HTML, CSS, JS'},

        {id: 3, title: 'Descrição do Clima', url: 'https://preeminent-chebakia-06fcda.netlify.app',
        img: './clima-icon.png', technologies: 'JS, Weather Api'},

        {id: 4, title: 'Portifólio Pessoal', url: 'https://portifolio-caio-magalhaes-s-projects.vercel.app',
        img: './icon-principal.png', technologies: 'React.js e Node.js'},

        {id: 5, title: 'Help Center Niky Benefícios', url: 'https://niky8517.zendesk.com/hc/pt-br',
        img: './niky-icon.png', technologies: 'Handlebars, JS'},
        
        {id: 6, title: 'Em breve...', url: null,
        img: './sinal-de-interrogacao.png', technologies: 'Em breve'}, 

    ]

    return (

        <div className="projects-container">

            <Nav />

            <a href="https://github.com/caamag" target="blank_"><img className="github-Icon" src="./github.png" alt="githubIcon" /></a>

            <div className='projects-content'>

                <h1 className='projects-title'>./Projetos</h1>
                <h2 className='projects-subtitle'>Selecione a pasta para ir ao Projeto.</h2>

                <div className='cards'>

                    {projectCard.map((project) => (

                        <section className='card' key={project.id}>

                            <img src={project.img} alt='project-icon'></img>
                            <a href={project.url} target='blank_'>./{project.title}<br />
                            <span>({project.technologies})</span></a>

                        </section>

                    ))}

                </div>

            </div>

        </div>

    ); 
}; 

export default Projects; 