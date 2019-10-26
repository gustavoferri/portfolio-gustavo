import React from 'react';
import Header from  '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
    const headerType = props.headerType || 'default';
    return(
        <React.Fragment>
          <Head>
            <title>{title}</title>
            <meta name="description" content="Meu nome é Gustavo Ferri sou um aficionado por Desenvolvimento Web e amante de novas tecnologias. Experiente com a plataforma de e-commerce Magento." />
            <meta name="keywords" content="gustavo ferri, desenvolvedor web, web developer, developer, freelancer, programador, portfolio, desenvolvedor freelancer, desenvolvimento de sites, desenvolvedor magento, desenvolvedor front-end, desenvolvedor ecommerce, full stack web developer"/>
            <meta property="og:title" content="Gustavo Ferri - programador, programmer, desenvolvedor, developer, freelancer" />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content={`${process.env.BASE_URL}`}/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Meu nome é Gustavo Ferri sou um aficionado por Desenvolvimento Web e amante de novas tecnologias."/>

            {cannonical && <link rel="cannonical" href={`process.env.BASE_URL${cannonical}`}/>}
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
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
        </React.Fragment>
    )
}

export default BaseLayout;