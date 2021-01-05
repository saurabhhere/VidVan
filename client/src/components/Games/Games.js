import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {animateScroll as scroll} from 'react-scroll';
import Navbar from '../Navbar/Navbar';
import {FiArrowUp} from 'react-icons/fi'
import './Games.css';

class GameMenu extends Component{

    scrollToTop=()=>{
        scroll.scrollToTop();
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <>
            <div className="menubg">
            <Navbar />
                <section className="hero-section">
                    <div className="card-gridM">
                        <Link to="/game/memorygame" className="cardM" >
                        <div className="card__backgroundM " style={{backgroundImage: "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"}}></div>
                        <div className="card__contentM">
                            <h3 className="card__headingM">Memory Game</h3>
                        </div>
                        </Link>
                        <Link to="/game/quiz/rules" className="cardM" >
                        <div className="card__backgroundM" style={{backgroundImage: "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)"}} ></div>
                        <div className="card__contentM">
                            <h3 className="card__headingM">Quizzes</h3>
                        </div>
                        </Link>
                    </div>
                </section> 
                <div onClick={this.scrollToTop} className="top-button"><FiArrowUp /></div>
            </div>
            </>
        )
    }
}

export default GameMenu;