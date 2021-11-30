import React, { useEffect, useState, useRef } from 'react'
import {Row, Col, Container } from 'react-bootstrap'

export default function Weather() {
    const [currentWeather, setCurrentWeather] = useState({})
    const [forecast, setForecast] = useState({})
    const [city, setCity] = useState("Toronto")

    
    const API_KEY = "5bc651908c8e7c8e54c17e9b2732c7d7"
    const CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}&units=metric"
    
    useEffect(() => {
        // fetch(CURRENT_WEATHER_URL.replace("{city_name}", city).replace("{API_key}", API_KEY))
        //     .then(currentWeather => currentWeather.json())
        //     .then(currentWeather => setCurrentWeather(currentWeather))
        //     .catch(error => {alert(error.toString())})
        setCurrentWeather(require("../weather_api_output.json"))
    })

    if(Object.entries(currentWeather).length !== 0) {
        return (
            <Container className={["weatherApp", currentWeather.main.temp <= 0 ? "cold-weather" : "hot-weather"]}>

                <Row className="mt-3 text-center">
                    <h3>{city} - {currentWeather.sys.country}</h3>
                    <Col>
                        <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`} alt={currentWeather.weather[0].main} />
                        <h1>{currentWeather.main.temp} °C</h1>
                        <h2>{currentWeather.weather[0].main}</h2>
                        <h3>{currentWeather.weather[0].description}</h3>
                    </Col>
                </Row>
                <Row className="mt-3 text-center">
                    <Col>
                        <h4>Wind:</h4>
                        <p>Speed: {currentWeather.wind.speed} km/h</p>
                        <p>Deg: {currentWeather.wind.deg} °</p>
                    </Col>
                    <Col>
                        <h4>Clouds:</h4>
                        <p>All: {currentWeather.clouds.all}</p>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }
}