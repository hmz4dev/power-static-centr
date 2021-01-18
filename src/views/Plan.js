import React from "react";

import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";
import plans from 'variables/Plan'

// import Plan from "variables/Plan";

class Plan extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title">all plan used in this month</h5>
                  <p className="category">
                    2018-07
                  </p>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    {plans.map((prop, key) => {
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                          key={key}
                        >
                          <div className="font-icon-detail">
                            <i className={"now-ui-icons " + prop} />
                            <p>{prop}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Plan;
