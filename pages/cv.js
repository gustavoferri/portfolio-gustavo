import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

class Cv extends React.Component {

    render() {
      return (
          <BaseLayout {...this.props.auth}>
            <BasePage title="Pré-visualização do meu Currículo" className="cv-page">
              <Row>
                <Col md={{size: 8, offset: 2}}>
                  <div className="cv-title">
                     <a download="gustavo_cv.pdf" className="btn btn-success" href="/static/gustavo_cv.pdf">
                       Download
                     </a>
                  </div>
                  <iframe style={{width: '100%', height: '800px'}} src="/static/gustavo_cv.pdf">
                  </iframe>
                </Col>
              </Row>
            </BasePage>
          </BaseLayout>
      )
   }
}

export default Cv;