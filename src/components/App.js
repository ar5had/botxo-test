/* eslint-disable import/no-named-as-default */
import NavButtons from "./NavButtons";
import Content from "./Content";
import CircleButtons from "./CircleButtons";
import PageButton from "./PageButton";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import '../styles/app.css';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <NavButtons />
        <Content />
        <CircleButtons />
        <PageButton />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
