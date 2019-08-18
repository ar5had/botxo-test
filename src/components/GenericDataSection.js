import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from '../utils/validate';
import RenderField from './RenderField';
import trashIcon from '../images/trash.png';
import '../styles/generic-data-section.css';

const GenericDataSection = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, submitting, state} = props;

  const formFields = state.map(e => (
    <div key={e.name} className="fields-wrapper">
      <Field
        name="username"
        type="text"
        component={RenderField}
        placeholder="Name"
        model={e.name}
      />
      <Field name="age" type="number" component={RenderField} placeholder="Age" value={e.age}/>
      <img className="trash-icon" src={trashIcon} />
    </div>
  ));

  return (
    <div className="generic-data-section white-bkd-shadow data-section">
      <h3 className="text-center">Generic Data</h3>
      <h4>Users</h4>
      <form onSubmit={handleSubmit}>
        {formFields}
        <div className="button-wrapper">
          <button
            className="button primary"
            type="submit"
            disabled={submitting}
          >
            Add user in generic and specific data
          </button>
        </div>
      </form>
    </div>
  );
};

GenericDataSection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'generic-data-form',
  validate
})(GenericDataSection);
