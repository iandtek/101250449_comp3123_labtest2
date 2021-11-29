import React, { Component, useEffect } from 'react'

export default class Weather extends Component {

    constructor(props){
        super(props)
        this.state = {
            city: "Toronto",
            data: {}
        }
        this.API_KEY = "5bc651908c8e7c8e54c17e9b2732c7d7"
        this.API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_key}"
    }

    useEffect(() => {
        fetch(this.API_URL.replace("{city_name}", this.state.city).replace("{API_key}", this.API_KEY))
    })

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
