import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Sobre extends React.Component {

    render() {
      return (
        <BaseLayout {...this.props.auth}>
            <BasePage className="about-page" title="Eu sou a página Sobre">
               <h1> Minha Página Sobre </h1>
            </BasePage>
        </BaseLayout>
      )
   }
}

export default Sobre;