import React, { Component } from 'react';
import lesson1 from '../../images/lesson1.jpg';
import lesson2 from '../../images/lesson2.jpg';
import lesson3 from '../../images/lesson3.jpg';
import lesson4 from '../../images/lesson4.jpg';
import lesson5 from '../../images/lesson5.jpg';
import lesson6 from '../../images/lesson6.jpg';
import lesson7 from '../../images/lesson7.jpg';
import lesson8 from '../../images/lesson8.jpg';
import lesson9 from '../../images/lesson9.jpg';
import lesson10 from '../../images/lesson10.jpg';
import lesson11 from '../../images/lesson11.jpg';
import lesson12 from '../../images/lesson12.jpg';
import lesson13 from '../../images/lesson13.jpg';
import lesson14 from '../../images/lesson14.jpg';
import lesson15 from '../../images/lesson15.jpg';


class LessonPolaroid extends Component {
  state = {
    images: [ {url: lesson1, name: 'Lesson 1: Meet & Greet'}, 
              {url: lesson2, name: 'Lesson 2: Objects'},
              {url: lesson3, name: 'Lesson 3: Professions'},
              {url: lesson4, name: 'Lesson 4: Particles'},
              {url: lesson5, name: 'Lesson 5: Te form'},
              {url: lesson6, name: 'Lesson 6: Nai form'},
              {url: lesson7, name: 'Lesson 7: Nationality'}, 
              {url: lesson8, name: 'Lesson 8: Sports'},
              {url: lesson9, name: 'Lesson 9: Food'},
              {url: lesson10, name: 'Lesson 10: Directions'},
              {url: lesson11, name: 'Lesson 11: Hobbies'},
              {url: lesson12, name: 'Lesson 12: Numbers'},
              {url: lesson13, name: 'Lesson 13: Suffixes'},
              {url: lesson14, name: 'Lesson 14: Universe'},
              {url: lesson15, name: 'Lesson 15: Body'} ],
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((img, index) => {
            return (
              <div key={index} onClick={() => {this.props.showHide()}} className="polaroid">
                <img className="lesson" src={img.url}/>
                <div className="container">
                  <p><b>{img.name}</b></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      );
  }

};

export default LessonPolaroid;
