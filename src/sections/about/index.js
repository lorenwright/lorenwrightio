import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Remote Full Stack Software Engineer</h3>
                            <div className="separator" />
                            <p>I was very young when I started my web development career. My first website consisted of every GIF (soft G) the early days of Internet had to offer. Since then, my passion for tinkering with the web has grown exponentially. I now spend my time building web & mobile applications that attract YOUR target audience using tools like React, React Native, Vue, Sass, GraphQL, Laravel, Symfony & much more. When I'm not making the Internet a better place, chances are I am probably playing some nerdy board game with my wife and kids.</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/lorenwrightdesign')}/>
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/loren-wright-a346586b/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Vue" value={100} delay={1100} />
                                <Progress name="React" value={90} delay={1100} />
                                <Progress name="GraphQL" value={75} delay={1100} />
                                <Progress name="Laravel" value={85} delay={1100} />
                                <Progress name="Sass" value={100} delay={1100} />
                                <Progress name="Symfony" value={70} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero