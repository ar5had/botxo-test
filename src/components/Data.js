import React from 'react';
import PropTypes from 'prop-types';
import '../styles/data.css';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{name: 'Crshad', age: 21}, {name: 'Brshad', age: 22}, {name: 'Arshad', age: 39}]
    };
  }

  getUsersList(orderProp) {
    let state = this.state.users.slice().sort((a, b) => {
      const valA = a[orderProp];
      const valB = b[orderProp];

      if(valA < valB) {
        return -1;
      } else if (valA > valB) {
        return 1;
      } else {
        return 0;
      }
    });


    return state.map((e, i) => <li key={i}>{e.name}({e.age})</li>);
  }

  render() {
    const orderProp = this.props.orderBy;
    const users = this.getUsersList(orderProp);

    return (
      <div className='data-wrapper white-bkd-shadow'>
        <h4>All users ordered by {orderProp}</h4>
        <ol>{users}</ol>
      </div>
    );
  }
}

Data.propTypes = {
  orderBy: PropTypes.string.isRequired
};

export default Data;
