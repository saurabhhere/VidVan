import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar';
import './Result.css';

class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: localStorage.getItem('mostRecentScore'),
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0);
      }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <>
            <Navbar />
            <div className="quiz-result-container">
                <div id="end" className="flex-center flex-column">
                    <h1 id="finalScore">{this.state.score}</h1>
                        <h2 id="end-text">Your score</h2>
                    <Link to="/game/quiz/rules" id="playAgainBtn" className="result_btn">Play Again</Link>
                    <Link to="/learn" id="goHomeBtn" className="result_btn">Go Home</Link>
                </div>
            </div>
            </>
        );
    }
}

export default Result;
