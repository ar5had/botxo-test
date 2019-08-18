import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const PageButton = ({ location }) => {
  const { pathname } = location;
  return (
    <div className="page-button">
      {
        pathname === '/' ?
          <Link to="/show-and-send-data" className="link">
            Next →
          </Link> :
          <Link to="/" className="link">
            Prev ←
          </Link>
      }
    </div>
  );
};

PageButton.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(PageButton);
