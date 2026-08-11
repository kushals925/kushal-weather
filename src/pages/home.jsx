import axios from "axios";
import { useEffect, useState } from "react";
import "./home.css";

const apiKey = "d72be82170a13f9d077d53d7b6e1b18f";

/* =========================================
   RAIN DROP DATA
========================================= */

const rainDrops = Array.from({ length: 70 }, (_, index) => ({
    left: (index * 37) % 100,
    duration: 0.8 + ((index * 13) % 15) / 10,
    delay: -((index * 7) % 20) / 10
}));

/* =========================================
   SNOWFLAKE DATA
========================================= */

const snowflakes = Array.from({ length: 45 }, (_, index) => ({
    left: (index * 43) % 100,
    duration: 5 + ((index * 11) % 40) / 10,
    delay: -((index * 5) % 30) / 10
}));

function Home() {
    const [city, setCity] = useState("Kathmandu");
    const [weather, setWeather] = useState(null);

    const [unit, setUnit] = useState(
        localStorage.getItem("unit") || "metric"
    );

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    /* =========================================
       FETCH WEATHER WHEN CITY OR UNIT CHANGES
    ========================================= */

    useEffect(() => {
        fetchWeather(city);
    }, [city, unit]);

    const fetchWeather = async (selectedCity) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=${unit}`
            );

            setWeather(response.data);
        } catch (err) {
            console.error(err);
            setError("Unable to load weather data.");
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    /* =========================================
       CHANGE TEMPERATURE UNIT
    ========================================= */

    const handleUnitChange = () => {
        const newUnit =
            unit === "metric"
                ? "imperial"
                : "metric";

        setUnit(newUnit);
        localStorage.setItem("unit", newUnit);
    };

    const temperatureUnit =
        unit === "metric"
            ? "°C"
            : "°F";

    const speedUnit =
        unit === "metric"
            ? "m/s"
            : "mph";

    /* =========================================
       WEATHER CONDITION INFORMATION
    ========================================= */

    const weatherCondition =
        weather?.weather?.[0]?.main?.toLowerCase() || "";

    const weatherIcon =
        weather?.weather?.[0]?.icon || "";

    /*
        OpenWeather icons:
        01d = Clear sky - daytime
        01n = Clear sky - nighttime
    */

    const isNight = weatherIcon.endsWith("n");

    const isClear = weatherCondition === "clear";

    return (
        <main className={`home-page ${weatherCondition}`}>

            {/* =========================================
                WEATHER BACKGROUND ANIMATION
            ========================================= */}

            <div className="weather-animation">

                {/* =====================================
                    RAIN
                    KEEPING ORIGINAL RAIN ANIMATION
                ===================================== */}

                {weatherCondition === "rain" && (
                    <div className="rain-animation">

                        {rainDrops.map((drop, index) => (
                            <span
                                key={index}
                                style={{
                                    left: `${drop.left}%`,
                                    animationDuration: `${drop.duration}s`,
                                    animationDelay: `${drop.delay}s`
                                }}
                            ></span>
                        ))}

                    </div>
                )}

                {/* =====================================
                    SNOW
                ===================================== */}

                {weatherCondition === "snow" && (
                    <div className="snow-animation">

                        {snowflakes.map((snow, index) => (
                            <span
                                key={index}
                                style={{
                                    left: `${snow.left}%`,
                                    animationDuration: `${snow.duration}s`,
                                    animationDelay: `${snow.delay}s`
                                }}
                            >
                                ❄
                            </span>
                        ))}

                    </div>
                )}

                {/* =====================================
                    CLOUDS
                ===================================== */}

                {weatherCondition === "clouds" && (
                    <div className="cloud-animation">

                        <span className="animated-cloud cloud-one">
                            ☁️
                        </span>

                        <span className="animated-cloud cloud-two">
                            ☁️
                        </span>

                        <span className="animated-cloud cloud-three">
                            ☁️
                        </span>

                    </div>
                )}

                {/* =====================================
                    CLEAR DAY - SUN
                ===================================== */}

                {isClear && !isNight && (
                    <div
                        className="sun-animation"
                        aria-hidden="true"
                    >
                        <div className="sun-glow">

                            <div className="sun-rays"></div>

                            <div className="sun-core"></div>

                        </div>
                    </div>
                )}

                {/* =====================================
                    CLEAR NIGHT - MOON
                ===================================== */}

                {isClear && isNight && (
                    <div
                        className="moon-animation"
                        aria-hidden="true"
                    >
                        <div className="moon">

                            <span className="moon-crater crater-one"></span>

                            <span className="moon-crater crater-two"></span>

                            <span className="moon-crater crater-three"></span>

                            <span className="moon-crater crater-four"></span>

                        </div>
                    </div>
                )}

            </div>

            {/* =========================================
                MAIN CONTENT
            ========================================= */}

            <div className="weather-content">

                {/* =====================================
                    HERO SECTION
                ===================================== */}

                <section className="hero-section">

                    <div className="hero-content">

                        <p className="hero-small-title">
                            WEATHER INFORMATION
                        </p>

                        <h1>
                            Weather Dashboard
                        </h1>

                        <p>
                            Check the current weather conditions of your
                            favourite cities around the world.
                        </p>

                    </div>

                </section>

                {/* =====================================
                    WEATHER CONTROLS
                ===================================== */}

                <section className="weather-controls">

                    <div className="city-control">

                        <label htmlFor="city">
                            Select City
                        </label>

                        <select
                            id="city"
                            value={city}
                            onChange={(e) =>
                                setCity(e.target.value)
                            }
                        >

                            <option value="Kathmandu">
                                Kathmandu
                            </option>

                            <option value="London">
                                London
                            </option>

                            <option value="Paris">
                                Paris
                            </option>

                            <option value="Pokhara">
                                Pokhara
                            </option>

                            <option value="Tokyo">
                                Tokyo
                            </option>

                            <option value="Beijing">
                                Beijing
                            </option>

                            <option value="New York">
                                New York
                            </option>

                            <option value="Sydney">
                                Sydney
                            </option>

                            <option value="Berlin">
                                Berlin
                            </option>

                            <option value="Brasilia">
                                Brasilia
                            </option>

                        </select>

                    </div>

                    <button
                        className="unit-button"
                        onClick={handleUnitChange}
                    >
                        Toggle Unit (
                        {unit === "metric"
                            ? "Celsius"
                            : "Fahrenheit"}
                        )
                    </button>

                </section>

                {/* =====================================
                    ERROR MESSAGE
                ===================================== */}

                {error && (
                    <section className="weather-error">

                        <h2>
                            Weather data unavailable
                        </h2>

                        <p>
                            {error}
                        </p>

                    </section>
                )}

                {/* =====================================
                    LOADING MESSAGE
                ===================================== */}

                {loading && (
                    <section className="loading-section">

                        <div className="loading-spinner"></div>

                        <p>
                            Loading weather data...
                        </p>

                    </section>
                )}

                {/* =====================================
                    WEATHER DATA
                ===================================== */}

                {weather && !loading && (
                    <section className="weather-card">

                        {/* =================================
                            MAIN WEATHER INFORMATION
                        ================================= */}

                        <div className="weather-top">

                            <div className="location-information">

                                <p className="weather-label">
                                    CURRENT WEATHER
                                </p>

                                <h2>
                                    {weather.name},{" "}
                                    {weather.sys?.country}
                                </h2>

                                <p className="condition">
                                    {weather.weather?.[0]?.description}
                                </p>

                            </div>

                            <div className="temperature-information">

                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather?.[0]?.icon}@2x.png`}
                                    alt={
                                        weather.weather?.[0]
                                            ?.description ||
                                        "Weather icon"
                                    }
                                />

                                <div>

                                    <h3>
                                        {Math.round(
                                            weather.main?.temp
                                        )}
                                        {temperatureUnit}
                                    </h3>

                                    <p>
                                        Feels like{" "}
                                        {Math.round(
                                            weather.main?.feels_like
                                        )}
                                        {temperatureUnit}
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* =================================
                            WEATHER DETAILS
                        ================================= */}

                        <div className="weather-details">

                            <div className="weather-detail-box">

                                <div className="detail-icon">
                                    💧
                                </div>

                                <div>

                                    <p>
                                        Humidity
                                    </p>

                                    <strong>
                                        {weather.main?.humidity}%
                                    </strong>

                                </div>

                            </div>

                            <div className="weather-detail-box">

                                <div className="detail-icon">
                                    💨
                                </div>

                                <div>

                                    <p>
                                        Wind Speed
                                    </p>

                                    <strong>
                                        {weather.wind?.speed}{" "}
                                        {speedUnit}
                                    </strong>

                                </div>

                            </div>

                            <div className="weather-detail-box">

                                <div className="detail-icon">
                                    🌡️
                                </div>

                                <div>

                                    <p>
                                        Pressure
                                    </p>

                                    <strong>
                                        {weather.main?.pressure} hPa
                                    </strong>

                                </div>

                            </div>

                            <div className="weather-detail-box">

                                <div className="detail-icon">
                                    ☁️
                                </div>

                                <div>

                                    <p>
                                        Cloudiness
                                    </p>

                                    <strong>
                                        {weather.clouds?.all}%
                                    </strong>

                                </div>

                            </div>

                        </div>

                        {/* =================================
                            FOOTER
                        ================================= */}

                        <p className="weather-footer">
                            Weather information provided by OpenWeather.
                        </p>

                    </section>
                )}

            </div>

        </main>
    );
}

export default Home;