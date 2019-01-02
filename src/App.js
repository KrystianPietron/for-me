import React, { Component } from 'react'
import AppBar from './Components/AppBar'
import Head from './Components/Head'
import ForMe from './Components/ForMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Head />
        <ForMe />
      </div>
    );
  }
}

export default App;
