import { useState, useEffect } from "react"
import weatherService from "../services/weather"

const Country = ({ country }) => {
    const [weather, setWeather] = useState(null)
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    // Obtenemos la primera capital, si existe
    const capital = country.capital?.[0] || "No capital available"

    useEffect(() => {
        if (country.capitalInfo?.latlng) {
            const [latitude, longitude] = country.capitalInfo.latlng
            setLat(latitude)
            setLong(longitude)

            // Llamar al servicio de clima solo si las coordenadas existen
            weatherService.getWeather({ lat: latitude, long: longitude })
                .then(data => {
                    setWeather(data)
                    console.log("Weather data: ", data)
                })
                .catch(err => console.log(err))
        }
    }, [country])

    return (
        <>
            <h3>{country.name.common}</h3>
            <p>Capital: {capital}</p>
            <p>Area: {country.area}</p>
            <p>Languages:</p>
            <ul>
                {country.languages && Object.entries(country.languages).map(([key, value]) => (
                    <li key={key}>{value}</li>
                ))}
            </ul>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

            {lat && long ? (
                <>
                    <p>Weather in {capital}</p>
                    {weather ? (
                        <>
                            <p>Temperature: {Math.round(weather.main.temp - 273)} °C</p>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                            <p>Wind: {weather.wind.speed} m/s</p>
                        </>
                    ) : (
                        <p>Loading weather...</p>
                    )}
                </>
            ) : (
                <p>No weather data available for this capital.</p>
            )}
        </>
    )
}

export default Country
