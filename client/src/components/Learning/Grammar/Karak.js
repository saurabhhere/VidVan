import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import './gram.css';

class Karak extends Component{
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
                                <h1>कारक प्रकरण </h1>
                                क्रिया को जो करता है अथवा क्रिया के साथ जिसका सीधा अथवा परम्परा से सम्बन्ध होता है, वह ‘कारक’ कहा जाता है। क्रिया के साथ कारकों का साक्षात् अथवा परम्परा से सम्बन्ध किस प्रकार होता है, यह समझाने के लिए यहाँ एक वाक्य प्रस्तुत किया जा रहा है। जैसे-

                <br/>“हे मनुष्याः! नरदेवस्य पुत्रः जयदेवः स्वहस्तेन कोषात् निर्धनेभ्यः ग्रामे धनं ददाति।” (हे मनुष्यो ! नरदेव का पुत्र जयदेव अपने हाथ से खजाने से निर्धनों को गाँव में धन देता है।)

                <br/><br/>यहाँ कारकों और विभक्तियों का सामान्य – परिचय प्रस्तुत किया जा रहा है…
                <br/><br/>
                
                <ol>
                <li><h3>कर्त्ता कारक (प्रथमा विभक्ति)</h3>
                जो क्रिया के करने में स्वतन्त्र होता है, वह कर्ता कहा जाता है ‘स्वतन्त्रः कर्ता’। उक्त कर्त्ता में प्रथमा विभक्ति आती है। जैसे-

रामः पठति
                </li>
                <br/><br/>
                <li><h3>कर्म कारक (द्वितीया विभक्ति)</h3>
                कर्ता क्रियया यं सर्वाधिकम् इच्छति तस्य कर्मसंज्ञा भवति। (कर्तुरीप्सिततमं कर्म।) कर्मणि च द्वितीया विभक्तिः भवति। (कर्मणि द्वितीया) यथा संजीव पास बुक्स (कर्त्ता क्रिया के द्वारा जिसको सबसे अधिक चाहता है, उसकी कर्म संज्ञा होती है तथा कर्म में द्वितीया विभक्ति आती है। जैसे–

रामः ग्रामं गच्छति।
                <br/><br/>
               
                </li>
                <li><h3>करण कारक (तृतीया विभक्ति)</h3>

                “कर्तृकरणयोस्तृतीया” क्रिया की सिद्धि में जो सर्वाधिक सहायक होता है, उस कारक की करण संज्ञा होती है और उसमें तृतीया विभक्ति प्रयुक्त होती है। यथा
                <br/><br/>
                <ul>
                <li>जागृतिः कलमेन लिखति।</li>
                <li>वैशाली: जलेन मुखं प्रक्षालयति।</li>
                <li>रामः दुग्धेन रोटिकां खादति।</li>
                <li>सुरेन्द्रः पादाभ्यां चलति।।</li>
                </ul>
                </li>
                <li><h3>सम्प्रदान कारक (चतुर्थी विभक्ति)</h3>

                “कर्तृकरणयोस्तृतीया” क्रिया की सिद्धि में जो सर्वाधिक सहायक होता है, उस कारक की करण संज्ञा होती है और उसमें तृतीया विभक्ति प्रयुक्त होती है। यथा
                <br/><br/>
                <ul>
                <li>जागृतिः कलमेन लिखति।</li>
                <li>वैशाली: जलेन मुखं प्रक्षालयति।</li>
                <li>रामः दुग्धेन रोटिकां खादति।</li>
                <li>सुरेन्द्रः पादाभ्यां चलति।।</li>
                </ul>
                </li>
                <li><h3>अपादान कारक (पंचमी विभक्ति)</h3>

                ध्रुवमपायेऽपादानम् अपादाने पञ्चमी – पृथक् होने पर जो स्थिर है उसकी अपादान संज्ञा होती है और अपादान में पंचमी विभक्ति प्रयुक्त होती है। यथा-
                <br/>
वृक्षात् पत्रं पतति। (वृक्ष से पत्ता गिरता है।)<br/>
नृपः ग्रामात् आगच्छति। (राजा गाँव से आता है।)
                <br/><br/>
                </li>
                <li><h3>संबंध कारक (षष्ठी विभक्ति)</h3>

                षष्ठी शेषे – सम्बन्ध में षष्ठी विभक्ति प्रयुक्त होती है। यथा-
                <br/>
रमेशः संस्कृतस्य पुस्तकं पठति। (रमेश संस्कृत की पुस्तक पढ़ता है।)
                <br/><br/>
                </li>

                <li><h3>अधिकरण कारक (सप्तमी विभक्ति)</h3>

                आधारोऽधिकरणम् सप्तम्यधिकरणे च – क्रिया की सिद्धि में जो आधार होता है, उसकी अधिकरण संज्ञा होती है और अधिकरण में सप्तमी विभक्ति होती है। यथा-
                <br/>
नृपः सिंहासने तिष्ठति।<br/>
वयं ग्रामे निवसामः।<br/>
तिलेषु तैलं विद्यते।
                <br/><br/>
                </li>
                </ol>
            </div>
            </>
        )
    }
}

export default Karak;