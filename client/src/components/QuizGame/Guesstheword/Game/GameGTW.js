import React, { Component } from 'react';
import Navbar from '../../../Navbar/Navbar';
import './GameGTW.css';
import questions from './QuestionsGTW';
const keys = require('../../../../urls');

class GameGTW extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: '',
            acceptingAnswers: true,
            score: 0,
            availableQuestions: [],
            timeLeft: ''
        }
        this.questions = questions;
        this.SCORE_POINTS = 10;
        this.startGame();
        setTimeout('this.preback', 0);
    }

    preback() {
        window.history.forward();
    }


    startGame = () => {
        this.state.score = 0;
        this.state.availableQuestions = [...this.questions];
        this.state.timeLeft = '60'
        this.getTimer();
        this.getNewQuestion();
    }

    stopGame = () => {
        localStorage.setItem('mostRecentScore', this.state.score)
        return window.location.assign('/game/quiz/result')
    }

    getNewQuestion = () => {
        if (this.state.availableQuestions.length === 0) {
            this.stopGame()
        }

        const questionsIndex = Math.floor(Math.random() * this.state.availableQuestions.length)
        this.state.currentQuestion = this.state.availableQuestions[questionsIndex];

        this.state.availableQuestions.splice(questionsIndex, 1);
        this.setState({
            acceptingAnswers: true
        })
    }

    checkAnswer = (e) => {
        if (!this.state.acceptingAnswers) return
        this.state.acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == this.state.currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            this.incrementScore(this.SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            this.getNewQuestion()
        }, 300)
    }

    incrementScore = num => {
        this.state.score += num;
    }

    getTimer = () => {
        var totalTime = 60;
        setInterval(() => {
            totalTime--
            this.setState({
                timeLeft: totalTime
            })
            if (this.state.timeLeft < 1) {
                this.stopGame()
            }
        }, 1000)
    }

    render() {


        return (
            <div>
            <Navbar />
                <div className="game-gtw-container">
                    <div id="game" className="justify-center flex-column">
                        <div id="hud">
                            <div className="hud-item">
                                <p id="progressText" className="hud-prefix">
                                    Time Left: {this.state.timeLeft}s
                    </p>
                            </div>
                            <div className="hud-item">
                                <p className="hud-prefix">
                                    Score
                    </p>
                                <h1 className="hud-main-text" id="score">
                                    {this.state.score}
                                </h1>
                            </div>
                        </div>
                        {/* <div className='time_line'>.</div> */}
                        <h1 className="" id="question">{this.state.currentQuestion.question}</h1>
                        <div className="quiz-gtw-content-flex">
                        <div>
                        <img src={this.state.currentQuestion.imgSrc} className="choice-image"/>
                        </div>
                        <div className="quiz-gtw-options-flex">
                        <div className="choice-container">
                            <p className="choice-prefix">A</p>
                            <p className="choice-text" data-number="1" onClick={this.checkAnswer}>{this.state.currentQuestion.choice1}</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">B</p>
                            <p className="choice-text" data-number="2" onClick={this.checkAnswer}>{this.state.currentQuestion.choice2}</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">C</p>
                            <p className="choice-text" data-number="3" onClick={this.checkAnswer}>{this.state.currentQuestion.choice3}</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">D</p>
                            <p className="choice-text" data-number="4" onClick={this.checkAnswer}>{this.state.currentQuestion.choice4}</p>
                        </div>
                        </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}

export default GameGTW;
