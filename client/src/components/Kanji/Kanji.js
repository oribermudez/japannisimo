import React, { Component } from 'react';

class Kanji extends Component {

  render() {
    return (
      <div>
        {this.props.dataLength > 0 ? 
            <div className="kanji-container">
                {this.props.kanjis.map((kanji) => {
                    return (
                        <div className="card" key={kanji._id}>
                            <span className="kanji"><b>{kanji.kanji}</b></span>
                            <div className="kanji-meaning"><b>{kanji.meaning.english}</b></div>
                            <div className="kanji-readings">
                            <div><span className="pink">Kun:</span> <b>{kanji.kunyomi.map((kun, index) => {
                                return index < kanji.kunyomi.length - 1 ? kun + ", " : kun;
                            })}</b></div>
                            {kanji.examplesKun.map(example => {
                                return (
                                    <ul>
                                        <span className="kunsAndOns">{example.kun}</span>
                                        <li><b>{example.kanji}</b>: {example.english}</li>
                                    </ul>);
                            })}
                            <div><span className="pink">On:</span>  <b>{kanji.onyomi.map((on, index) => {
                                return index < kanji.onyomi.length - 1 ? on + ", " : on;
                            })}</b></div>
                            {kanji.examplesOn.map(example => {
                                return (
                                    <ul>
                                        <span className="kunsAndOns">{example.on}</span>
                                        <li><b>{example.kanji}</b>: {example.english}</li>
                                    </ul>);
                            })}
                            </div>
                        </div>
                    );
                })}
            </div> : <div></div>
        }
        </div>
      );
  }

};

export default Kanji;
