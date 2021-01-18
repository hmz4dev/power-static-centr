import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className="footer"
      >
        <Container fluid={this.props.fluid ? true : false}>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Power state
                </a>
              </li>

            </ul>
          </nav>
          <div className="copyright">
            &copy; 2018 &nbsp;|&nbsp;
            <a
              href="#"
              target="_blank"
            >
              Power state
            </a>
            .
          </div>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
