import { Link } from "react-router-dom";
import "./about.css";

function About() {
    return (
        <main className="about-page">

            {/* Hero Section */}
            <section className="about-hero">

                <div className="about-badge">
                    🌤️ Built with React
                </div>

                <p className="about-small-title">
                    ABOUT THE PROJECT
                </p>

                <h1>
                    Weather information,
                    <span> made simple.</span>
                </h1>

                <p className="about-description">
                    WeatherNow is a simple and responsive weather
                    application developed using React. It provides
                    real-time weather information for selected cities
                    using the OpenWeather API.
                </p>

            </section>


            {/* Main Information */}
            <section className="about-grid">

                {/* Mission */}
                <article className="about-card mission-card">

                    <div className="card-icon">
                        ☁️
                    </div>

                    <div>
                        <p className="card-label">
                            OUR MISSION
                        </p>

                        <h2>
                            Weather made easier
                        </h2>

                        <p>
                            Our mission is to provide reliable and
                            easy-to-understand weather information
                            so users can check current conditions
                            quickly and conveniently.
                        </p>
                    </div>

                </article>


                {/* Features */}
                <article className="about-card">

                    <div className="card-icon">
                        ⚡
                    </div>

                    <p className="card-label">
                        FEATURES
                    </p>

                    <h2>
                        Everything you need
                    </h2>

                    <ul className="feature-list">
                        <li>Current weather information</li>
                        <li>Real-time temperature</li>
                        <li>Humidity and wind speed</li>
                        <li>Weather conditions and icons</li>
                        <li>City selection</li>
                        <li>Celsius and Fahrenheit units</li>
                        <li>Local Storage preferences</li>
                        <li>Responsive design</li>
                    </ul>

                </article>

            </section>


            {/* Technologies */}
            <section className="technology-section">

                <div className="section-heading">

                    <p className="about-small-title">
                        TECHNOLOGY
                    </p>

                    <h2>
                        Built with modern tools
                    </h2>

                    <p>
                        WeatherNow combines modern web technologies
                        to provide a simple and responsive experience.
                    </p>

                </div>


                <div className="technology-grid">

                    <div className="technology-item">
                        <span className="technology-icon">⚛️</span>
                        <strong>React</strong>
                        <small>User Interface</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">🟨</span>
                        <strong>JavaScript</strong>
                        <small>Application Logic</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">🎨</span>
                        <strong>CSS3</strong>
                        <small>Visual Design</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">🔗</span>
                        <strong>Axios</strong>
                        <small>API Requests</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">🧭</span>
                        <strong>React Router</strong>
                        <small>Navigation</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">⚡</span>
                        <strong>Vite</strong>
                        <small>Development Tool</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">🌐</span>
                        <strong>OpenWeather</strong>
                        <small>Weather API</small>
                    </div>

                    <div className="technology-item">
                        <span className="technology-icon">💾</span>
                        <strong>Local Storage</strong>
                        <small>User Preferences</small>
                    </div>

                </div>

            </section>


            {/* Why WeatherNow */}
            <section className="why-section">

                <div className="why-content">

                    <p className="about-small-title">
                        WHY WEATHER NOW?
                    </p>

                    <h2>
                        Simple information.
                        <br />
                        Clear experience.
                    </h2>

                    <p>
                        WeatherNow combines real-time weather information
                        with a clean and responsive interface. Users can
                        select different cities and quickly view important
                        weather information without unnecessary complexity.
                    </p>

                    <Link to="/" className="explore-button">
                        Explore Weather →
                    </Link>

                </div>

                <div className="weather-visual">
                    <div className="visual-sun">
                        ☀️
                    </div>

                    <div className="visual-cloud cloud-a">
                        ☁️
                    </div>

                    <div className="visual-cloud cloud-b">
                        ☁️
                    </div>
                </div>

            </section>

        </main>
    );
}

export default About;