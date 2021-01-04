import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import './Rules.css';

class Rules extends Component {


  constructor(props) {
    super(props)
    setTimeout(() => { window.history.forward() }, 0);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="quiz-rules-container">
          <div className="game-rules-pic">
            <div id="" className='rule'>
              <div className="info-title"><span className="rules_heading">Some Rules of this Quiz</span></div>
              <div className="info-list">
                <div className="info">1. You will have only <span className="ruleTime">60 seconds</span> total.</div>
                <div className="info">2. Once you select your answer, it can't be undone.</div>
                <div className="info">3. You can't exit from the Quiz while you're playing.</div>
                <div className="info">4. You'll get 10 points on each of your correct answers.</div>
              </div>
              <div className="rules-buttons">
                <Link to='/game' className="quit">Exit Quiz</Link>
                <Link to='/game/quiz/guesstheword/play' className="continue">Guess the word Quiz</Link>
                <Link to='/game/quiz/gk/play' className="continue">GK Quiz</Link>
                <Link to='/game/quiz/meaning/play' className="continue">Word Meaning</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Rules;
