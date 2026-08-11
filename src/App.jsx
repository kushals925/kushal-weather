import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

    // Get saved theme from Local Storage
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    // Apply theme to the main application
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <Router>

            <Navbar
                theme={theme}
                setTheme={setTheme}
            />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Routes>

        </Router>
    );
}

export default App;