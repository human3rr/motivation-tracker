import React, { Component } from 'react';
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

class DateTime extends Component {
  render() {
    let todayDate = new Date();

    return (
      <h1>
      {days[todayDate.getDay()]} ~ {todayDate.toLocaleDateString()} ~ {this.props.time}
      </h1>
    );
  }

}

export default DateTime;
