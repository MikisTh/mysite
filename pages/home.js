import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import { Box } from '@chakra-ui/react'

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

<Box bg='tomato' w='100%' p={4} color='white'>
  This is the Box
</Box>
