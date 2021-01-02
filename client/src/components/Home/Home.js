import React, { Component } from 'react';
import './Home.css'
import { Link as LinkScroll, animateScroll as scroll} from 'react-scroll';
import {Link as LinkRoute} from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import bookLogo from './icon-book.png';
import gamesLogo from './icon-games.png';
import learnLogo from './icon-learn.png';
import chatLogo from './icon-chatroom.png';
import {FiArrowUp} from 'react-icons/fi'

class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    componentDidMount(){
        window.scrollTo(0, 0);
    
        
        // var Animation = function({ offset } = { offset: 10 }) {
        //     var _elements;
          
        //     var windowTop = offset * window.innerHeight / 100;
        //     var windowBottom = window.innerHeight - windowTop;
        //     var windowLeft = 0;
        //     var windowRight = window.innerWidth;
          
        //     function start(element) {
        //       element.style.animationDelay = element.dataset.animationDelay;
        //       element.style.animationDuration = element.dataset.animationDuration;
        //       element.classList.add(element.dataset.animation);
        //       element.dataset.animated = "true";
        //     }
          
        //     function isElementOnScreen(element) {
        //       var elementRect = element.getBoundingClientRect();
        //       var elementTop =
        //         elementRect.top + parseInt(element.dataset.animationOffset) ||
        //         elementRect.top;
        //       var elementBottom =
        //         elementRect.bottom - parseInt(element.dataset.animationOffset) ||
        //         elementRect.bottom;
        //       var elementLeft = elementRect.left;
        //       var elementRight = elementRect.right;
          
        //       return (
        //         elementTop <= windowBottom &&
        //         elementBottom >= windowTop &&
        //         elementLeft <= windowRight &&
        //         elementRight >= windowLeft
        //       );
        //     }
          
        //     function update() {
        //       _elements = document.querySelectorAll(
        //         "[data-animation]:not([data-animated])"
        //       );
        //       checkElementsOnScreen(_elements);
        //     }
        //     function checkElementsOnScreen(els = _elements) {
        //       for (var i = 0, len = els.length; i < len; i++) {
        //         if (els[i].dataset.animated) continue;
          
        //         isElementOnScreen(els[i]) && start(els[i]);
        //       }
        //     }
          
        //     window.addEventListener("load", update, false);
        //     window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
        //     window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);
          
        //     return {
        //       start,
        //       isElementOnScreen,
        //       update
        //     };
        //   };
          
        //   var options = {
        //     offset: 20 //percentage of window
        //   };
        //   var animation = new Animation(options);
    }

    scrollToTop=()=>{
        scroll.scrollToTop();
    }

    render() {
        return (
            <div className="home-container">
                <section className="cd-section section1">
                    <Navbar />
                    <div className="frontpage-shlok fade-in-shlok">
                        <div className=''>
                            न चोरहार्य न राजहार्य न भ्रतृभाज्यं न च भारकारि।
                            </div>
                        <div className='frontpage-shlok-content'>
                            व्यये कृते वर्धति एव नित्यं विद्याधनं सर्वधनप्रधानम्।।
                            </div>
                        <div className=''>
                            <LinkScroll className="frontpage-start-btn"
                                to="section2-frontpage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}>
                                आरम्भ
                            </LinkScroll>
                        </div>
                    </div>
                </section>
                <section id="section2-frontpage" className="cd-section section2">
                        <div className="frontpage-cards-flex">
                            <LinkRoute to='/learn' className="frontpage-card animatable fadeIn"  data-animation="zoomIn">
                                <img src={learnLogo} className="frontpage-card-logo" />
                                जानाति    
                            </LinkRoute>
                            <LinkRoute to='/game' className="frontpage-card animatable fadeIn"  data-animation="zoomIn" data-animation-delay="300ms">
                                <img src={gamesLogo} className="frontpage-card-logo"/>
                                क्रीडाः
                            </LinkRoute>
                            <LinkRoute to='/chatroom' className="frontpage-card animatable fadeIn"   data-animation="zoomIn" data-animation-delay="600ms">
                                <img src={chatLogo} className="frontpage-card-logo"/>
                                संलपति
                            </LinkRoute>
                            <LinkRoute to='/ebooks' className="frontpage-card animatable fadeIn"   data-animation="zoomIn" data-animation-delay="900ms">
                                <img src={bookLogo} className="frontpage-card-logo" />
                                पुस्तकस्थाम
                            </LinkRoute>
                        </div>
                </section>
                <section className="cd-section section3">
                        <h3 className="frontpage-news-heading">News And Magazines</h3>
                    <div className="news-section-flex">
                    <div>
                    <iframe className="news-iframe" width="620" height="490" src="https://www.youtube.com/embed/videoseries?list=PLxx0m3vtiqMZFiQHDHKnhK6ObQo-Xhr4u&index=1&autoplay=0&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" allowfullscreen ></iframe>
                    </div>
                    <div className="magazine-flex">
                        <div>
                        <a href="https://www.vishvasyavrutantam.com/ENewspaper" target="_blank">
                        <div className="magazine-paper"></div>
                        <div className="magazine-paper-heading">E-newspaper</div>
                        </a>
                        </div>
                        <div className="magazine-row">
                        <a href="http://www.sanskrit.nic.in/news_letters.php" target="_blank"><div id="sanskritavarta" className="magazine"></div>
                        <div className="magazine-heading">संस्कृतावतार</div>
                        </a>
                        <a href="https://www.chandamama.in/sanskrit/sanskrit.php" target="_blank"><div id="chandamama" className="magazine"></div>
                        <div className="magazine-heading">चन्दामामा</div>
                        </a>
                        <a href="http://www.samprativartah.in/" target="_blank"><div id="samprativartah" className="magazine"></div>
                        <div className="magazine-heading">सम्प्रतिवार्ताह्</div>
                        </a>
                        </div>
                    </div>
                    </div>
                </section>
                <div onClick={this.scrollToTop} className="top-button"><FiArrowUp /></div>
            </div>
        )
    }
}

export default Home;