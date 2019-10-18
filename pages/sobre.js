import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class Sobre extends React.Component {

    render() {
      return (
        <BaseLayout {...this.props.auth}>
            <BasePage className="about-page">
                  <Row className="mt-5">
                     <Col md="6">
                        <div className="left-side">
                           <h1 className="title fadein">Olá, bem vindo(a)!</h1>
                           <h4 className="subtitle fadein">Saiba mais sobre mim.</h4>
                           <p className="subsubTitle fadein"></p>
                        </div>
                     </Col>
                     <Col md="6">
                     <div className="fadein" id="intro">
                        <p>Gustavo é um aficionado por Desenvolvimento Web e amante de novas tecnologias. </p>
                        <p>Possui conhecimento em diversas áreas de Front-end e Back-end, adora novos
                         desafios e acredita que sempre podemos melhorar o que já foi feito.</p>
                        <p>
                           Experiente com a plataforma de e-commerce Magento, participou em vários projetos
                           de diferentes segmentos, para pequenas e médias empresas. Também atuou utilizando
                           Wordpress em diversificados projetos, para criação de Websites Institucionais e
                           utilizando Woocommerce para criação de lojas virtuais.
                         </p>
                         <p>
                         Nas horas vagas gosta de estudar Segurança da Informação, além de dar uns 'commit'.
                         Atualmente esta focado em aprender mais sobre a biblioteca JavaScript React.js.
                        </p>
                     </div>
                  </Col>
               </Row>
            </BasePage>
        </BaseLayout>
      )
   }
}

export default Sobre;