import React from 'react';
import Typed from 'react-typed';

import BaseLayout from '../components/layouts/BaseLayout'

import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            isFlipping: false
        }
        this.roles = ['Freelancer', 'Full Stack Web Developer', 'E-commerce Specialist', 'Magento Developer', 'Mobile Specialist', 'Wordpress Professional'];
    }
    componentDidMount() {
        this.animateCard();
    }
    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }
    animateCard() {
        this.cardAnimationInterval = setInterval(() => {
            this.setState({
                isFlipping: !this.state.isFlipping
            });
        }, 60000);
    }
    render() {
        const { isAuthenticated, user } =  this.props.auth;
        const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth}
                  headerType="index"
                  title="Gustavo Ferri - Portfolio | Desenvolvedor Magento - Wordpress Professional - Programador PHP e Freelancer">
        <div className="main-section">
          <div className="background-image">
             <img alt="background portfolio" src="/static/images/background-index.png" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                 <div className="hero-section">
                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                       <div className="front">
                          <div className="hero-section-content">
                            <h2> Full Stack Web Developer </h2>
                            <div className="hero-section-content-intro">
                              Conheça alguns dos meus trabalhos realizados.
                            </div>
                          </div>
                          <img alt="young programming blue" className="image" src="/static/images/section-1.png"/>
                          <div className="shadow-custom">
                             <div className="shadow-inner"> </div>
                          </div>
                       </div>
                       <div className="back">
                       <div className="hero-section-content">
                         <h2> Tire Seu Projeto Do Papel </h2>
                         <div className="hero-section-content-intro">
                             Serviço de alta qualidade feito por profissional.
                         </div>
                       </div>
                       <img alt="young programming orange" className="image" src="/static/images/section-2.png"/>
                       <div className="shadow-custom shadow-custom-2">
                          <div className="shadow-inner"> </div>
                       </div>
                    </div>
                    </div>
                 </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                    <h1>
                    { isAuthenticated && <span> <b> {user.name} </b> </span> }
                    Welcome to the portfolio website of Gustavo Ferri.
                    Get informed, collaborate and discover projects I was working on through the years!
                    </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                    <h1>
                        Let's take a look on my work.
                    </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
       </BaseLayout>
      )
   }
}
export default Index;
