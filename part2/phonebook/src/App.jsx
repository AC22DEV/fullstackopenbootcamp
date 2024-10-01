import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const [newName, setNewName] = useState('')
  const [filterName, setFilterName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <PersonForm
        persons={persons} setPersons={setPersons}
        newName={newName} setNewName={setNewName}
        newNumber={newNumber} setNewNumber={setNewNumber}
        setErrorMessage={setErrorMessage} />
      <Notification message={errorMessage} />
      <Persons persons={persons} setPersons={setPersons} filterName={filterName} />
    </div>
  )
}

export default App