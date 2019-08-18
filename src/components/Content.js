/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch } from "react-router-dom";
// import FuelSavingsPage from "./containers/FuelSavingsPage";
import DataForm from "./containers/DataForm";
import DataViewer from "./DataViewer";
import NotFoundPage from "./NotFoundPage";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={DataForm} />
        <Route path="/show-and-send-data" component={DataViewer} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default Content;
