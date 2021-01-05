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
    
    componentDidMount(){
        window.scrollTo(0, 0);
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
                                <img src={learnLogo} alt="learn-logo" className="frontpage-card-logo" />
                                अध्ययन    
                            </LinkRoute>
                            <LinkRoute to='/game' className="frontpage-card animatable fadeIn"  data-animation="zoomIn" data-animation-delay="300ms">
                                <img src={gamesLogo} alt="games-logo" className="frontpage-card-logo"/>
                                क्रीडा परीक्ष् च
                            </LinkRoute>
                            <LinkRoute to='/chatroom' className="frontpage-card animatable fadeIn"   data-animation="zoomIn" data-animation-delay="600ms">
                                <img src={chatLogo} alt="Chatroom-logo" className="frontpage-card-logo"/>
                                संलप्-कक्षः
                            </LinkRoute>
                            <LinkRoute to='/ebooks' className="frontpage-card animatable fadeIn"   data-animation="zoomIn" data-animation-delay="900ms">
                                <img src={bookLogo} alt="eBooks-logo" className="frontpage-card-logo" />
                                ई-पुस्तकम्
                            </LinkRoute>
                        </div>
                </section>
                <section className="cd-section section3">
                        <h3 className="frontpage-news-heading">प्रसारमाध्यमानि वार्ताश्च </h3>
                    <div className="news-section-flex">
                    <div>
                    <iframe className="news-iframe" width="620" height="490" src="https://www.youtube.com/embed/videoseries?list=PLxx0m3vtiqMZFiQHDHKnhK6ObQo-Xhr4u&index=1&autoplay=0&mute=1" title="Sanskrit-news" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen" allowfullscreen ></iframe>
                    </div>
                    <div className="magazine-flex">
                        <div className="e-newspaper">
                        <a href="https://www.vishvasyavrutantam.com/ENewspaper" rel="noreferrer" target="_blank">
                        <div className="magazine-paper"></div>
                        <div className="magazine-paper-heading">E-newspaper</div>
                        </a>
                        </div>
                        <div className="magazine-row">
                        <div className="e-newspaper">
                        <a href="http://www.sanskrit.nic.in/news_letters.php" rel="noreferrer" target="_blank"><div id="sanskritavarta" className="magazine"></div>
                        <div className="magazine-heading">संस्कृतावतार</div>
                        </a></div>
                        <div className="e-newspaper">
                        <a href="https://www.chandamama.in/sanskrit/sanskrit.php" rel="noreferrer" target="_blank"><div id="chandamama" className="magazine"></div>
                        <div className="magazine-heading">चन्दामामा</div>
                        </a> </div>
                        <div className="e-newspaper">
                        <a href="http://www.samprativartah.in/" rel="noreferrer" target="_blank"><div id="samprativartah" className="magazine"></div>
                        <div className="magazine-heading">सम्प्रतिवार्ताह्</div>
                        </a></div>
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