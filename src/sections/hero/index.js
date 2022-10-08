import React from 'react'
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
var scrollToElement = require('scroll-to-element')
class Hero extends React.Component {

  static contextType = ThemeContext

  scrollToContact () {
    const el = document.getElementById('contact')
    scrollToElement(el, {
      offset: 0,
      ease: 'in-out-expo',
      duration: 2000
    })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Hello, I'm</h4>
              </div>
              <Glitch text="Loren Wright" />
              <Typewriter
                options={{
                  strings: [
                    'Funny Guy',
                    'Code Slinger',
                    'Software Dev',
                    'App Developer',
                    'UI/UX Designer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <button className="hover-button" onClick={this.scrollToContact}>
                  <span>Say Hello</span>
              </button>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="img">
            <img
              src={this.props.mainImg}
              alt="person"
            />
          </Col>
        </Row>
      </section>
    )
  }

  icons() {
    const icons = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
    ]
    return icons.map((value, index) => {
      return (
        <img
          src={'img/icons/' + value + '.png'}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt="shape"
          key={index}
        />
      )
    })
  }
}

export default props => (
  <Hero mainImg="img/person.jpg" {...props} />
)
