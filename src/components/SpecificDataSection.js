import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form/immutable';
import validate from '../utils/validate';
import RenderField from './RenderField';
import trashIcon from '../images/trash.png';
import '../styles/generic-data-section.css';


// eslint-disable-next-line react/prop-types
// const renderMembers = ({ fields, meta: { error, submitFailed } }) => (
//   <React.Fragment>
//     <div>
//       <button type="button" onClick={() => fields.push({})}>
//         Add user
//       </button>
//       {submitFailed && error && <span>{error}</span>}
//     </div>
//     {fields.map(member => console.log("a", member))}
//     {
//       fields.map((member, index) => (
//         <div key={index} className="fields-wrapper">
//           <Field
//             name={`${member}.name`}
//             type="text"
//             component={RenderField}
//             placeholder="Name"
//           />
//           <Field name={`${member}.age`} type="number" component={RenderField} placeholder="Age" />
//           <img src={trashIcon} className="trash-icon" onClick={() => fields.remove(index)} />
//         </div>
//       ))
//     }
//   </React.Fragment>
// );


const SpecificDataSection = (props) => {
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
    <div className="specific-data-section white-bkd-shadow data-section">
      <h3 className="text-center">Specific Data</h3>
      <h4>Users</h4>
      <form onSubmit={handleSubmit}>
        {formFields}
        <div className="button-wrapper">
          <button
            className="button primary"
            type="submit"
            disabled={submitting}
          >
            Add user in specific data
          </button>
        </div>
      </form>
    </div>
  );
};

SpecificDataSection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  state: PropTypes.array.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'specific-data-form',
  validate
})(SpecificDataSection);
