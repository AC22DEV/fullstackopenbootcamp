const Filter = ({filterName, setFilterName}) => {

    const handleFilterNameChange = (event) => {
      setFilterName(event.target.value)
    }
  
    return (
      <div>
        <h1>Phonebook</h1>
          <form>
            <div>
                filter shown with: 
                <input  
                  value={filterName}
                  onChange={handleFilterNameChange}
                />
              </div>
          </form>
      </div>
      
    )
  
  }

  export default Filter