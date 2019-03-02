import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import AvatarSelect from './containers/AvatarSelect';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/icebreaker-game/">
            <div className="content-section">
              <Route exact path="/" component={Home} />
              <Route path="/avatar-select" component={AvatarSelect} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
