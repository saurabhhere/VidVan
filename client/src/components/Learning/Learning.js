import React,{Component} from 'react';
import {Card1,Card2,Card3,Card4,Card5,Card6,Card7,Card8,Card9,Card10,
        Card11,Card12,Card13,Card14,Card15,Card16,Card17,Card18,Card19,Card20,
        Card21,Card22,Card23,Card24,Card25,Card26,Card27,Card28,Card29,Card30,
    Card31,Card32,Card33,Card34,Card35,Card36,Card37,Card38,Card39,Card40} from './Card/Card';
import './Learning.css';
import Carousel from 'react-bootstrap/Carousel';
import Grammar from './Grammar';
import Navbar from '../Navbar/Navbar';


class Learning extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    window.scrollTo(0, 0);
    }

    render(){
        return(
            <div>
                <Navbar />
            <div className="grammar">
            <div className="learnS">कल्पयति येन वृत्तिं येन च लोके प्रशस्यते सद्भिः।<br />
                स गुणस्तेन च गुणिना रक्ष्यः संवर्धनीयश्च॥</div>
            <div className="learnH">स्वाध्याय</div>
            <Carousel>
                <Carousel.Item>
                    <Card1 />
                    <Card2 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card3 />
                    <Card4 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card5/>
                    <Card6 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card7/>
                    <Card8 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card9/>
                    <Card10 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card11 />
                    <Card12 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card13 />
                    <Card14 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card15 />
                    <Card16 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card17 />
                    <Card18 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card19 />
                    <Card20 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card21 />
                    <Card22 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card23 />
                    <Card24 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card25 />
                    <Card26 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card27 />
                    <Card28 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card29 />
                    <Card30/>
                </Carousel.Item>
                <Carousel.Item>
                    <Card31 />
                    <Card32 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card33 />
                    <Card34 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card35 />
                    <Card36 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card37 />
                    <Card38 />
                </Carousel.Item>
                <Carousel.Item>
                    <Card39 />
                    <Card40 />
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="Learning">
            <div className="learnH">व्याकरण</div>
            <Grammar />
            </div>
            </div>
                
           
        )
    }
}

export default Learning;