# WeatherNow 🌤️

WeatherNow is a responsive weather application developed using **React**. The application allows users to select different cities and view their current weather information using real-time data from the **OpenWeather API**.

The project also includes weather-based background animations, temperature unit conversion, theme switching, client-side navigation, and a responsive user interface.

---

## 📌 Project Overview

WeatherNow provides a simple and user-friendly way to check current weather conditions for different cities around the world.

The application retrieves weather information from the OpenWeather API and displays important information such as:

- Current temperature
- Feels-like temperature
- Weather condition
- Humidity
- Wind speed
- Atmospheric pressure
- Cloudiness
- Weather icon
- Selected city and country

The background of the home page changes according to the current weather condition.

---

## ✨ Features

### 🌡️ Real-Time Weather Information

WeatherNow retrieves current weather information from the OpenWeather API.

Users can view:

- Current temperature
- Feels-like temperature
- Weather condition
- Humidity
- Wind speed
- Atmospheric pressure
- Cloudiness
- Weather icon

---

### 🌍 City Selection

Users can select a city from the available city list.

Currently supported cities include:

- Kathmandu
- London
- Paris
- Pokhara
- Tokyo
- Beijing
- New York
- Sydney
- Berlin
- Brasilia

When the selected city changes, the application automatically fetches the latest weather information for that city.

---

### 🌡️ Celsius and Fahrenheit

Users can switch between:

- Celsius (°C)
- Fahrenheit (°F)

The application also changes the wind-speed unit accordingly:

- m/s for metric
- mph for imperial

The selected temperature unit is stored using **Local Storage**, allowing the preference to remain after refreshing the page.

---

### 🌧️ Weather-Based Animations

The home page includes different visual effects depending on the weather condition.

#### Rain

Rain drops fall across the page when the weather condition is rain.

#### Snow

Animated snowflakes appear when the weather condition is snow.

#### Clouds

Small animated clouds move across the background when the weather is cloudy.

#### Sunny Weather

A large animated sun is displayed when the weather is clear during the daytime.

#### Clear Night

A moon with crater details is displayed when the weather is clear at night.

The application determines whether it is day or night using the weather icon returned by OpenWeather.

---

### 🌓 Light and Dark Theme

WeatherNow supports both:

- Light Theme
- Dark Theme

Users can switch between the two themes using the theme toggle in the navigation/header.

The selected theme can be maintained using browser storage.

---

### 📱 Responsive Design

The application is designed to work on different screen sizes, including:

- Desktop
- Laptop
- Tablet
- Mobile devices

CSS media queries are used to adjust:

- Layout
- Font sizes
- Weather cards
- Controls
- Weather animations
- Navigation elements

---

### 🧭 Single Page Application

The application uses **React Router** for client-side navigation.

The main pages include:

- Home
- About
- Contact

Navigation between these pages does not require a complete browser refresh.

---

### 📩 Contact Page

The Contact page provides a simple contact form where users can enter information such as:

- Name
- Email
- Message

The page also contains contact information and a success message after submitting the form.

---

### ℹ️ About Page

The About page provides information about:

- WeatherNow
- Project mission
- Features
- Technologies used
- Purpose of the application

An **Explore Weather** button allows users to return to the Home page.

---

## 🛠️ Technologies Used

The project was developed using the following technologies:

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and animations |
| Axios | Making API requests |
| React Router | Client-side navigation |
| Vite | Development and build tool |
| OpenWeather API | Providing real-time weather data |
| Local Storage | Saving user preferences |

---

## 📂 Project Structure

A simplified project structure is shown below:

```text
WeatherNow/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md