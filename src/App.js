import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import AvatarSelect from './containers/AvatarSelect';
import Base from './containers/Base';

class App extends Component {
//   constructor(props) {
//       super(props)

//       this.state = {data: null};
//   }

//   componentDidMount() {
//     this._getData();
//   }


//  _getData = () => {
//     fetch("http://localhost:5582/api/game")
//     .then(response => {
//         if (response.ok) {
//         return response;
//       } else {
//         let errorMessage = "something broke", error = new Error(errorMessage);
//         throw(error);
//       }
//     })
//     .then(response => response.json())
//     .then(json =>{
//         console.log("adding" + json);
//         this.setState({ data: json})
//     });
//   }

  // callBackendAPI = async () => {
  //   try {
  //   const response = await fetch('http://localhost:5582/api/game');
  //   const body = await response.json();
  //   console.log(body);
  //   this.setState({data: body});
  //   } catch (err) {
  //     console.error(err);
  //   }

    // if (response.status !== 200) {
    //   throw Error(body.message) 
    // }
    // return body;
  //}

  state = {
    game: [
      {id: 0, players: [
        {name: "Jack",avatar: 0},
        {name: "Jill", avatar: 3}
      ], baseLevel: 2, xp: 500}
    ]
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <div className="content-section">
              <Route exact path="/" component={Home} />
              <Route path="/avatar-select" render={( props ) => <AvatarSelect {...props} data={this.state.data}/>} />
              <Route path="/base" render={( props ) => <Base {...props} data={this.state.data}/>} />
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
