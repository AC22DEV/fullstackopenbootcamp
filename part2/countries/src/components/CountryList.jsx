import { useState } from "react"
import Country from "./Country"

const CountryList = ({ countries }) => {
    const [selectedCountry, setSelectedCountry] = useState(null)

    // Función para mostrar un país cuando se hace clic en "show"
    const showCountry = (country) => {
        setSelectedCountry(country)
    }

    return (
        <>
            {countries.map(country => (
                <p key={country.name.common}>
                    {country.name.common}
                    <button onClick={() => showCountry(country)}>show</button>
                </p>
            ))}

            {/* Mostrar el país seleccionado si existe */}
            {selectedCountry && <Country country={selectedCountry} />}
        </>
    )
}

export default CountryList
