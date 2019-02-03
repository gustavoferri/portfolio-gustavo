import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component {

    async componentDidMount() {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

    render() {
      return (
          <BaseLayout>
            <h1> Verifying login  data ... </h1>
          </BaseLayout>
        
      )
   }
}

export default withRouter(Callback);