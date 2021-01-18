import React from "react";
// react plugin for creating Messages over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.notify = this.notify.bind(this);
  }
  onDismiss() { }
  notify(place) {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "info";
        break;
      case 2:
        type = "info";
        break;
      case 3:
        type = "info";
        break;
      case 4:
        type = "info";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            2018-07-15
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    this.refs.notificationAlert.notificationAlert(options);
  }
  render() {
    return (
      <>
        <PanelHeader
          content={
            <div className="header text-center">
              <h2 className="title">Messages</h2>
              <p className="category">
                2018-07-12
              </p>
            </div>
          }
        />
        <div className="content">
          <NotificationAlert ref="notificationAlert" />
          <Row>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Rec</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    <span>business and goods move fast, and are expected to move even faster,</span>
                  </Alert>
                  <Alert
                    color="info"

                  >
                    <span>business and goods move fast, and are expected to move even faster,</span>
                  </Alert>
                  <Alert
                    color="info"

                  >
                    <span>business and goods move fast, and are expected to move even faster,</span>
                  </Alert>
                  <Alert
                    color="info"

                  >
                    <span>business and goods move fast, and are expected to move even faster,</span>
                  </Alert>
                  <Alert
                    color="info"

                  >
                    <span>business and goods move fast, and are expected to move even faster,</span>
                  </Alert>

                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Send</CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert
                    color="info"


                  >
                    <span>
                      business and goods move fast, and are expected to move even faster,
                    </span>
                  </Alert>
                  <Alert
                    color="info"


                  >
                    <span>
                      business and goods move fast, and are expected to move even faster,
                    </span>
                  </Alert>
                  <Alert
                    color="info"


                  >
                    <span>
                      business and goods move fast, and are expected to move even faster,
                    </span>
                  </Alert>
                  <Alert
                    color="info"


                  >
                    <span>
                      business and goods move fast, and are expected to move even faster,
                    </span>
                  </Alert>
                  <Alert
                    color="info"


                  >
                    <span>
                      business and goods move fast, and are expected to move even faster,
                    </span>
                  </Alert>
                </CardBody>
              </Card>
            </Col>
            <Col md={12} xs={12}>
              <Card>
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle tag="h4">
                          urgent
                        </CardTitle>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Messages;
