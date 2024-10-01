import Filter from './components/Filter'
import countriesService from './services/countries'
import { useState, useEffect } from 'react'
import Country from './components/Country'
import CountryList from './components/CountryList'

function App() {
  const [countries, setCountries] = useState([])
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  const filteredCountries = countries.filter(p =>
    p.name.common.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <>
      <Filter filterName={filterName} setFilterName={setFilterName} />

      {filteredCountries.length === 0 && <p>No matches found</p>}
      {filteredCountries.length === 1 && <Country country={filteredCountries[0]} />}
      {filteredCountries.length > 1 && filteredCountries.length <= 9 && <CountryList countries={filteredCountries} />}
      {filteredCountries.length > 9 && <p>Too many matches, specify another filter</p>}
    </>
  )
}

export default App
