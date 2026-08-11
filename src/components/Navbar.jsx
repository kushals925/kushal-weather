import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {

    const handleThemeChange = () => {

        const newTheme =
            theme === "light"
                ? "dark"
                : "light";

        setTheme(newTheme);

        localStorage.setItem(
            "theme",
            newTheme
        );
    };

    return (
        <nav className="navbar">

            <div className="navbar-container">

                {/* Logo */}

                <Link
                    to="/"
                    className="navbar-logo"
                >
                    WeatherNow
                </Link>


                {/* Navigation */}

                <div className="navbar-links">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/about">
                        About
                    </Link>

                    <Link to="/contact">
                        Contact
                    </Link>

                </div>


                {/* Theme Toggle */}

                <div className="theme-control">

                    <span className="theme-label">
                        {theme === "light"
                            ? "Light"
                            : "Dark"}
                    </span>

                    <label className="theme-switch">

                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={handleThemeChange}
                        />

                        <span className="theme-slider"></span>

                    </label>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;