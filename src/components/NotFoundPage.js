import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound-page.css';

const NotFoundPage = () => {
  return (
    <div className="pnf-wrapper">
      <h4 className="text-center">
        404 Page Not Found
      </h4>
      <p className="text-center">
        <Link className="link" to="/">← Go back to homepage </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
