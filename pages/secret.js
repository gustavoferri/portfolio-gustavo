import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

class Secret extends React.Component {

    // renderSecretPage() {
    //     const { isAuthenticated } = this.props.auth;

    //     if(isAuthenticated) {
    //         return (
    //             <BaseLayout {...this.props.auth}>
    //                 <BasePage>
    //                   <h1> Minha Página Secreta </h1>
    //                   <p></p>
    //                 </BasePage>
    //           </BaseLayout>
    //         )
    //     } else {
    //         return (
    //             <BaseLayout {...this.props.auth}>
    //                 <BasePage>
    //                 <h1> Você não esta logado, por favor faça seu login e acesse está página. </h1>
    //                 </BasePage>
    //            </BaseLayout>
    //         )
    //     }
    // }

    render() {
      return (
        <BaseLayout {...this.props.auth}>
            <BasePage>
                <h1> Minha Página Secreta </h1>
                <p></p>
            </BasePage>
         </BaseLayout>
      )
   }
}

export default wihAuth(Secret);