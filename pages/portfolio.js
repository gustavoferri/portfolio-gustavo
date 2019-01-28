import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { withRouter } from 'next/router'



class Portfolio extends React.Component {

    render() {
        debugger;
        console.log(this.props)
      return (
          <BaseLayout>
            <h1>Minha Página de Portfolio</h1>
            <h1>{this.props.router.query.id}</h1>
          </BaseLayout>
      )
   }
}

export default withRouter(Portfolio);