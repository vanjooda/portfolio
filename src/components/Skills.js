import {ProgressBar, ListGroup} from 'react-bootstrap';
import '../css/style.css';

const Skills = () => {
    return (
        <>
        <div className="skillWrapper">
            <div className='languageGroup'>
                <h2>Programming Languages</h2>
                <ListGroup horizontal>
      <ListGroup.Item>JAVA</ListGroup.Item>
      <ListGroup.Item>Python</ListGroup.Item>
      <ListGroup.Item>JavaScript</ListGroup.Item>
      <ListGroup.Item>HTML</ListGroup.Item>
      <ListGroup.Item>CSS</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>Framwork / Library</h2>
                <ListGroup horizontal>
      <ListGroup.Item>SpringBoot</ListGroup.Item>
      <ListGroup.Item>FastAPI</ListGroup.Item>
      <ListGroup.Item>Bootstrap</ListGroup.Item>
      <ListGroup.Item>Tailwind CSS</ListGroup.Item>
      <ListGroup.Item>Flask</ListGroup.Item>
      <ListGroup.Item>jQuery</ListGroup.Item>
      <ListGroup.Item>React</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>Server</h2>
                <ListGroup horizontal>
      <ListGroup.Item>apache-tomcat</ListGroup.Item>
      <ListGroup.Item>Uvicorn</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>Tooling</h2>
                <ListGroup horizontal>
      <ListGroup.Item>Maven</ListGroup.Item>
      <ListGroup.Item>Gradle</ListGroup.Item>
      <ListGroup.Item>npm</ListGroup.Item>
      <ListGroup.Item>IntelliJ</ListGroup.Item>
      <ListGroup.Item>Eclipse</ListGroup.Item>
      <ListGroup.Item>Visual Studio Code</ListGroup.Item>
      <ListGroup.Item>SQL Developer</ListGroup.Item>
      <ListGroup.Item>MySQL Workbench</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>DevOps</h2>
                <ListGroup horizontal>
      <ListGroup.Item>Git</ListGroup.Item>
      <ListGroup.Item>GitHub</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>Environment</h2>
                <ListGroup horizontal>
      <ListGroup.Item>window 10</ListGroup.Item>
    </ListGroup>
                </div>
                <div className='languageGroup'>
                <h2>DB / ETC</h2>
                <ListGroup horizontal>
      <ListGroup.Item>Oracle</ListGroup.Item>
      <ListGroup.Item>MySQL</ListGroup.Item>
      <ListGroup.Item>JPA</ListGroup.Item>
      <ListGroup.Item>MyBatis</ListGroup.Item>
    </ListGroup>
                </div>
                        </div>
        
        </>
    )
}
export default Skills;