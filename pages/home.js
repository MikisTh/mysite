import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Foo extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Clicado');
  }
  render() {
    return <button onClick={this.handleClick}>Clique em mim!</button>;
  }
}
