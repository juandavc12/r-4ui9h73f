import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor() {
  super();

  this.state = 
  { value : ""};
}

update (e) {
  this.setState ({
    value : e.target.value
  });
}

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" value={this.state.value} onChange={this.update.bind(this)}/>
        <p className="repeater" >{this.state.value}</p>        
      </div>
    );
  }
}
export default App;
