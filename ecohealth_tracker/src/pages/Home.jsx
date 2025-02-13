
import React, { useEffect } from 'react';
import { MyFunction } from '../utils/js/MyFunctions';


const MyComponent = () => {
    useEffect(() => {
        const cleanup = MyFunction();
        return () => cleanup();
    }, []);

    return (
        <header id="header" className="header d-flex align-items-center sticky-top">

            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
                <a href="#" className="logo d-flex align-items-center">
                    <img src={require('../utils/img/logobien.jpg')} alt="logo" />
                    <h1 className="sitename"><span>Eco</span>Health Tracker</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li className="dropdown">
                            <a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">Dropdown 1</a></li>
                                <li className="dropdown">
                                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Dropdown 2</a></li>
                                <li><a href="#">Dropdown 3</a></li>
                                <li><a href="#">Dropdown 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
            </div >
        </header>

    );
};

export default MyComponent;

const MyMain = () => (
    <div>
        <main className="main">
            <section id="hero" className="hero section light-background">
                <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-5">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2>EcoHealth Tracker</h2>
                            <p>EcoHealth Tracker is a comprehensive tool designed to monitor and improve your environmental health. It provides insights and actionable data to help you make informed decisions for a healthier lifestyle and a sustainable future.</p>

                            <p>The Eco-Health Tracker application can provide a variety of functionalities to promote environmental sustainability and health awareness. Here are some key features it can offer</p>
                            <div className="d-flex">
                                <a href="#about" className="btn-get-started">Get Started</a>
                                <a href="https://youtu.be/fax0poP9NN8" className="glightbox btn-watch-video d-flex align-items-center">
                                    <i className="bi bi-play-circle"></i><span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={require('../utils/img/image_fx_.jpg')} className="img-fluid" alt="Hero" />
                        </div>
                    </div>
                </div>
                <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-person-heart"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Personal Health Monitoring</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-bar-chart-line"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Environmental Impact Assessment</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-recycle"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Sustainable Living Tips</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-watch"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Integration with Wearable Devices</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-box"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Resource Tracking</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-book"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Health and Environment Education</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-check-circle"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Goal Setting and Progress Tracking</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-people"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Community Engagement</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="about" className="about section">

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
                            <p className="who-we-are">Who We Are</p>
                            <h3>Empower Your Health, Sustain Our Planet.</h3>
                            <p className="fst-italic">
                                The EcoHealth Tracker is a comprehensive application designed by <span>WAZA TECH Group</span> to empower individuals to monitor their health and environmental impact simultaneously. Our main goal is to provide users with the tools and insights they need to make informed decisions for a healthier lifestyle and a sustainable future.
                            </p>
                            <h4>Our Group's Goals</h4>

                            <ul>
                                <li><i className="bi bi-check-circle"></i> <span>Holistic Health and Sustainability</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Environmental Impact Awareness</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Community Engagement and Support</span></li>

                                <li><i className="bi bi-check-circle"></i> <span>Supports Sustainable Development Goals (SDGs)</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Innovative Use of Technology</span></li>
                                <li><i className="bi bi-check-circle"></i> <span>Empowerment through Data</span></li>
                            </ul>
                            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                        </div>

                        <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="row gy-4">
                                        <div className="col-lg-12">
                                            <img src={require('../utils/img/community.jpeg')} className="img-fluid" alt="" />

                                        </div>
                                        <div className="col-lg-12">
                                            <img src={require('../utils/img/technology-innovation-cover.jpg')} className="img-fluid" alt="" />

                                        </div>


                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row gy-4">
                                        <div className="col-lg-12">
                                            <img src={require('../utils/img/HolisticHealth.webp')} className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-lg-12">
                                            <img src={require('../utils/img/SDGs.webp')} className="img-fluid" alt="" />
                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section id="services" className="services section">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Services</h2>
                    <div><span>Check Our</span> <span className="description-title">Services</span></div>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item  position-relative">
                                <div className="icon">
                                    <i className="bi bi-person-heart"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Personal Health Monitoring</h3>
                                </a>
                                <ul>
                                    <i className="bi bi-check-circle"></i> <span>Activity Tracking</span> <li>Monitor daily physical activities, including steps, workouts, and heart rate.</li>
                                    <i className="bi bi-check-circle"></i> <span>Nutrition Logging </span>  <li>Track food intake, calorie consumption, and nutritional values.</li>
                                    <i className="bi bi-check-circle"></i> <span>Sleep Tracking </span>  <li>Analyze sleep patterns and quality.</li>
                                    <i className="bi bi-check-circle"></i> <span>Health Metrics </span>  <li>Monitor vital signs, such as blood pressure, blood sugar, and cholesterol levels.</li>
                                    <i className="bi bi-check-circle"></i> <span>Goal Setting </span>  <li>Set health goals and track progress.</li>
                                    <i className="bi bi-check-circle"></i> <span>Health Reminders </span>  <li>Receive notifications for medication, appointments, and health check-ups.</li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-bar-chart-line"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Environmental Impact Assessment</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span>Carbon Footprint Calculator  </span>  <li>Measure and analyze the carbon footprint based on user habits.</li>
                                <i className="bi bi-check-circle"></i> <span>Energy Consumption Tracker  </span>  <li>Monitor electricity, gas usage.</li>
                                <i className="bi bi-check-circle"></i> <span>Waste Management  </span>  <li>Track waste production and disposal methods.</li>
                                <i className="bi bi-check-circle"></i> <span>Transportation Analysis  </span>  <li>Assess the environmental impact of transportation choices.</li>
                                <i className="bi bi-check-circle"></i> <span>Water Usage Analysis  </span>  <li>Track and assess water consumption and its environmental impact.</li>
                                <i className="bi bi-check-circle"></i> <span>Environmental Impact Reports  </span>  <li>Receive detailed reports on environmental impact and sustainability practices.</li>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-recycle"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Sustainable Living Tips</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span>Green Living Advice  </span>  <li>Receive tips and suggestions for eco-friendly living.</li>
                                <i className="bi bi-check-circle"></i> <span>Energy Saving Tips  </span>  <li>Learn how to reduce energy consumption and save on utility bills.</li>
                                <i className="bi bi-check-circle"></i> <span>Waste Reduction Strategies  </span>  <li>Discover ways to minimize waste production and promote recycling.</li>
                                <i className="bi bi-check-circle"></i> <span>Water Conservation Techniques  </span>  <li>Learn how to conserve water and reduce water waste.</li>
                                <i className="bi bi-check-circle"></i> <span>Healthy Lifestyle Tips  </span>  <li>Get advice on maintaining a healthy lifestyle and reducing environmental impact.</li>
                                <i className="bi bi-check-circle"></i> <span>Environmental Awareness Resources  </span>  <li>Access educational materials and resources on environmental issues.</li>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400</a>">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-watch"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Integration with Wearable Devices</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span> Real-time data collection </span>  <li>Access health and fitness data from wearable devices for analysis and tracking.</li>
                                <i className="bi bi-check-circle"></i> <span>Seamless Integration  </span>  <li>Connect with popular wearable devices and fitness apps for data synchronization.</li>
                                <i className="bi bi-check-circle"></i> <span>Customizable Data Display  </span>  <li>View health metrics and activity data in a user-friendly interface.</li>
                                <i className="bi bi-check-circle"></i> <span>Health Insights  </span>  <li>Receive personalized health insights and recommendations based on wearable device data.</li>
                                <i className="bi bi-check-circle"></i> <span>Activity Tracking  </span>  <li>Monitor daily physical activities, including steps, workouts, and heart rate.</li>
                                <i className="bi bi-check-circle"></i> <span>Health Goals  </span>  <li>Set health goals and track progress using wearable device data.</li>




                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-box"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Resource Tracking</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span> Manage ressources </span>  <li>Track and manage resources such as food, water, energy, and waste to promote sustainable living.</li>
                                <i className="bi bi-check-circle"></i> <span>Resource Consumption Analysis  </span>  <li>Monitor resource consumption patterns and identify areas for improvement.</li>
                                <i className="bi bi-check-circle"></i> <span>Resource Usage Reports  </span>  <li>Receive detailed reports on resource usage and sustainability practices.</li>
                                <i className="bi bi-check-circle"></i> <span>Resource Conservation Tips  </span>  <li>Get tips and suggestions for conserving resources and reducing environmental impact.</li>
                                <i className="bi bi-check-circle"></i> <span>Resource Management Tools  </span>  <li>Access tools and calculators to help manage and optimize resource usage.</li>
                                <i className="bi bi-check-circle"></i> <span>Resource Efficiency Metrics  </span>  <li>Measure resource efficiency and identify opportunities for conservation.</li>



                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-book"></i>
                                </div>
                                <a href="" className="stretched-link">
                                    <h3>Health and Environment Education</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span>Health and Environment Awareness  </span>  <li>Provide information on environmental issues, health risks, and sustainable living practices.</li>
                                <i className="bi bi-check-circle"></i> <span>Health Education Resources  </span>  <li>Access educational materials, articles, and videos on health and wellness topics.</li>
                                <i className="bi bi-check-circle"></i> <span>Environmental Learning Tools  </span>  <li>Learn about environmental conservation, climate change, and biodiversity through interactive tools.</li>
                                <i className="bi bi-check-circle"></i> <span>Healthy Living Tips  </span>  <li>Get advice on maintaining a healthy lifestyle, including diet, exercise, and stress management.</li>
                                <i className="bi bi-check-circle"></i> <span>Environmental Impact Information  </span>  <li>Understand the environmental impact of daily activities and lifestyle choices.</li>
                                <i className="bi bi-check-circle"></i> <span>Health and Wellness Programs  </span>  <li>Participate in health and wellness programs to improve overall well-being.</li>


                                <a href="" className="stretched-link"></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="bi bi-people"></i>
                                </div>
                                <a href="service-details.html" className="stretched-link">
                                    <h3>Community Engagement</h3>
                                </a>
                                <i className="bi bi-check-circle"></i> <span>Virtual Community Forums  </span>  <li>Participate in community forums to share ideas, ask questions, and collaborate on sustainability projects.</li>
                                <i className="bi bi-check-circle"></i> <span>Community Challenges  </span>  <li>Join community challenges to promote sustainable living practices and healthy habits.</li>
                                <i className="bi bi-check-circle"></i> <span>Collaborative Projects  </span>  <li>Collaborate with other users on environmental projects, such as clean-up events, tree planting, and recycling drives.</li>
                                <i className="bi bi-check-circle"></i> <span>Community Resources  </span>  <li>Access local resources, organizations, and businesses that support environmental sustainability and health initiatives.</li>
                                <i className="bi bi-check-circle"></i> <span>Virtual Community Events  </span>  <li>Participate in community events, workshops, and webinars on health, wellness, and environmental topics.</li>
                                <i className="bi bi-check-circle"></i> <span>Community Support Groups  </span>  <li>Join support groups for health conditions, lifestyle changes, and environmental advocacy.</li>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
            <section id="features" className="features section light-background">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Features</h2>
                    <div><span>Check Our</span> <span className="description-title">Features</span></div>
                </div>

                <div className="container">

                    <div className="row gy-5 justify-content-between">

                        <div className="col-xl-5" data-aos="zoom-out" data-aos-delay="100">
                            <img src={require('../utils/img/phone ecotracker.jpg')} className="img-fluid" alt="" />
                        </div>

                        <div className="col-xl-6 d-flex">
                            <div className="row align-self-center gy-4">

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Automatic data collection</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Email reports</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>24/7 Online secured access</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>User details and controls</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>Custom detailed graphs</h3>
                                    </div>
                                </div>

                                <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                                    <div className="feature-box d-flex align-items-center">
                                        <i className="bi bi-check"></i>
                                        <h3>More</h3>
                                    </div>
                                </div>

                            </div>                    </div>

                    </div>

                </div>
            </section>
            <section id="pricing" className="pricing section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Pricing</h2>
                    <div><span>Check Our</span> <span className="description-title">Pricing</span></div>
                </div>

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pricing-tem">
                                <h3 style={{ color: '#20c997' }}>Free Plan</h3>
                                <div className="price"><sup>$</sup>0<span> / month</span></div>
                                <div className="icon">
                                    <i className="bi bi-box" style={{ color: '#20c997' }}></i>
                                </div>
                                <ul>
                                    <li>Basic personal health monitoring (activity tracking, nutrition logging)</li>

                                    <li>Limited environmental impact assessment (basic carbon footprint calculator)</li>
                                    <li>Basic educational resources (articles and tips)</li>
                                    <li> Access to community engagement features (local events directory)</li>
                                    <li> Basic educational resources (articles and tips)</li>

                                    {/*<li className="na">Massa ultricies mi</li>*/}
                                </ul>
                                <a href="#" className="btn-buy">Buy Now</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pricing-tem">
                                <span className="featured">Featured</span>
                                <h3 style={{ color: '#0dcaf0' }}>Starter Plan</h3>
                                <div className="price"><sup>$</sup>9.99<span> / month</span></div>
                                <div className="icon">
                                    <i className="bi bi-send" style={{ color: '#0dcaf0' }}></i>
                                </div>
                                <ul>
                                    <li>All Free Plan features</li>
                                    <li>Enhanced personal health monitoring (sleep analysis, goal setting)</li>
                                    <li>Advanced environmental impact tools (water usage tracker)</li>
                                    <li>Eco-friendly lifestyle tips and challenges</li>
                                    <li>Basic waste management insights</li>
                                    <li>Monthly progress reports</li>


                                </ul>
                                <a href="#" className="btn-buy">Buy Now</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="pricing-tem">
                                <h3 style={{ color: '#fd7e14' }}>Business Plan</h3>
                                <div className="price"><sup>$</sup>29.99<span> / month</span></div>
                                <div className="icon">
                                    <i className="bi bi-airplane" style={{ color: '#fd7e14' }}></i>
                                </div>
                                <ul>
                                    <li>All Starter Plan features</li>
                                    <li>Team-based health monitoring and resource tracking (up to 10 users)</li>
                                    <li>Integration with wearable devices (full functionality)</li>
                                    <li>Comprehensive data visualization dashboard</li>
                                    <li>Access to webinars and workshops</li>
                                    <li>Priority customer support</li>

                                </ul>
                                <a href="#" className="btn-buy">Buy Now</a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                            <div className="pricing-tem">
                                <h3 style={{ color: '#0d6efd' }}>Ultimate Plan</h3>
                                <div className="price"><sup>$</sup>49.99<span> / month</span></div>
                                <div className="icon">
                                    <i className="bi bi-rocket" style={{ color: '#0d6efd' }}></i>
                                </div>
                                <ul>
                                    <li>All Business Plan features</li>
                                    <li>Unlimited user accounts for team monitoring</li>
                                    <li>Advanced analytics and trend analysis tools</li>
                                    <li>Customized sustainability challenges and goals</li>
                                    <li>Exclusive access to premium educational content and resources</li>
                                    <li>Real-time alerts and notifications for health and environmental updates</li>
                                    <li>Dedicated account manager for personalized support</li>
                                </ul>
                                <a href="#" className="btn-buy">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="faq" className="faq section light-background">

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="content px-xl-5">
                                <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
                                <p>
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

                            <div className="faq-container">
                                <div className="faq-item faq-active">
                                    <h3><span className="num">1.</span> <span></span></h3>
                                    <div className="faq-content">
                                        <p></p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>

                                <div className="faq-item faq-active">
                                    <h3><span className="num">2.</span> <span></span></h3>
                                    <div className="faq-content">
                                        <p></p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>

                                <div className="faq-item faq-active">
                                    <h3><span className="num">3.</span> <span></span></h3>
                                    <div className="faq-content">
                                        <p></p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>

                                <div className="faq-item faq-active">
                                    <h3><span className="num">4.</span> <span></span></h3>
                                    <div className="faq-content">
                                        <p></p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>

                                <div className="faq-item faq-active">
                                    <h3><span className="num">5.</span> <span></span></h3>
                                    <div className="faq-content">
                                        <p></p>
                                    </div>
                                    <i className="faq-toggle bi bi-chevron-right"></i>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </section>
            <section id="contact" className="contact section">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <div><span>Need Help?</span> <span className="description-title">Contact Us</span></div>
                </div>

                <div className="container" data-aos="fade" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-4">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>Umubano Street, Bujumbura Town</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                <i className="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+257 61063029</p>
                                </div>
                            </div>

                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                <i className="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>ecohealthtracker@info.com</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <form action="" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>
        </main>
    </div>
);

export { MyMain };

const Myfoot = () => (
    <div>
        <footer id="footer" class="footer light-background">

            <div class="container">
                <div class="copyright text-center ">
                    <p>© <span>Copyright</span> <strong class="px-1 sitename">EcoHealth Tracker</strong> <span>All Rights Reserved</span></p>
                </div>
                <div class="social-links d-flex justify-content-center">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
                <div class="credits">

                    Designed by <a href="">John Kelly CUBAHIRO</a>
                </div>
            </div>

        </footer>
    </div>

);

export { Myfoot };