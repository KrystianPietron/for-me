import React, { Component } from 'react'
import AppBar from './Components/AppBar'
import Head from './Components/Head'
import ForMe from './Components/ForMe'
import Technologies from './Components/Technologies';
import Projects from './Components/Projects/Projects';
import Foother from './Components/Foother';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Head />
        <ForMe />
        <Technologies />
        <Projects />
        <Foother />
      </div>
    );
  }
}

export default App;
