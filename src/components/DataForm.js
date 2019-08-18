import React from 'react';
import GenericDataSection from './GenericDataSection';
import SpecificDataSection from './SpecificDataSection';
import Loader from './Loader';
import "../styles/data-form.css";

class DataForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFetching: true };
    this.controller = null;
    this.onGenericDataSumbit = this.onGenericDataSumbit.bind(this);
  }

  componentDidMount() {
    if (this.controller) {
      // eslint-disable-next-line no-console
      console.log(`Aborting previous requests to ${url}`);
      // Abort previous request
      this.controller.abort()
    }

    this.controller = new AbortController();
    const signal = this.controller.signal;
    const url = 'http://webhook.site/c3dc5c6c-86de-428b-86cf-a228974000cd';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + url, { signal })
      .then(data => data.json())
      .then(data => {
        this.setState({ isFetching: false });
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(`Call to ${url} failed. Error - ${err}`));
  }

  onGenericDataSumbit(values) {
    event.preventDefault();
    console.log(values);
  }

  render() {
    const isFetching = this.state.isFetching;

    if (isFetching) {
      return <Loader />;
    }

    return (
      <div className="data-sections">
        <GenericDataSection handleSubmit={this.onGenericDataSumbit} sumitt/>
        <SpecificDataSection />
      </div>
    );
  }
}

export default DataForm;
