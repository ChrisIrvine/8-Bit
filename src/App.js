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
      // .then(res => this.setState({ data: res.express }))
      // .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    try {
    const response = await fetch('http://localhost:5582/api/game');
    const body = await response.json();
    console.log(body);
    this.setState({data: body});
    } catch (err) {
      console.error(err);
    }

    // if (response.status !== 200) {
    //   throw Error(body.message) 
    // }
    // return body;
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
