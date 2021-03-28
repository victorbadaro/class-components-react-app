import { Component } from 'react';
import { RepositoryList } from './components/RepositoryList';

import './styles/global.css';

export class App extends Component {
  render() {
    return (
      <>
        <h1>Hello, Class Components!</h1>
        <RepositoryList />
      </>
    );
  }
}