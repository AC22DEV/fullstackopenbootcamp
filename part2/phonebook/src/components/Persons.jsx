import personService from '../services/persons'

const deletePerson = (id, persons, setPersons) => {
  if (window.confirm(`¿Estás seguro de que deseas eliminar a la persona con id ${id}?`)) {
    personService
      .destroy(id)
      .then(() => {
        console.log('Persona eliminada con id', id)
        setPersons(persons.filter(person => person.id !== id))  // Actualiza el estado eliminando la persona
      })
      .catch(error => {
        console.error('Error eliminando la persona:', error)
      })
  }
}

const Person = ({ person, persons, setPersons }) => {
  return (
    <div>
      <p>{person.name} {person.number} 
        <button onClick={() => deletePerson(person.id, persons, setPersons)}>delete</button>
      </p>
    </div>
  )
}
  
const Persons = ({persons, setPersons, filterName}) => {
    return (
        <div>
        <h2>Numbers</h2>
        {persons
            .filter(p => p.name.toLowerCase().includes(filterName.toLowerCase())) // Filtra los nombres que incluyen el valor del filtro
            .map(p => (
            <Person key={p.id} person={p} setPersons={setPersons} persons={persons}/> // Mapea cada elemento que cumple la condición del filtro
            ))
        }
        </div>
    )
}

export default Persons