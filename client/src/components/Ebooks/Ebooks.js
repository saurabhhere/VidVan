import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Ebooks.css';
import {animateScroll as scroll} from 'react-scroll';
import {FiArrowUp} from 'react-icons/fi'

class Ebooks extends Component {

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    scrollToTop=()=>{
        scroll.scrollToTop();
    }

    render(){
        return (
            <div className="ebooks-container">
                <Navbar />
                <div className="ebooks-page-heading">ई-पुस्तकम्</div>
                <div className="ebooks-grid">
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://i.ibb.co/Ky9bJNY/Screenshot-from-2021-01-01-20-44-46.png" alt="sample41" />
                            <figcaption>
                                <h2>Wikner's Sanskrit Introductory</h2>
                                <p>Click to view the file.</p>
                                <a href="https://sanskritdocuments.org/learning_tutorial_wikner/wikner.pdf" rel="noreferrer" target="_blank"></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://i.ibb.co/zFdGNcr/bhagavat.png" alt="sample41" />
                            <figcaption>
                                <h2>Srimad bhagavad gita in Sanskrit Hindi and English</h2>
                                <p>Click to download the file.</p>
                                <a href="https://drive.google.com/uc?export=download&id=1ubtSUzyReh2v_BvvadeWP5uzLFZOhYQ1" rel="noreferrer" target="_blank"></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/ab3/ab33c69fdfefdfc39a2db21280989fd6.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Rigveda in Sanskrit und Deutsch - Sanskrit Web</h2>
                                <p>Click to view the file.</p>
                                <a href="http://www.sanskritweb.net/rigveda/rigveda.pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/96e/96efd2f2193be44702d5284f98e6a77c.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Gospel of Matthew in Sanskrit-Latin-English - Sanskrit Web</h2>
                                <p>Click to view the file.</p>
                                <a href="http://www.sanskritweb.net/sansdocs/matthew.pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/56b/56b6b13206d6d012f85242a280829659.jpg" alt="sample41" />
                            <figcaption>
                                <h2>An English translation of the Sushruta samhita, based on original Sanskrit text</h2>
                                <p>Click to view the file.</p>
                                <a href="http://www.rarebooksocietyofindia.org/book_archive/196174216674_10154370772061675.pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/aeb/aeb3e706052decc255dfc83c7b5a9b11.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The Sanskrit Language</h2>
                                <p>Click to view the file.</p>
                                <a href="http://www.ahandfulofleaves.org/documents/The%20Sanskrit%20Language_Burrow.pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/f60/f60652118b09ec0fee166524e5e44145.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sanskrit in 30 Lectures: Intended Especially to Teach Sanskrit to the Highly Educated Indians</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=163295721&h=2c2087123fece32bd677a0393eae92b9&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/ff1/ff110f131a5ff1eb14cf559040d96528.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Patanjali Yoga Sutras</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=14984737&h=37af487778fbb68e9be1a6ec4bd487c1&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/472/472eeb2856107628ddd562d0768acf26.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sanskrit. Bhagavad Gita Grammar. Exercises</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=186263575&h=f515473550c80218f0172a468bb90b5b&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/c76/c765dc4965a9fde33fe705fa3cfa78b7.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sanskrit for Seekers</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=195088832&h=fed4fd642fcddc856226736300f20061&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/72f/72f5d5d7bab96d423229f23ce51d5344.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Indian Epigraphy: A Guide to the Study of Inscriptions in Sanskrit, Prakrit, and the other Indo-Aryan</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=185032079&h=7300dbd808db82ceefe86b37460ae9ab&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/c6e/c6e13756a32289918d6dc95d5c461c99.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The battle for Sanskrit : is Sanskrit political or sacred, opressive or liberating, dead or alive?</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=196759347&h=2cd564125d0d170e5f2955bcadb35a87&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/1f1/1f1125cfb9e317f7a8d0da729b6972bd.jpg" alt="sample41" />
                            <figcaption>
                                <h2>A History of Indian Literature - Vol. II: Epic and Sanskrit Religious Literature - Fasc. 1: Medieval</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=159819220&h=5bd05616c44250301d16cd70406b9681&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/541/5419a05a42524011b2759561be561f76.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The Sanskrit Epics: Collected translations</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=196846581&h=5c2058d56ef5140f94d6f1f1e03bc5af&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/557/557f983cda43277b9112486f1bc2bcf5.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sugam Sanskrit Vyakaran (सुगम संस्कृत व्याकरण)</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=158265402&h=b90feb54a6bcccfa4900a9ee8bdd22c0&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/1d1/1d18f6341fb7c4ae5e50bf6cc3889cc2.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sanskrit – English Dictionary</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=26626811&h=68f4bba58a16b03ac756187c8313854e&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/34b/34b3a3764a4e7200e191146bf0bc9fa6.jpg" alt="sample41" />
                            <figcaption>
                                <h2> Gita in Sanskrit in Large Font</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=5851196&h=9af9f2c07a4a7e188e3e836c810ccb3a&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/910/910a9f2bf5a1ba7f85a1e733696b2848.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Sanskrit Manual: A Quick-Reference Guide to the Phonology and Grammar of Classical Sanskrit</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=156945160&h=01791695f22933924efea0b21cae1644&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/c2b/c2bf7a28e38d1d9bd3f961cec0343850.jpg" alt="sample41" />
                            <figcaption>
                                <h2>First Lessons in Sanskrit</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=187269699&h=ddc9324fa56d860e7c59a0e751eab8db&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/c4f/c4f770d3ca107b4f8810ddbe2459e8d1.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Mindfulness in Early Buddhism: New Approaches through Psychology and Textual Analysis</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=176591850&h=dd8697a3761490346dbc1968cf4c9c37&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/12b/12b2d9385955d87492478f393b132d13.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The Stories of Krishna. A Sanskrit Coursebook for Beginners</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=187472237&h=ed940a3c5320b030adc37e881e730e46&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/2f9/2f9b4fd2d4fb4ba5f4c966b3ca7cb4d8.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Kundalini: The Ultimate Guide to Awakening Your Chakras Through Kundalini Yoga and Meditation</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=199810689&h=9f147f49926ea6bb17f7d010f4f3a050&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/399/3993ba8f9f2924b37e6806d505a7ab80.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Vijnana Bhirava Tantra, Sanskrit Text with English Translation / विज्ञान भैरव तन्त्रम</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=187391254&h=c20f824ef61c230be88f888ce5542efd&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/eef/eef2a6abc102a1a1e9c8fca0f0b508fd.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Indian Wisdom: Examples of the Religious, Philosophical, and Ethical Doctrines of the Hindus</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=156749097&h=e3a66ffe98112b23dabc49f591c0e79e&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/9e3/9e352d0000d654b5602de52c41cec1fb.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The Wisdom of Poets: Studies in Tamil, Telugu, and Sanskrit</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=156964249&h=0b4ac49475e717b1d7bdbbe14d9f2dc8&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/754/754eddc2efeb6c18de59b56be1ac76c5.jpg" alt="sample41" />
                            <figcaption>
                                <h2>The Sanskrit Hero: Karna in Epic Mahahabharata (Brill's Indological Library, V. 20)</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=186030699&h=a709ccacd9ad924b742bb7383381a386&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/391/3916e9e9f91f9db9fe0639c72d1e6073.jpg" alt="sample41" />
                            <figcaption>
                                <h2>An Introduction to Indian Philosophy in Sanskrit</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=196531728&h=6e33f09d70d1b444352aaed3778090de&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/f21/f21f7ff08064ea33b1a9c52ae207954e.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Messenger Poems (Clay Sanskrit Library)</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=186107594&h=9d4b5278b75ba674975cae175c13d35d&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/972/972cf2fdf7b85818f088ba88642abab5.jpg" alt="sample41" />
                            <figcaption>
                                <h2>A Sanskrit Primer</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=187284721&h=7e0807ee6f9be1bc7c99484c0e54c6fe&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
    
                    <div className="ebook">
                        <figure class="snip0016">
                            <img src="https://s.pdfdrive.com/assets/thumbs/6ba/6ba3f9d916b8bb808956021041711d75.jpg" alt="sample41" />
                            <figcaption>
                                <h2>Vijnanabhairava or Divine Consciousness: A Treasury of 112 Types of Yoga (English and Sanskrit Edition)</h2>
                                <p>Click to download the file.</p>
                                <a href="https://www.pdfdrive.com/download.pdf?id=189903512&h=2ebf3eb09ee63f302c21a3b3d2d35b93&u=cache&ext=pdf"></a>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div onClick={this.scrollToTop} className="top-button"><FiArrowUp /></div>
            </div>
    
    )
}
}

export default Ebooks;
