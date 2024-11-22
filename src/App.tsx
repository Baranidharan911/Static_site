import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import logo from './assets/images/logo.png';
import video from './assets/videos/backgroundvideo.mp4';

import materialsSelection from './assets/images/MaterialSelection.png';
import circuitDebugging from './assets/images/circuit.png';
import hardwareAssembly from './assets/images/hardware.png';
import circuitDesign from './assets/images/circuitdesign.png';
import pcbDesign from './assets/images/pcb.png';
import pcbTroubleshoot from './assets/images/pcbtroubleshoot.png';
import batteryManagement from './assets/images/battery.png';
import alternateMaterial from './assets/images/alternate.png';
import boardsRepair from './assets/images/boardrepair.png';
import casingDesign from './assets/images/casingDesign.png';
import others from './assets/images/others.png';

import electronics from './assets/images/electronics.png';
import embeddedSystems from './assets/images/circuit.png';
import iot from './assets/images/iot.png';
import automations from './assets/images/automation.png';
import robotics from './assets/images/robotics.png';
import printing3d from './assets/images/3dprinting.png';
import ev from './assets/images/EV.png';
import drone from './assets/images/drone.png';
import solar from './assets/images/solar.png';
import othersDomain from './assets/images/others.png';

import saveTimeGif from './assets/images/save-time.gif';
import discoverExpertsGif from './assets/images/discover-experts.gif';
import startProjectsGif from './assets/images/start-projects.gif';

function App() {
  useEffect(() => {
    const offerCards = document.querySelectorAll<HTMLDivElement>('.offer-card');

    const handleClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLDivElement;

      // Remove the zoom-in class from all cards
      offerCards.forEach((c) => c.classList.remove('zoom-in'));

      // Add the zoom-in class to the clicked card
      target.classList.add('zoom-in');
    };

    offerCards.forEach((card) => {
      card.addEventListener('click', handleClick);
    });

    return () => {
      offerCards.forEach((card) => {
        card.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const problems = [
    { title: 'Materials Selection', image: materialsSelection },
    { title: 'Circuit Debugging', image: circuitDebugging },
    { title: 'Hardware Assembly', image: hardwareAssembly },
    { title: 'Circuit Design', image: circuitDesign },
    { title: 'PCB Design', image: pcbDesign },
    { title: 'PCB Troubleshoot', image: pcbTroubleshoot },
    { title: 'Battery Management', image: batteryManagement },
    { title: 'Alternate Material', image: alternateMaterial },
    { title: 'Boards Repair', image: boardsRepair },
    { title: 'Casing Customized', image: casingDesign },
    { title: 'Others', image: others },
  ];

  const domains = [
    { title: 'Electronics', image: electronics },
    { title: 'Embedded Systems', image: embeddedSystems },
    { title: 'IoT', image: iot },
    { title: 'Automations', image: automations },
    { title: 'Robotics', image: robotics },
    { title: '3D Printing', image: printing3d },
    { title: 'EV', image: ev },
    { title: 'Drone', image: drone },
    { title: 'Solar', image: solar },
    { title: 'Others', image: othersDomain },
  ];

  return (
    <Router>
      <div>
        <header>
          <nav className="navbar">
            <div className="logo">
              <img className="logo-img" src={logo} alt="Dial2Tech Logo" />
            </div>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li className="dropdown">
                <a href="#find-engineer" className="dropbtn">
                  Find Engineer Pro
                </a>
                <div className="dropdown-content">
                  <a href="#submit-enquiry">Submit Enquiry Form</a>
                  <a href="#search-problems">Search by Problems</a>
                  <a href="#get-advice">Get Advice from Industry Experts</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="#find-project" className="dropbtn">
                  Find Project
                </a>
                <div className="dropdown-content">
                  <a href="#register-technical">Register as a Technical</a>
                  <a href="#find-solution">Find Solution Based on Domain</a>
                  <a href="#way-to-learn">Way to Learn</a>
                </div>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hero">
                  <video autoPlay muted loop playsInline className="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="hero-content">
                    <h1>Welcome to Dial2Tech</h1>
                    <p>
                      Your ultimate platform for technical support and engineer
                      appointments
                    </p>
                    <a style={{ marginTop: '20px' }} href="#download-app" className="btn">
                      Build Your Project
                    </a>
                  </div>
                </div>

                <div id="about" className="about-us">
  <div className="about-us-container">
    <div className="about-us-text">
      <h2>About Us</h2>
      <p>
        Dial2Tech automates scheduling engineer appointments for hardware and coding issues, streamlining the process for expos and competitions. We connect students and engineers with skilled professionals for better troubleshooting.
      </p>
      <p>
        Our goal is global reach, delivering high-quality, reliable service by partnering with top engineers and providing them with the tools and support they need.
      </p>
    </div>
    <div className="about-us-img">
      <img src="src/assets/images/aboutus.png" alt="About Us Image" />
    </div>
  </div>
</div>

<div id="journey" className="journey">
  <h2>Our Journey</h2>
  <div className="journey-container">
    <img src="src/assets/images/journey.png" alt="Our Journey Image" className="journey-img" />
  </div>
</div>


                <div className="vision-mission">
                  <div
                    data-aos="slide-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    className="vision"
                  >
                    <img src="src/assets/images/vision.jpg" alt="Vision Image" />
                    <h2>Vision</h2>
                    <p>Empower millions globally to deliver top-notch online support.</p>
                    <p>Become the foremost platform for engineering expertise.</p>
                    <p>Ensure high-quality support is accessible to all.</p>
                  </div>
                  <div
                    data-aos="slide-left"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    className="mission"
                  >
                    <img src="src/assets/images/mission.jpg" alt="Mission Image" />
                    <h2>Mission</h2>
                    <p>Provide affordable, high-quality engineering support.</p>
                    <p>Offer accurate, curated information for innovative creation.</p>
                    <p>Supply tools and training for engineers to excel.</p>
                  </div>
                </div>

                <div className="dropdown-sections">
                  <div className="dropdown-section" id="search-by-problems">
                    <h2>Search by Problems</h2>
                    <div className="scroll-container">
                      <div className="scroll-content">
                        {problems.map((problem, index) => (
                          <div className="card-container" key={index}>
                            <div className="card">
                              <img src={problem.image} alt={problem.title} />
                              <p>{problem.title}</p>
                            </div>
                          </div>
                        ))}
                        {/* Duplicate the content for seamless scrolling */}
                        {problems.map((problem, index) => (
                          <div className="card-container" key={index + problems.length}>
                            <div className="card">
                              <img src={problem.image} alt={problem.title} />
                              <p>{problem.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdown-sections">
                  <div className="dropdown-section" id="find-solutions-domain">
                    <h2>Find Solutions Based on Domain</h2>
                    <div className="scroll-container">
                      <div className="scroll-content">
                        {domains.map((domain, index) => (
                          <div className="card-container" key={index}>
                            <div className="card">
                              <img src={domain.image} alt={domain.title} />
                              <p>{domain.title}</p>
                            </div>
                          </div>
                        ))}
                        {/* Duplicate the content for seamless scrolling */}
                        {domains.map((domain, index) => (
                          <div className="card-container" key={index + domains.length}>
                            <div className="card">
                              <img src={domain.image} alt={domain.title} />
                              <p>{domain.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="what-we-offer">
                  <h2>What We Offer</h2>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    className="offer-cards"
                  >
                    <div className="offer-card">
                      <img src="src/assets/images/save time.gif" alt="Save Time" className="offer-card-img" />
                      <h3>Save Time</h3>
                      <p>
                        Find engineers tailored to your needs. We match you with the right talent.
                      </p>
                    </div>
                    <div className="offer-card">
                      <img src="src/assets/images/Discover Experts.gif" alt="Discover Experts" className="offer-card-img" />
                      <h3>Discover Experts</h3>
                      <p>
                        Easily access skilled experts. Save time and money.
                      </p>
                    </div>
                    <div className="offer-card">
                      <img src="src/assets/images/Start Projects Quickly.gif" alt="Start Projects Quickly" className="offer-card-img" />
                      <h3>Start Projects Quickly</h3>
                      <p>
                        Complete projects in 24 hours with our expert platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="how-we-help">
                  <h2>How Can We Help You</h2>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="600"
                    className="help-options"
                  >
                    <div className="help-option">
                      <img src="src/assets/images/project.gif" alt="Build Your Projects" className="help-option-img"/>
                      <h3>Build Your Projects</h3>
                      <p>Access to skilled engineers</p>
                      <p>Start in 24 hrs</p>
                      <p>Pay hourly</p>
                    </div>
                    <div className="help-option">
                      <img src="src/assets/images/Online and offline.gif" alt="Monetize Your Skill" className="help-option-img"/>
                      <h3>Online and offline troubleshooting</h3>
                      <p>Online and offline troubleshooting</p>
                      <p>Flexible access</p>
                      <p>Convenient technical support</p>
                    </div>
                  </div>
                </div>

                <div className="download-app">
                  <h2>Download This App</h2>
                  <div className="app-download-content">
                    <div
                      data-aos="slide-right"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      className="text-content"
                    >
                      <p>
                        Get immediate access to top-notch engineering support with the
                        Dial2Tech app. Scan the QR code or click the download button below
                        to begin your journey.
                      </p>
                      <div
                        data-aos="slide-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                        className="qr-code"
                      >
                        <img src="src/assets/images/qr-code.png" alt="QR Code" />
                        <a href="#" className="app-download-btn">
                          <img
                            src="src/assets/images/Google Play.png"
                            alt="Download on Google Play"
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      data-aos="slide-left"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="600"
                      className="app-image"
                    >
                      <img src="src/assets/images/download now.jpg" alt="App Image" />
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Routes>

        <footer>
          <div className="footer-content">
            <div className="footer-links">
              <a href="mailto:contact@dial2tech.com">contact@dial2tech.com</a>
              <a href="https://facebook.com/dial2tech" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com/dial2tech" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com/company/dial2tech" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Dial2Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
