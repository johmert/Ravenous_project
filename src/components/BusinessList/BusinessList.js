import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
        this.props.businesses.map(input =>
        <Business business={input} key ={input.id}/>)
        }
      </div>
    );
  }
};

export default BusinessList;
