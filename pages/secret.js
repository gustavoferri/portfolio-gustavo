import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

class Secret extends React.Component {

    getInitialProps() {
        const superSecretValue = 'Super Secret Value';

        return { superSecretValue };
    }

    render() {
        const { superSecretValue } = this.props;

      return (
        <BaseLayout {...this.props.auth}>
            <BasePage>
                <h1> Minha Página Secreta </h1>
                <h2> {superSecretValue} </h2>
            </BasePage>
         </BaseLayout>
      )
   }
}

export default wihAuth(Secret);