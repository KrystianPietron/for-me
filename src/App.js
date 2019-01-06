import React from 'react'
import Paper from 'material-ui/Paper'
import AppBar from './Components/AppBar'
import Head from './Components/Head'
import ForMe from './Components/ForMe'
import Technologies from './Components/Technologies';
import Projects from './Components/Projects/Projects';
import Foother from './Components/Foother';
import './App.css'

const App = props => (
  <Paper className="App">
    <AppBar />
    <Head />
    <ForMe />
    <Technologies />
    <Projects />
    <Foother />
  </Paper>
);

export default App;
