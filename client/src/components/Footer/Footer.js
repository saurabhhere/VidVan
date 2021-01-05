import React, { Component } from 'react';
import './Footer.css';
import {AiFillYoutube, AiOutlineTwitter, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
class Footer extends Component {

    render() {
        return (
            <div className="footer-container">
                <div className="footer-flex">
                    <div className="visiterCount">
                        <div className="visiterCountHeadline">
                            Visitors
                        </div>
                        <div className="visiterCountContent">
                        <img src="https://hitwebcounter.com/counter/counter.php?page=7734976&style=0005&nbdigits=8&type=page&initCount=1000" Alt="Visitors"   border="0" />
                        </div>
                    </div>
                    <div className="contact-us">
                        <div className="contact-us-headline">Contact us</div>
                        <div className="contact-us-content">
                            IIT Roorkee
                    </div>
                        <div className="contact-us-content">
                            Roorkee
                    </div>
                        <div className="contact-us-content">
                            Uttarakhand
                    </div>
                        <div className="contact-us-content">
                            247667
                    </div>
                    </div>
                </div>
                <div className='footer-icon-flex'>
                    <div id="instagram-logo" className='footer-icon'>
                        <AiFillInstagram />
                    </div>
                    <div id="facebook-logo" className='footer-icon'>
                        <AiFillFacebook />
                    </div>
                    <div id="twitter-logo" className='footer-icon'>
                        <AiOutlineTwitter />
                    </div>
                    <div id="youtube-logo" className='footer-icon'>
                        <AiFillYoutube />
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;