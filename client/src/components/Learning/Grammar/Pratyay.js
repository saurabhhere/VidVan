import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import './gram.css';

class Pratyay extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <>
            <Navbar />
            <div className="foo">
                                <h1>प्रत्यय</h1>
                                धातु अथवा प्रातिपदिक के बाद जिनका प्रयोग किया जाता है, उन्हें प्रत्यय कहते हैं।
                <br/><br/>
                
                <ol>
                <li><h3>कृत् प्रत्ययाः</h3>
                जिन प्रत्ययों का प्रयोग धातु (क्रिया) के बाद किया जाता है, वे कृत् प्रत्यय कहलाते हैं। यथा–
                <ul>
                <li> कृ + तव्यत् = कर्त्तव्यम्</li>
                <li>पठ् + अनीयर् = पठनीयम्</li>
                </ul>
                </li>
                <br/><br/>
                <li><h3>तद्धित प्रत्ययाः</h3>
                जिन प्रत्ययों का प्रयोग संज्ञा, सर्वनाम आदि शब्दों के बाद किया जाता है, वे तद्धित प्रत्यय कहलाते हैं।
                <br/><br/>
                <ul>
                <li> शिव + अण् = शैवः</li>
                <li>दशरथ + इञ् = दाशरथिः</li>
                </ul>
                </li>
                <br/><br/>
                <li><h3>स्त्री प्रत्यया:</h3>

                जिन प्रत्ययों का प्रयोग पुल्लिंग शब्दों को स्त्रीलिंग में परिवर्तित करने के लिए किया जाता है, वे स्त्री प्रत्यय कहलाते हैं।
                <br/><br/>
                <ul>
                <li> कुमार + ङीप् = कुमारी</li>
                <li>अज + टाप् = अजा</li>
                </ul>
                </li>
                </ol>
            </div>
            </>
        )
    }
}

export default Pratyay;