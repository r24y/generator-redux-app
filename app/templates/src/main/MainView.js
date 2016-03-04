import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class MainView extends Component {
  render() {
    return (<div>
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
    </div>);
  }
}
