import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';

import { Row, Col } from 'reactstrap';

import { createPortfolio } from '../actions';

import withAuth from '../components/hoc/withAuth';


class PortfolioNew extends React.Component {

    constructor(props){
      super();

      this.state = {
      error: undefined
      }

      this.savePortfolio = this.savePortfolio.bind(this);
  }
      savePortfolio(portfolioData) {
         createPortfolio(portfolioData)
         .then((portfolio) => {
           this.setState({error: undefined});
         })
         .catch((err) => {
           debugger;
          this.setState({error: err.message});
         })
    }

    render() {
      const {error} = this.state;

      return (
        <BaseLayout {...this.props.auth}>
            <BasePage className="portfolio-create-page" title="Eu sou a página Portfolio">
              <Row>
                <Col md="6">
                <PortfolioCreateForm error={error} onSubmit={this.savePortfolio} />
                </Col>
              </Row>
            </BasePage>
        </BaseLayout>
      )
   }
}

export default withAuth('siteOwner')(PortfolioNew);