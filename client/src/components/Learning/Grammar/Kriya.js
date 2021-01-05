import React,{Component} from 'react';
import Navbar from '../../Navbar/Navbar';
import './gram.css';

class Kriya extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="gramTop">
            <Navbar />
            <div className="foo">
               <h1 className="paragraph">क्रिया </h1>
               <table border="2"><tbody><tr><td  ><strong>क्र.सं.</strong></td><td colSpan="2"><strong>धातु क्रियापद (वर्तमान काल)</strong></td><td  ><strong>अर्थ</strong></td></tr><tr><td  >1.</td><td  >&nbsp;अट्</td><td  >&nbsp;अटति</td><td  >&nbsp;घूमता है</td></tr><tr><td  >2.</td><td  >&nbsp;अत्</td><td  >&nbsp;अतति</td><td  >&nbsp;घूमता है</td></tr><tr><td  >3.</td><td  >&nbsp;अ</td><td  >&nbsp;अर्चयति</td><td  >&nbsp;पूजा करता है</td></tr><tr><td  >4.</td><td  >&nbsp;अर्ज़</td><td  >&nbsp;अर्जयति</td><td  >&nbsp;कमाता है</td></tr><tr><td  >5.</td><td  >&nbsp;अव + गम्</td><td  >&nbsp;अवगच्छति</td><td  >&nbsp;समझता है</td></tr><tr><td  >6.</td><td  >&nbsp;अधि + गम्</td><td  >&nbsp;अधिगच्छति</td><td  >&nbsp;प्राप्त करता है</td></tr><tr><td  >7.</td><td  >&nbsp;अनु + गम्</td><td  >&nbsp;अनुगच्छति</td><td  >&nbsp;पीछे पीछे चलता है</td></tr><tr><td  >8.</td><td  >&nbsp;अति + चर्</td><td  >&nbsp;अतिचरति</td><td  >&nbsp;उल्लंघन करता है</td></tr><tr><td  >9.</td><td  >&nbsp;अभि + चर्</td><td  >&nbsp;अभिचरति</td><td  >&nbsp;घात करता है</td></tr><tr><td  >10.</td><td  >&nbsp;अनु + चर्</td><td  >&nbsp;अनुचरति</td><td  >&nbsp;सेवा करता है</td></tr><tr><td  >11.</td><td  >&nbsp;अप + सृ + चर्</td><td  >&nbsp;अपसारयति</td><td  >&nbsp;हटाता है</td></tr><tr><td  >12.</td><td  >&nbsp;उप + कृ</td><td  >&nbsp;उपकरोति</td><td  >&nbsp;उपकार करता है</td></tr><tr><td  >13.</td><td  >&nbsp;अव + मन्</td><td  >&nbsp;अवमानवर्ति</td><td  >&nbsp;अपमान करता है</td></tr><tr><td  >14.</td><td  >&nbsp;अनु + तप्</td><td  >&nbsp;अनुतपति</td><td  >पश्चाताप करता है</td></tr><tr><td  >15.</td><td  >&nbsp;अनु + लप्</td><td  >&nbsp;अनुलपति</td><td  >&nbsp;इन्कार करता है</td></tr><tr><td  >16.</td><td  >&nbsp;अव + तृ</td><td  >&nbsp;अवतरति</td><td  >&nbsp;उतरता है</td></tr><tr><td  >17.</td><td  >&nbsp;अनु + धाव्</td><td  >&nbsp;अनुधावति</td><td  >&nbsp;पीछा करता है</td></tr><tr><td  >18.</td><td  >&nbsp;अद्</td><td  >&nbsp;अत्ति</td><td  >&nbsp;खाता है</td></tr><tr><td  >19.</td><td  >&nbsp;अर्प</td><td  >&nbsp;अर्पयति</td><td  >&nbsp;अर्पित करता है</td></tr><tr><td  >20.</td><td  >&nbsp;अर्ह</td><td  >&nbsp;अर्हयति</td><td  >&nbsp;पूजा करता है</td></tr><tr><td  >21.</td><td  >&nbsp;आ + तृ</td><td  >&nbsp;आतरति</td><td  >&nbsp;नाव से पार करता है</td></tr><tr><td  >22.</td><td  >&nbsp;आ + चर्</td><td  >&nbsp;आचरति</td><td  >&nbsp;आचरण करता है</td></tr><tr><td  >23.</td><td  >&nbsp;आ + गम्</td><td  >&nbsp;आगच्छति</td><td  >&nbsp;आता है</td></tr><tr><td  >24.</td><td  >&nbsp;आ + नी</td><td  >&nbsp;आनयति</td><td  >&nbsp;लाता है</td></tr><tr><td  >25.</td><td  >&nbsp;आ + कृ + णिच्</td><td  >&nbsp;आकारयति</td><td  >&nbsp;बुलाता है</td></tr><tr><td  >26.</td><td  >&nbsp;आ + कृष्</td><td  >&nbsp;आकर्षति</td><td  >&nbsp;खींचता है</td></tr><tr><td  >27.</td><td  >&nbsp;आ + दिश्</td><td  >&nbsp;आदिशति</td><td  >&nbsp;आज्ञा देता है</td></tr><tr><td  >28.</td><td  >&nbsp;अद् + णिच्</td><td  >&nbsp;आदयति</td><td  >&nbsp;खिलाता है</td></tr><tr><td  >29.</td><td  >&nbsp;आ + कृ + णिच्।</td><td  >&nbsp;शाकारयति</td><td  >&nbsp;बुलाता है</td></tr><tr><td  >30.</td><td  >&nbsp;इष</td><td  >&nbsp;इच्छति</td><td  >&nbsp;चाहता है</td></tr><tr><td  >31.</td><td  >&nbsp;इक्ष्</td><td  >&nbsp;इक्षते</td><td  >&nbsp;देखता है</td></tr><tr><td  >32.</td><td  >&nbsp;उत् + गम्</td><td  >&nbsp;उद्गच्छति</td><td  >&nbsp;उड़ता है</td></tr></tbody></table>
            </div>
            </div>
        )
    }
}

export default Kriya;