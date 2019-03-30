import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import { createPortfolio, getPortfolioById } from '../actions';

import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';


class PortfolioEdit extends React.Component {

    static async getInitialProps({query}) {
        let portfolio = {};

        try {
        portfolio = await getPortfolioById(query.id);   
        } catch (error) {
          console.error(err);
        }
        // console.log(portfolio);
        return {portfolio};
    }


    constructor(props){
      super();

      this.state = {
      error: undefined
      }

      this.savePortfolio = this.savePortfolio.bind(this);
  }
      savePortfolio(portfolioData, {setSubmitting}) {
        // setSubmitting(true);

        //  createPortfolio(portfolioData)
        //  .then((portfolio) => {
        //   setSubmitting(false);
        //    this.setState({error: undefined});
        //    Router.pushRoute('/portfolios');
        //  })
        //  .catch((err) => {
        //    const error = err.message || 'Server Error!'
        //    setSubmitting(false);
        //   this.setState({error});
        //  })
    }

    render() {
      const {error} = this.state;
      const { portfolio } = this.props; 

      return (
        <BaseLayout {...this.props.auth}>
            <BasePage className="portfolio-create-page" title="Eu sou a página Portfolio">
              <Row>
                <Col md="6">
                <PortfolioCreateForm initialValues={portfolio}
                                     error={error} 
                                     onSubmit={this.savePortfolio} />
                </Col>
              </Row>
            </BasePage>
        </BaseLayout>
      )
   }
}

export default withAuth('siteOwner')(PortfolioEdit);