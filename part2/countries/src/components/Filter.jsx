const Filter = ({ filterName, setFilterName }) => {

  const handleFilterNameChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      <form>
        <div>
          Find countries:
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