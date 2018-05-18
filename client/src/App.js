import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import japannisimo from './images/Japannisimo.png';
import LessonPolaroid from './components/LessonPolaroids/LessonPolaroid';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Kanji from './components/Kanji/Kanji';
import Practice from './components/Practice/Practice';
import Vocabulary from './components/Vocabulary/Vocabulary';


class App extends Component {

  state = {
    kanjis: [],
    words: [],
    show: false,
  }

  getWords = () => {
    fetch('http://localhost:3000/words/')
    .then(response => response.json())
    .then(data => {
        this.setState({words: data});
    });
  }

  getKanjis = () => {
    fetch('http://localhost:3000/kanjis/')
    .then(response => response.json())
    .then(data => {
        this.setState({kanjis: data});
    });
  }

  componentWillMount(){
    this.getWords();
    this.getKanjis();
  }

  startVocabulary(){
    this.state.show ? this.setState({show: false}) : this.setState({show: true});
  }

  render() {
    return (
      <div>
        <NavBar goHome={() => {this.setState({show: false})}}/>
        {this.state.show ? null : <LessonPolaroid showHide={() => {this.startVocabulary()}}/>}
        {this.state.show ? <Vocabulary dataLength={this.state.words.length} words={this.state.words}/> : null }
        {this.state.show ? <Kanji dataLength={this.state.kanjis.length} kanjis={this.state.kanjis}/> : null }
      </div>
    );
  }
}

export default App;
