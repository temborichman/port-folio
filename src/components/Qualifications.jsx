import React, { useState } from 'react';
import "./qualifications.css";

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section id="portfolio"className='qualification-section'>
            <h2 className='section-title' style={{ display: 'flex', justifyContent: 'center' }}>Qualifications</h2>
            <span className='section-subtitle' style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>My personal journey</span>

            <div className='qualification-container'>
                {/* Tabs */}
                <div className='qualification-tabs'>
                    <div 
                        className={toggleState === 1 ? 'qualification-button qualification-active button-flex' : 'qualification-button button-flex'}
                        onClick={() => toggleTab(1)} // ✅ Added onClick
                    >
                        <i className='fas fa-graduation-cap qualification-icon'></i>
                        Education
                    </div>

                    <div 
                        className={toggleState === 2 ? 'qualification-button qualification-active button-flex' : 'qualification-button button-flex'}
                        onClick={() => toggleTab(2)} // ✅ Added onClick
                    >
                        <i className='fas fa-briefcase qualification-icon'></i>
                        Experience
                    </div>
                </div>

                {/* Sections */}
                <div className='qualification-sections'>

                    {/* Education Section */}
                    <div className={toggleState === 1 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>Software Development</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>UI/UX Designer</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-2025
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>Mobile Application Development</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>Digital Marketing</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-2025
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={toggleState === 2 ? 'qualification-content qualification-content-active' : 'qualification-content'}>
                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>Web Design Certificate</h3>
                                <span className='qualification-subtitle'>freeCodeCamp</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024
                                </div>
                            </div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>Frontend Developer Certificate</h3>
                                <span className='qualification-subtitle'>freeCodeCamp</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2025
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>Data Analyst Certificate</h3>
                                <span className='qualification-subtitle'>Alison</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2025
                                </div>
                            </div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div></div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                            <div>
                                <h3 className='qualification-title'>UI/UX Designer</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-2025
                                </div>
                            </div>
                        </div>

                        <div className='qualification-data'>
                            <div>
                                <h3 className='qualification-title'>Mobile Application Developer</h3>
                                <span className='qualification-subtitle'>Uncommon.org</span>
                                <div className='qualification-calendar'>
                                    <i className='fas fa-calendar-alt'></i>
                                    2024-Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification-round'></span>
                                <span className='qualification-line'></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Qualifications;
