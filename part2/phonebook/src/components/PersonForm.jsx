import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, setErrorMessage }) => {

  const addPerson = (event) => {
    event.preventDefault()

    // Comprueba si el nombre ya existe en la lista
    const nameExists = persons.some(person => person.name === newName)
    if (!newName) {
      alert(`${newName} name is compulsatory`)

    } else {

      if (nameExists) {

        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
          console.log('Vamos a editar')
          const oldPerson = persons.find(p => p.name == newName)
          const newPerson = {
            name: newName,
            number: newNumber,
            id: oldPerson.id
          }
          console.log(oldPerson);

          personService
            .update(oldPerson.id, newPerson)
            .then(returnedPerson => {
              setPersons(persons.map(p => p.id !== oldPerson.id ? p : returnedPerson))
              setNewName('') // Limpia el campo de entrada
              setNewNumber('') // Limpia el campo de entrada
            }
            )
            .catch(error => {
              setErrorMessage(`Information of ${newName} has already been removed from server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
          setErrorMessage(`Replaced number of ${newName}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }

      } else {

        const newId = persons.length > 0
          ? Math.max(...persons.map(person => person.id)) + 1
          : 1;

        const newPerson = {
          name: newName,
          number: newNumber,
          id: newId.toString()
        }
        personService
          .create(newPerson)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setNewName('') // Limpia el campo de entrada
            setNewNumber('') // Limpia el campo de entrada
          })
        setErrorMessage(`Added ${newName}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm