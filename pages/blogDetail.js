import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class BlogDetail extends React.Component {

    static getInitialProps() {

    }


    render() {
      return (
          <BaseLayout {...this.props.auth}>
            <BasePage className="blog-detail-page" title="Eu sou a página detalhes do Blog">
            </BasePage>
          </BaseLayout>
      )
   }
}

export default BlogDetail;