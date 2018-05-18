import React, { Component } from 'react';
import star from '../../images/star-icon.png';
import tache from '../../images/tache.png';

class Vocabulary extends Component {
    
    state = {
        index: 0,
        points: 0,
        bad: 0,
        firstRandom: 0,
        secondRandom: 0,
        thirdRandom: 0,
        romaji: false,
    }

    setRandoms = () => {
        this.setState({firstRandom: Math.floor(Math.random() * this.props.dataLength), 
                       secondRandom: Math.floor(Math.random() * this.props.dataLength), 
                       thirdRandom:Math.floor(Math.random() * this.props.dataLength), 
                       index: Math.floor(Math.random() * this.props.dataLength)});
    }
       
    componentWillMount() {
        this.setRandoms();
    }
    
    checkAnswer = (id) => {
        const userAnswer = this.props.words[id]; 
        const correctAnswer = this.props.words[this.state.index]
        if(userAnswer.english === correctAnswer.english){
          let rightAnswer= this.state.points + 1;
          this.setState({points: rightAnswer});
        } else {
          let wrongAnswer = this.state.bad + 1;
          this.setState({bad: wrongAnswer})
        } 
        this.setRandoms();
    }
    
    romajiSwitch = () => {
        if(this.state.romaji) this.setState({romaji: false});
        else this.setState({romaji: true});
    }
    
    render(){
        return (
            <div>
              {this.props.words.length > 0 ? 
                <div>
                    <div className='score'>
                        <span className='scoreFont'><img src={star} width='50' alt='Star'/>{this.state.points === 0 ? null : this.state.points}</span>
                        <button className='romaji' onClick={this.romajiSwitch}>{this.state.romaji ? 'Hiragana' : 'Romaji'}</button>
                        <span className='scoreFont'><img src={tache} width='35' alt='Tache'/> {this.state.bad === 0 ? null : this.state.bad}</span>
                    </div>
                    <h4 className='center leyend'>What's the meaning of this?: </h4>
                    <p className='center reading'>{this.state.romaji ? this.props.words[this.state.index].romaji : this.props.words[this.state.index].kanji === ''  ? '' : this.props.words[this.state.index].japanese}</p>
                    <h3 className='center hiragana' id={this.state.index}>{this.props.words[this.state.index].kanji === '' ? this.props.words[this.state.index].japanese : this.props.words[this.state.index].kanji}</h3>
                    <div className='center'>
                        {this.props.words.map((word) => {
                            const wordIndex = this.props.words.indexOf(word);
                            if(this.state.index === wordIndex || this.state.firstRandom === wordIndex || this.state.secondRandom === wordIndex || this.state.thirdRandom === wordIndex){
                                return  (<div  onClick={() => this.checkAnswer(wordIndex)} className='answer' key={word._id}>
                                          <div>{word.english}</div>
                                        </div>);
                            }
                        })}
                    </div>
                </div> : <div></div>}
            </div>
        );
    }
}

export default Vocabulary;
