import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'

import store from './store'

import Bots from './Components/Bots';
import Chatbot from './Components/Chatbot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="contenu">
          <Bots />
          <Chatbot />
        </div>
      </Provider>

    );
  }
}

export default App;
