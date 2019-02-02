import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Sobre extends React.Component {

    render() {
      return (
        <BaseLayout>
            <BasePage className="about-page">
               <h1> Minha Página Sobre </h1>
            </BasePage>
        </BaseLayout>
      )
   }
}

export default Sobre;