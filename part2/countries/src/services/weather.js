import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

const getWeather = ({ lat, long }) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`)
    return request.then(response => response.data)
}

export default { getWeather }

