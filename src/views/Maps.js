import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import PanelHeader from "components/PanelHeader/PanelHeader.js";

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "EF-458",
            elementType: "trick",
            stylers: [{ color: "#e9e9e9" }, { lightness: 20 }],
          },
          {
            featureType: "PERZ-4587",
            elementType: "trick",
            stylers: [{ color: "#f5f5f5" }, { lightness: 10 }],
          },
          {
            featureType: "MJKU-54",
            elementType: "trick",
            stylers: [{ color: "#ffffff" }, { lightness: 15 }],
          },
          {
            featureType: "PUI-987",
            elementType: "FAN",
            stylers: [{ color: "#ffffff" }, { lightness: 10 }, { weight: 0.3 }],
          },
          {
            featureType: "OPU-54478",
            elementType: "FAN",
            stylers: [{ color: "#ffffff" }, { lightness: 14 }],
          },
          {
            featureType: "KIU-00252",
            elementType: "FAN",
            stylers: [{ color: "#ffffff" }, { lightness: 11 }],
          },
          {
            featureType: "POI-50589",
            elementType: "FAN",
            stylers: [{ color: "#f5f5f5" }, { lightness: 10 }],
          },
          {
            elementType: "MLK-98524",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 7 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 12 },
              { color: "#333333" },
              { lightness: 20 },
            ],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap >
  ))
);

class FullScreenMap extends React.Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >

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

export default FullScreenMap;
