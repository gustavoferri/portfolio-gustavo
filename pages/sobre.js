import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';


class Sobre extends React.Component {

    render() {
      return (
        <BaseLayout>
            <h1>Minha Página Sobre</h1>
            {/* <Header /> */}
        </BaseLayout>
      )
   }
}

export default Sobre;