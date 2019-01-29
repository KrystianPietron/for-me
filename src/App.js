import React from 'react'
import Paper from 'material-ui/Paper'
import AppBar from './Components/AppBar'
import Head from './Components/Head'
import ForMe from './Components/ForMe'
import Technologies from './Components/Technologies';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer';
import './App.css'

const App = props => (
  <Paper className="App">
    <AppBar />
    <Head />
    <ForMe />
    <Technologies />
    <Projects />
    <Footer />
  </Paper>
);

export default App;
