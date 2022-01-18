import "./about.scss"
import { Storage, Devices, Code } from '@material-ui/icons';

export default function About() {
    return (
        <div className='me' id="about">
            <div className="left">
                <h2>Just a,</h2>
                <h1>Synopsis</h1>
                <h3>About Me</h3>
                <p>
                    I am Software engineer with skills within both front and back end applications. Working my way to the forefront of technology by exploring how it ties with peoples passions. I believe in rapid iteration, continuous improvement, and that good software can make life easier for anyone.  I have an excellent eye for detail and am able to work efficiently. Having a background in the automtive industry, I quickly learned persistence is key. I'm always looking for new challenges to test my capabilities.
                </p>
            </div>
            <div className="right">
                <div className="itemContainer">
                    <Storage className="icon" />
                    <Devices className="icon" />
                    <Code className="icon" />
                </div>
            </div>
        </div>
    )
}
