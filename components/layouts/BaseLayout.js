import React from 'react';
import Header from  '../shared/Header';
import Head from 'next/head';


import { Container, Row } from 'reactstrap';
import moment from 'moment';



const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
    const headerType = props.headerType || 'default';
    return(
        <React.Fragment>
          <Head>
            <title>{title}</title>
            <meta name="description" content="Meu nome é Gustavo Ferri sou um aficionado por Desenvolvimento Web e amante de novas tecnologias. Experiente com a plataforma de e-commerce Magento." />
            <meta name="keywords" content="gustavo ferri, desenvolvedor web, web developer, developer, freelancer, programador, portfolio, desenvolvedor freelancer, desenvolvimento de sites, desenvolvedor magento, desenvolvedor front-end, desenvolvedor ecommerce, full stack web developer"/>
            <meta property="og:title" content="Gustavo Ferri - Desenvolvedor WebFreelancer" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content={`${process.env.BASE_URL}`}/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Meu nome é Gustavo Ferri sou um aficionado por Desenvolvimento Web e amante de novas tecnologias."/>

            {cannonical && <link rel="cannonical" href={`process.env.BASE_URL${cannonical}`}/>}
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
          </Head>
        <div className="layout-container">
          <Header className={`port-nav-${headerType}`}
                  isAuthenticated={isAuthenticated}
                  user={user}
                  isSiteOwner={isSiteOwner}/>
              <main className={`cover ${className}`}>
              <div className="wrapper">
                {children}
              </div>
            </main>
        </div>

        <footer>
        <Container>
          <Row>
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.linkedin.com/in/gustavoferri/">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://github.com/gustavoferri/">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                <a target="_blank" href="https://codepen.io/gustavoferri">
                  <span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-codepen fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              </ul>
              <p className="copyright text-muted">Copyright &copy; Gustavo Ferri | Magento Developer, Front-end Developer e Full Stack Developer, {moment().format('YYYY')}.</p>
            </div>
          </Row>
        </Container>
      </footer>
    <style jsx>
      {`
        @import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
      `}
  </style>
        </React.Fragment>
    )
}

export default BaseLayout;