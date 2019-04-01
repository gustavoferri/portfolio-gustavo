import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes'
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle, Button } from 'reactstrap';

import { Router } from '../routes';

import { getPortfolios } from '../actions';
// import { Router } from 'express';


class Portfolios extends React.Component {

    static async getInitialProps() {
        let portfolios = [];

        try {
          portfolios = await getPortfolios();
        } catch (err) {
            console.error(err);
        }

        return {portfolios};
    }

    renderPortfolios(portfolios) {
        return portfolios.map((portfolio, index) => {
            return (
                <Col key={index} md="4">
                    <React.Fragment key={index}>
                        <span>
                            <Card className="portfolio-card">
                            <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                                <CardBody>
                                    <p className="portfolio-card-city">{portfolio.location} </p>
                                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                                    <div className="readMore">
                                    {
                                        <React.Fragment>
                                            <Button onClick={() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)} color="warning">Edit</Button>{' '}
                                            <Button color="danger">Delete</Button>
                                        </React.Fragment>
                                    }
                                 </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
              </Col>
            )
        })
    }

    render() {
        const { portfolios } = this.props;       
        
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage className="portfolio-page" title="Portfolios">
                <Button onClick={() => Router.pushRoute('/portfolioNew')}
                 color="success"
                 className="create-port-btn">Criar Portfolio
                 </Button>
                <Row>
                    { this.renderPortfolios(portfolios) }
                </Row>
            </BasePage>
          </BaseLayout>
      )
   }
}

export default Portfolios;