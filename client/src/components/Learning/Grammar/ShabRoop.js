import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Navbar from '../../Navbar/Navbar';
import './gram.css';

class ShabRoop extends Component{
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
               <h1>शब्द रूप</h1>
               <p className="paragraph">सुबन्त-प्रकरण में मूल शब्द या मूल धातु का प्रयोग वाक्यों में नहीं होता है। वहाँ मूल शब्द को प्रातिपदिक कहते हैं, किन्तु हर शब्द की प्रातिपदिक संज्ञा (प्रातिपदिक नाम) नहीं होती है। प्रातिपदिक संज्ञा करने के लिए महर्षि पाणिनि ने दो सूत्र लिखे हैं –</p><p className="paragraph">(१) अर्थवदधातुरप्रत्ययः प्रातिपदिकम् – वैसे शब्द की प्रातिपदिक संज्ञा होती है जो अर्थवान् (सार्थक) हो, किन्तु धातु या प्रत्यय नहीं हों।<br/> (२) कृत्तद्धितसमासाश्चर — कृत्प्रत्ययान्त (धातु के अन्त में जहाँ ‘तव्यत्’, ‘अनीयर’, ‘ण्वुल’, ‘तृच’ आदि कृत्प्रत्यय लगे हों) तद्वितप्रत्ययान्त (शब्द के अन्त में जहाँ ‘घञ्’, ‘अण’ आदि तद्धित प्रत्यय हों) तथा समास की भी प्रातिपदिक संज्ञा होती है।</p><p className="paragraph">इन प्रातिपदिकसंज्ञक शब्दों के अन्त में सु, औ, जस् आदि २१ सुप् विभक्तिर्यां लगती हैं, तब वह सुबन्त होता है और उसकी पदसंज्ञा होती है। इन पदों का ही वाक्यों में प्रयोग होता है, क्योंकि जो पद नहीं होता है उसका प्रयोग वाक्यों में नहीं होता है – ‘अपदं न प्रयुञ्जीत’।</p>
               <p className="paragraph">संस्कृत भाषा में विभक्तियाँ होती हैं तथा प्रत्येक विभक्ति में एकवचन, द्विवचन और बहुवचन में अलग-अलग रूप होने पर २१ रूप होते हैं। ये सुप् कहे जाते हैं। सुप में ‘सु’ से आरम्भ कर ‘प्’ तक २१ प्रत्यय (विभक्ति) हैं, जो अग्रलिखित हैं –</p><p className="paragraph">मोटे तौर पर ये सात विभक्तियाँ क्रमशः कर्ता, कर्म आदि ७ कारकों का बोधक होती हैं (सब जगह ऐसा नहीं होता है)। सम्बोधन कारक में प्रथमा विभक्ति होती है, किन्तु एकवचन में थोड़ा-सा अन्तर रहता है। उदाहरण के लिए प्रातिपदिक (शब्द) में सुप् प्रत्यय लगाकर बने पदों की कारक के अनुसार अर्थयुक्त तालिका आगे प्रस्तुत है-</p><ul><li id="tw-target-text" class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation">
              <span lang="hi">बालक </span>
               </li>
               <li >अजन्त (स्वरान्त) शब्द</li>
               <li >देवं (देवता) – अकारान्त पुंल्लिंग</li>
               <li >भवादृश (आप जैसा) अकारान्त पुंल्लिंग</li>
               <li >भवादृशी (आप जैसी) ईकारान्त स्त्रीलिंग</li>
               <li>विश्वपा (संसार का रक्षक) आकारान्त पुंल्लिंग</li>
               <li >हाहा (एक गन्धर्व, शोक, विलाप) आकारान्त पुंल्लिंग</li>
               <li >मुनि (मुनि या तपस्वी) इकारान्त पुंल्लिंग</li>
               <li>पति (स्वामी) इकारान्त पुंल्लिंग</li>
               <li >भूपति (राजा) इकारान्त पुंल्लिंग</li>
               <li>सखि (सखा, मित्र) इकारान्त पुंल्लिंग</li>
               <li 
               >सुधी (बुद्धिमान, पण्डित) ईकारान्त पुंल्लिंग</li><li >साधु (साधु या सज्जन) उकारान्त पुंल्लिंग</li><li >प्रतिभू (जमानतदार) ऊकारान्त पुंल्लिंग</li><li >दातृ(देनेवाला, दानी) ऋकारान्त पुंल्लिंग</li><li class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"><a href="https://www.aplustopper.com/pitr-shabd-roop-in-sanskrit/">पितृ</a> (पिता) ऋकारान्त पुंल्लिंग</li><li class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"><a href="https://www.aplustopper.com/nra-shabd-roop-in-sanskrit/">नृ</a> (मनुष्य) ऋकारान्त पुंल्लिंग</li><li class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"><a href="https://www.aplustopper.com/ray-shabd-roop-in-sanskrit/">रै</a> (धन) ऐकारान्त पुंल्लिंग</li><li class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"><a href="https://www.aplustopper.com/glau-shabd-roop-in-sanskrit/">ग्लो</a> (चन्द्रमा) औकारान्त पुंल्लिंग</li><li class="tw-data-text tw-text-large XcVN5d tw-ta" dir="ltr" data-placeholder="Translation"><a href="https://www.aplustopper.com/go-gau-shabd-roop-in-sanskrit/">गो</a> (गाय, बैल, साँढ़, किरण, पृथ्वी, वाणी आदि) ओकारान्त पुंल्लिंग</li></ul><h3>अजन्त स्त्रीलिंग संज्ञा शब्द</h3><ul><li><a href="https://www.aplustopper.com/lata-shabd-roop-in-sanskrit/">लता</a> (लता या वल्लरी) आकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/mati-shabd-roop-in-sanskrit/">मति</a> (बुद्धि) इकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/nadi-shabd-roop-in-sanskrit/">नदी</a> (नदी) ईकारान्त स्त्रीलिंग</li></ul><p className="paragraph">कुछ ईकारान्त स्त्रीलिंग संज्ञा शब्दों के रूप नदी के समान होते हैं, किन्तु प्रथमा विभक्ति के एकवचन में उनका रूप विसर्गान्त होता है। जैसे – तन्त्रीः (वीणा के तार), तरीः (नौका), लक्ष्मीः (शोभा, सम्पत्ति) अवीः (रजस्वला स्त्री) आदि।</p><ul><li><a href="https://www.aplustopper.com/shree-shabd-roop-in-sanskrit/">श्री</a> (लक्ष्मी, शोभा, सम्पत्ति) ईकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/stree-shabd-roop-in-sanskrit/">स्त्री</a> (महिला, नारी) ईकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/dhenu-shabd-roop-in-sanskrit/">धेनु</a> (गाय) उकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/vadhu-shabd-roop-in-sanskrit/">वधू</a> (बहू) ऊकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/bhoo-shabd-roop-in-sanskrit/">भू</a> (भूमि, पृथ्वी) ऊकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/matra-mata-shabd-roop-in-sanskrit/">मातृ</a> (माता) ऋकारान्त स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/swasr-shabd-roop-in-sanskrit/">स्वसृ</a> (बहन) ऋकारान्त स्त्रीलिंग</li><li>नौ (नाव) औकारान्त स्त्रीलिंग</li></ul><h3>अजन्त नपुंसकलिंग संज्ञा शब्द</h3><ul><li><a href="https://www.aplustopper.com/fal-shabd-roop-in-sanskrit/">फल</a> (फल) अकारान्त नपुंसकलिंग</li><li><a href="https://www.aplustopper.com/vari-shabd-roop-in-sanskrit/">वारि</a> (जल) इकारान्त नपुंसक या क्लीव लिंग</li><li><a href="https://www.aplustopper.com/dadhi-shabd-roop-in-sanskrit/">दधि</a> (दही) इकारान्त नपुंसकलिंग</li><li><a href="https://www.aplustopper.com/madhu-shabd-roop-in-sanskrit/">मधु</a> (शहद) उकारान्त नपुंसकलिंग</li><li>कर्तृ (करने वाला) ऋकारान्त नपुंसकलिंग</li><li>हलन्त (व्यञ्जनान्त) शब्द</li><li>भूभृत् (राजा, पहाड़) पुँल्लिंग</li><li><a href="https://www.aplustopper.com/suhrad-shabd-roop-in-sanskrit/">सुहृद्</a> (मित्र, सज्जन) पुँल्लिंग</li><li>वणिज् (वणिक् = बनिया) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/samraj-shabd-roop-in-sanskrit/">सम्राज्</a> (सम्राट् = राजाओं का राजा) पुँल्लिंग</li><li>श्रीमत् (श्रीमान्) पुँल्लिंग</li><li>राजन् (राजा) पुँल्लिंग</li><li>महिमन् (महिमा) पुँल्लिंग</li><li>महत (महान-बड़ा) पुँल्लिग</li><li>अर्वन् (घोड़ा) पुँल्लिंग</li><li>हस्तिन (हाथी) पल्लिग</li><li><a href="https://www.aplustopper.com/maghavan-shabd-roop-in-sanskrit/">मघवन्</a> (मघवा = इन्द्र) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/swan-shabd-roop-in-sanskrit/">श्वन्</a> (श्वा = कुत्ता) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/yuvan-yuvak-shabd-roop-in-sanskrit/">युवन्</a> (जवान पुरुष) पुँल्लिंग</li><li><a href="https://www.aplustopper.com/pathin-shabd-roop-in-sanskrit/">पथिन्</a> शब्द के रूप</li><li>गुणिन् (गुणी मनुष्य) पुंल्लिंग</li><li>आत्मन् (आत्मा) पुंल्लिंग</li><li>भू+ शतृ = भवत् (होता हुआ या हो रहा) पुंल्लिंग</li><li>भू + शतृ = भवत् का स्त्रीलिंग रूप भवन्ती (होती हुई)</li><li>भू + शतृ = भवत् (होता हुआ, हो रहा) नपुं०</li></ul><h3>शतृप्रत्ययान्त</h3><ul><li>पठ् + शतृ = पठत् (पढ़ता हुआ या पढ़ रहा) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/vedhas-shabd-roop-in-sanskrit/">वेधस्</a> (ब्रह्मा) पुँल्लिंग</li><li>श्रेयस् (अधिक प्रशंसनीय) पुँल्लिंग</li><li>दोस् (भुजा) पुँल्लिंग</li><li>द्विष् (शत्रु) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/pumas-pums-shabd-roop-in-sanskrit/">पुम्स्</a> (पुरुष) पुंल्लिंग</li><li><a href="https://www.aplustopper.com/vidvas-vidwan-shabd-roop-in-sanskrit/">विद्वस्</a> (विद्वान् = विद्यावान्) पुँल्लिंग</li><li>हलन्त (व्यञ्जनान्त) स्त्रीलिंग शब्द</li><li>वाच् (वाणी) स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/gir-shabd-roop-in-sanskrit/">गिर</a> (वाणी) स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/dik-dish-disha-shabd-roop-in-sanskrit/">दिश्</a> (दिशा) स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/ashish-shabd-roop-in-sanskrit/">आशिष्</a> (आशीर्वाद) स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/ap-shabd-roop-in-sanskrit/">अप्</a> (आप् = जल) स्त्रीलिंग</li><li>हलन्त (व्यञ्जनान्त) नपुंसकलिङ्ग</li><li>जगत् (संसार) क्ली०</li><li>नामन् (नाम) नपुंसकलिङ्ग</li><li>अहन् (दिन) नपुं०</li><li><a href="https://www.aplustopper.com/payaske-shabd-roop-in-sanskrit/">पयस्</a> (जल) नपुं०</li><li>हविष् (हवन की वस्तु) नपुं०</li><li><a href="https://www.aplustopper.com/dhanush-shabd-roop-in-sanskrit/">धनुष्</a> (धनु) नपुं०</li></ul><h3>सर्वनाम शब्द</h3><p className="paragraph">सर्वनाम की परिभाषा – सर्व (सभी) नामों (संज्ञा-शब्दों) के स्थान पर प्रयुक्त होनेवाले शब्दों को ‘सर्वनाम-शब्द’ कहते हैं। इस तरह इनका रूप तीनों लिंगों में होता है। केवल ‘अस्मद्’ और ‘धुष्मद्’ शब्दों के रूप तीनों लिंगों में समान होते हैं।</p><p className="paragraph">संस्कृत-व्याकरण में ३५ सर्वनाम शब्दों की गणना इस प्रकार है – सर्व, विश्व, उभ, उभय, डतर, इतम, अन्य, अन्यतर, इतर, त्वत्, त्व, नेम, सम, सिम, पूर्व, पर, अवर, दक्षिण, उत्तर, अपर, अधर, स्व, अन्तर, त्यद्, तद्, यद्, एतद्, इदम्, अदस्, एक, द्वि, युष्मद्, अस्मद्, भवत्, तथा किम्। इनमें कुछ संख्यावाचक हैं, कुछ दिशावाचक और कुछ विशेषण मात्र।</p><p className="paragraph">प्रमुख सर्वनाम शब्दों की रूपावली यहाँ प्रस्तुत है –</p><ul><li><a href="https://www.aplustopper.com/sarv-pulling-sabd-roop-in-sanskrit/">सर्व</a> (सभी) पुं०</li><li><a href="https://www.aplustopper.com/sarv-streeling-shabd-roop-in-sanskrit/">सर्व</a> (सर्वा) स्त्री०</li><li><a href="https://www.aplustopper.com/sarv-napunsak-ling-shabd-roop-in-sanskrit/">सर्व</a> (सभी) नपुं०</li><li>अस्मद् (मैं, हम) – पुरुष वाचक सर्वनाम – उत्तम पुरुष</li><li>युष्मद् (तुम्, तुमलोग) पुरुषवाचक सर्वनाम, मध्यम पुरुष</li><li><a href="https://www.aplustopper.com/tad-pulling-shabd-roop-in-sanskrit/">तद्</a> (वह, वे) अन्यपुरुष, पुं०</li><li><a href="https://www.aplustopper.com/tad-striling-shabd-roop-in-sanskrit/">तद्</a> (वह) स्त्री० विभक्ति</li><li><a href="https://www.aplustopper.com/tad-napunsak-ling-shabd-roop-in-sanskrit/">तद्</a> (वह) नपुं०</li><li><a href="https://www.aplustopper.com/yad-pulling-shabd-roop-in-sanskrit/">यद्</a> (जो, जो लोग) पुं०</li><li><a href="https://www.aplustopper.com/yad-striling-shabd-roop-in-sanskrit/">यद्</a> (जो) स्त्री०</li><li><a href="https://www.aplustopper.com/yad-napunsak-ling-shabd-roop-in-sanskrit/">यद्</a> (जो) नपुं०</li><li><a href="https://www.aplustopper.com/kim-pulling-shabd-roop-in-sanskrit/">किम्</a> (कौन, कौन लोग) पुं०</li><li><a href="https://www.aplustopper.com/kim-striling-shabd-roop-in-sanskrit/">किम्</a> (कौन) स्त्री०</li><li><a href="https://www.aplustopper.com/kim-napunsak-ling-shabd-roop-in-sanskrit/">किम्</a> (कौन) नपुं०</li><li><a href="https://www.aplustopper.com/etad-etat-pulling-shabd-roop-in-sanskrit/">एतद्</a> (यह, ये) पुं०</li><li><a href="https://www.aplustopper.com/etad-etat-striling-shabd-roop-in-sanskrit/">एतद्</a> (यह, ये) स्त्री०</li><li><a href="https://www.aplustopper.com/etad-etat-napunsak-ling-shabd-roop-in-sanskrit/">एतद्</a> (यह, ये) नपुं०</li><li><a href="https://www.aplustopper.com/idam-pulling-shabd-roop-in-sanskrit/">इदम्</a> (यह, ये) पुं०</li><li><a href="https://www.aplustopper.com/idam-striling-shabd-roop-in-sanskrit/">इदम्</a> (यह, ये) स्त्री०</li><li><a href="https://www.aplustopper.com/idam-napunsak-ling-shabd-roop-in-sanskrit/">इदम्</a> (यह, ये) नपुं०</li><li><a href="https://www.aplustopper.com/adas-pulling-shabd-roop-in-sanskrit/">अदस्</a> (वह, वे) ०</li><li><a href="https://www.aplustopper.com/adas-striling-shabd-roop-in-sanskrit/">अदस्</a> (वह, वे) स्त्रीलिंग</li><li><a href="https://www.aplustopper.com/adas-napunsak-ling-shabd-roop-in-sanskrit/">अदस्</a> (वह, वे) नपुं०</li><li><a href="https://www.aplustopper.com/bhavat-pulling-shabd-roop-in-sanskrit/">भवत्</a> (आप) अन्य पुरुष, पुं०</li><li><a href="https://www.aplustopper.com/bhavat-striling-shabd-roop-in-sanskrit/">भवत्</a> (भवती = आप स्त्री) अन्यपुरुष, स्त्री०</li><li>भवत् (आप) अन्यत्रपुरुष, नपुं०</li><li><a href="https://www.aplustopper.com/poorv-pulling-shabd-roop-in-sanskrit/">पूर्व</a> (प्रथम, पहले) पुं०</li><li>पूर्व दिशा) स्त्री०</li><li><a href="https://www.aplustopper.com/poorv-napunsak-ling-shabd-roop-in-sanskrit/">पूर्व</a> (पहले) नपुं०</li><li>उभ (दो) केवल द्विवचन में तीनों लिंगों में</li><li>उभय (दोनों) पुंल्लिंग</li><li>उभय (दोनों) नपुं०</li><li>उभय (दोनों) स्त्री०</li></ul><p className="paragraph">शेष विभक्तियों में नदी शब्द के समान रूप होते हैं।</p><p className="paragraph">कति (कितने), यति (जितने), तति (उतने) ये शब्द सभी लिंगों में समान रूप से प्रयुक्त होते हैं तथा नित्य बहुवचन होते हैं।</p><p className="paragraph">कतिपय (कोई, कुछ) पुं०</p><p className="paragraph">विशेष- कतिपय का स्त्रीलिंग (कतिपया) में ‘लता’ के समान तथा नपुंसकलिंग (कतिपय) में ‘फल’ के समान रूप चलेंगे।</p><p className="paragraph">संख्यावाचक (विशेषण) शब्द<br/> संख्यावाचक शब्दों में प्रथम है – ‘एक’। इसके कई अर्थ होते हैं। कहीं भी है –<br/> एकोऽल्पार्थे प्रधाने च प्रथमे केवले तथा।<br/> साधारणे समानेऽपि संख्यायां च प्रयुज्यते।।</p><p className="paragraph">अर्थात् अल्प (थोड़ा, कुछ), प्रधान, प्रथम, केवल, साधारण, समान और एक – इन अर्थों – में ‘एक’ शब्द प्रयुक्त होता है। जब ‘एक’ शब्द संख्यावाचक होता है, तब इसका रूप केवल एकवचन में ही होता है। अन्य अर्थों में इसके रूप तीनों वचनों में होते हैं। बहुवचन में ‘एक’ का अर्थ है – ‘कुछ लोग’, ‘कोई कोई’। जैसे- एके नराः, एकाः नार्यः, एकानि फलानि।</p><ul><li><a href="https://www.aplustopper.com/ek-ke-shabd-roop-in-sanskrit/">एक</a> (संख्यावाली)</li><li><a href="https://www.aplustopper.com/do-dwi-ke-shabd-roop-in-sanskrit/">द्वि</a> (दो)</li><li><a href="https://www.aplustopper.com/teen-tri-ke-shabd-roop-in-sanskrit/">त्रि</a> (तीन)</li><li><a href="https://www.aplustopper.com/chatvari-char-ke-shabd-roop-in-sanskrit/">चतुर</a> (चार)</li><li><a href="https://www.aplustopper.com/pach-chhay-aath-ke-shabd-roop-in-sanskrit/">पञ्चन</a> (पाँच)</li></ul><p className="paragraph">पञ्चन’ और इसके आगे संख्यावाची शब्दों के रूप तीनों लिंगों में एक समान और केवल बहुवचन में होते हैं –<br/> नवन् (नौ),दशन् (दस) तथा एकादशन् आदि समस्त नकारान्त संख्यावाची शब्दों के रूप ‘पञ्चन्’ शब्द के समान चलते हैं।</p><p className="paragraph">पूरणी (क्रम) संख्या</p><p className="paragraph">ऊनविंशति, एकान्नविंशति ऊनविंश, ऊनविंशतितम ऊनविंशी, ऊनविंशतितमी</p><h3>सर्वनाम से विशेषण</h3><p className="paragraph">सम्बन्ध वाचक सर्वनाम मेरा, हमारा, तेरा, तुम्हारा, इसका, उसका आदि के संस्कृत रूप – मम, अस्माकम्, तव, युष्माकम्, अस्य, तस्य आदि पदों के मूल शब्द में कुछ प्रत्यय जोड़कर इनसे विशेषण बनाकर इन्हें अन्य विशेष्यों के अनुसार प्रयोग किया जाता है। ये विशेषण ‘छ’, ‘अण’ तथा ‘खज’ प्रत्ययों को जोड़कर बनाए जाते हैं। ‘युष्मद्’ और ‘अस्मद्’ शब्दों से विकल्प से ‘खञ्’, ‘छ’ और ‘अण’ प्रत्यय होते हैं। ‘खञ्’ तथा ‘अण’ प्रत्ययों के परे ‘युष्मद्’ और ‘अस्मद्’ शब्दों के स्थान में क्रमशः ‘युष्माक’ और ‘अस्माक’ आदेश हो जाते हैं२, किन्तु यदि ‘युष्मद्’ एवम् ‘अस्मद्’ शब्द एकवचन परक हो तो ‘खञ्’ और ‘अण्’ प्रत्ययों के परे क्रमशः ‘तवक’ एवं ‘ममक’ आदेश हो जाते हैं३। ‘ख’ (खञ्) के स्थान में ‘ईना’ और ‘छ’ के स्थान में ‘ईय’ आदेश हो जाते हैं-</p><p className="paragraph">इनका विवरण यहाँ उपस्थापित है –</p><p className="paragraph">अन्य सर्वनाम शब्दों- तद्, एतद्, यद्, इदम् आदि से केवल छ (ईय) प्रत्यय होने पर क्रमश: तदीय, एतदीय, यदीय, इदमीय आदि शब्द बनते हैं।</p><p className="paragraph">उपर्युक्त मदीय, त्वदीय, तदीय आदि शब्द विशेषण होते हैं। अतः वाक्य में प्रयोग होने पर इनके लिंग, विभक्ति और वचन विशेष्य के लिंग, विभक्ति और वचन के अनुसार होते हैं। कहा भी है-</p><p className="paragraph">यल्लिंगं यद्वचनं, या च विभक्तिर्विशेष्यस्य।<br/> तल्लिंगं तद्वचनं सैव विभक्तिर्विशेषणस्यापि।।</p><h3>सर्वनाम के कुछ उदाहरण यहाँ प्रस्तुत हैं-</h3><p className="paragraph">मदीयं गृहं गंगातटे विद्यते – (मेरा घर गंगा के किनारे है)।<br/> मदीयं गृहं स्वच्छं विद्यते – (मेरा घर साफ है।)<br/> मदीयः भ्राता स्वस्थः वर्तते – (मेरा भाई स्वस्थ है।)<br/> मदीया जननी वृद्धा अस्ति – (मेरी माता बूढ़ी है।)<br/> मामकं जीवनम् अद्य सफलं जातम् – (मेरा जन्म आज सफल हो गया।)<br/> मामकः लेखः लघुः अस्ति – (मेरा लेख छोटा है।)<br/> मामकिा शक्तिः अल्पा विद्यते – (मेरी शक्ति थोड़ी है।)<br/> मामकीनं तेजो न मन्दं जातम् – (मेरा तेज मन्द नहीं हुआ है।)<br/> मामकीनः लेखः पुरस्कृतोऽभूत् – (मेरा लेख पुरस्कृत हुआ।)<br/> मामकीना दृष्टि: तीक्ष्णा वर्तते – (मेरी नजर तेज है।)<br/> अस्मदीयं नगरमितो दूरम् – (हमारा नगर यहाँ से दूर है।)<br/> अस्मदीयः वृक्षः फलितः – (हमलोगों का पेड़ फला हुआ है।)<br/> अस्मदीया प्रतिष्ठा वृद्धिं गता – (हमलोगों की प्रतिष्ठा बढ़ गई।)<br/> आस्माकं वस्त्रं नास्ति रक्तम् – (हमलोगों का कपड़ा लाल नहीं है।)<br/> आस्माकः देशः गौरवान्वितः निजमहिम्ना – (हमारा देश अपनी महिमा से गौरवान्वित है।)<br/> युष्मदीयम् उद्यानं विद्यते सुन्दरम् (आपलोगों का बगीचा सुन्दर है।)<br/> यौष्माकः परिश्रमः न व्यर्थः (आपलोगों का परिश्रम व्यर्थ नहीं है।)<br/> यौष्माकीनं ज्ञानं नास्ति गभीरम् (आपका ज्ञान गम्भीर नहीं है।)<br/> तदीयं पुस्तकं महाधम् (उसकी पुस्तक महंगी है।)</p><p className="paragraph">‘ऐसा’, ‘जैसा’ आदि शब्दों द्वारा बोधित ‘प्रकार’ के अर्थ के लिए अस्मद्, युष्मद्, तद्, एतद् आदि शब्दों से ‘किन्’ एवं ‘कञ्’ प्रत्यय लगाकर अस्मद् आदि शब्दों से क्रमशः अस्मादृश् एवम् अस्मादृश आदि शब्द बनते हैं, जो विशेषण होते हैं। अन्य विशेषणों की तरह इनकी विभक्ति, लिंग, वचन आदि विशेष्य के अनुसार होते हैं। इनका विवरण इस प्रकार है –</p><h3>संख्या गणना</h3><p className="paragraph">पुँल्लिंग – स्त्रीलिंग – नपुंसकलिंग<br/> १. एकः एका एकम्<br/> २. द्वौ<br/> ३. त्रयः तिस्रः त्रीणि<br/> ४. चत्वारः चतस्रः चत्वारि<br/> ५. पञ्च,<br/> ६. षट्,<br/> ७. सप्त,<br/> ८. अष्टौ, अष्ट,<br/> ९. नव,<br/> १०. दश,<br/> ११. एकादश,<br/> १२. द्वादश,<br/> १३. त्रयोदश,<br/> १४. चतुर्दश,<br/> १५. पञ्चदश,<br/> १६. षोडश,<br/> १७. सप्तदश,<br/> १८. अष्टादश,<br/> १९. ऊनविंशतिः, एकोनविंशतिः, नवदश,<br/> २०. विंशतिः,<br/> २१. एकविंशतिः,<br/> २२. द्वाविंशतिः, द्वाविंशः,<br/> २३. त्रयोविंशतिः, त्रयोविंशः,<br/> २४. चतुविंशतिः, चतुर्विंशः,<br/> २५. पञ्चविंशतिः, पञ्चविंशः<br/> २६. षड्विंशतिः, षड्विंशः,<br/> २७. सप्तविंशतिः, सप्तविंशः,<br/> २८. अष्टाविंशतिः, अष्टाविंशः,<br/> २९. ऊनत्रिंशत्, एकोनत्रिंशत्, नवविंशः, नवविंशतिः,<br/> ३०. त्रिंशत्,<br/> ३१. एकत्रिंशत्,<br/> ३२. द्वात्रिंशत्,<br/> ३३. त्रयस्त्रिंशत्,<br/> ३४. चतुस्त्रिंशत्,<br/> ३५. पञ्चत्रिंशत्,<br/> ३६. षट्त्रिंशत्,<br/> ३७. सप्तत्रिंशत,<br/> ३८. अष्टात्रिंशत्,<br/> ३९. ऊनचत्वारिंशत्, एकोनचत्वारिंशत्, नवत्रिंशत्,<br/> ४०. चत्वारिंशत्,<br/> ४१. एकचत्वारिंशत्,<br/> ४२. द्विचत्वारिंशत्, द्वाचत्वारिंशत्,<br/> ४३. त्रिचत्वारिंशत्, त्रयश्चत्वारिंशत्,<br/> ४४. चतुश्चत्वारिंशत्,<br/> ४५. पञ्चचत्वारिंशत्,<br/> ४६. षट्चत्वारिंशत्,<br/> ४७. सप्तचत्वारिंशत्,<br/> ४८. अष्टचत्वारिंशत्, अष्टाचत्वारिंशत्,<br/> ४९. ऊनपञ्चाशत्, एकोनपञ्चाशत्, नवचत्वारिंशत्,<br/> ५०. पञ्चाशत्,<br/> ५१. एकपञ्चाशत्,<br/> ५२. द्विपञ्चाशत्, द्वापञ्चाशत्,<br/> ५३. त्रिपञ्चाशत्, त्रयःपञ्चाशत्,<br/> ५४. चतुष्पञ्चाशत्,<br/> ५५. पञ्चपञ्चाशत्,<br/> ५६. षट्पञ्चाशत्,<br/> ५७. सप्तपञ्चाशत्,<br/> ५८. अष्टपञ्चाशत्, अष्टापञ्चाशत्,<br/> ५९. ऊनषष्ठिः, एकोनषष्टिः, नवपञ्चाशत्,<br/> ६०. षष्ठिः,<br/> ६१. एकषष्ठिः,<br/> ६२. द्विषष्ठि, द्वाषष्ठिः,<br/> ६३. त्रिषष्ठिः, त्रयःषष्ठिः,.<br/> ६४. चतुःषष्ठिः,<br/> ६५. पञ्चषष्ठिः,<br/> ६६. षट्षष्ठिः,<br/> ६७. सप्तषष्ठिः<br/> ६८. अष्टषष्ठिः, अष्टाषष्ठिः,<br/> ६९. ऊनसप्ततिः, एकोनसप्ततिः, नवषष्ठिः,<br/> ७०. सप्ततिः,<br/> ७१. एकसप्ततिः,<br/> ७२. द्वासप्ततिः, द्विसंप्ततिः,<br/> ७३. त्रयःसप्ततिः, त्रिसप्ततिः,<br/> ७४. चतुःसप्ततिः,<br/> ७५. पञ्चसप्ततिः,<br/> ७६. षट्सप्ततिः,<br/> ७७. सप्तसप्ततिः,<br/> ७८. अष्टासप्ततिः, अष्टसप्ततिः,<br/> ७९. ऊनाशीतिः, एकोनाशीतिः, नवसप्ततिः,<br/> ८०. अशीतिः,<br/> ८१. एकाशीतिः,<br/> ८२. द्वयशीतिः,<br/> ८३. त्र्यशीतिः,<br/> ८४. चतुरशीतिः,<br/> ८५. पञ्चाशीतिः,<br/> ८६. षडशीतिः,<br/> ८७. सप्ताशीतिः,<br/> ८८. अष्टाशीतिः,<br/> ८९. ऊननवतिः, एकोननवतिः, नवाशीतिः,<br/> ९०. नवतिः,<br/> ९१. एकनवतिः,<br/> ९२. द्विनवतिः द्वानवतिः,<br/> ९३. त्रयोनवतिः,<br/> ९४. चतुर्नवतिः,<br/> ९५. पञ्चनवतिः,<br/> ९६. षण्णवतिः,<br/> ९७. सप्तनवतिः<br/> ९८. अष्टनवतिः, अष्टानवतिः,<br/> ९९. नवनवतिः, ऊनशतम्, एकोनशतम्,<br/> १००. शतम्।<br/> इसी प्रकार<br/> १०१ के लिए एकाधिकशतकम्,<br/> १०२ के लिए द्वयधिकशतकम्,<br/> १०३ के लिए त्र्यधिकशतम् इत्यादि अधिक शब्द जोड़कर आगे की संख्यायें बनाई जाती हैं।<br/> २०० द्विशतम्, द्वे शते,<br/> ३०० त्रिशतम्, त्रीणि शतानि इत्यादि।</p><p className="paragraph">सहस्रम् (१ हजार), अयुतम् (१० हजार), लक्षम् (१ लाख), प्रयुतम्, नियुतम् (१० लाख), कोटिः, (स्त्रीलिङ्ग) (१ करोड़), दसकोटि: (दस करोड़), अर्बुदम् (१ अरब), दशार्बुदम् (१० अरब), खर्वम् (१ खरब), दशखर्वम् (दस खरब), नीलम् (१ नील), दशनीलम् (१० नील), पद्मम् (१ पदुम), दशपद्मम् (दस पदुम), शङ्खम् (१ शंख), दशशङ्खम् (१० शंख), महाशङ्खम् (महाशंख)।</p>
            </div>
            </>
        )
    }
}

export default ShabRoop;