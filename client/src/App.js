import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import japannisimo from './images/Japannisimo.png';
import LessonPolaroid from './components/LessonPolaroids/LessonPolaroid';
import NavBar from './components/NavBar/NavBar';
import Vocabulary from './components/Vocabulary/Vocabulary';


class App extends Component {

  state = {
    words:[],
    show: false,
  }

  getData = () => {
    fetch('http://localhost:3000/words/')
    .then(response => response.json())
    .then(data => {
        this.setState({words: data});
    });
  }

  componentWillMount(){
    this.getData();
  }

  startLesson(){
    this.state.show ? this.setState({show: false}) : this.setState({show: true});
  }

  render() {
    return (
      <div>
        <NavBar goHome={() => {this.setState({show: false})}}/>
        {this.state.show ? null : <LessonPolaroid showHide={() => {this.startLesson()}}/>}
        {this.state.show ? <Vocabulary words={this.state.words}/> : null }
      </div>
    );
  }
}

export default App;
