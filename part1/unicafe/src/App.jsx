import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text} {value}</td>
  </tr>

)

const Statistics = ({good,neutral,bad}) => (
  (good+neutral+bad)?
  <table>
  <thead>
    <tr>
      <th><h1>Statistics</h1></th>
    </tr>
      
  </thead>
  <tbody>
  <StatisticLine text="Good" value={good} />
  <StatisticLine text="Neutral" value={neutral} />
  <StatisticLine text="Bad" value={bad} />
  <StatisticLine text="All" value={good+neutral+bad} />
  <StatisticLine text="Average" value={(good-bad)/(good+neutral+bad)} />
  <StatisticLine text="Positive" value={good/(good+neutral+bad)*100+' %'} />
  </tbody>
  </table>
  :<h3>No feedback given</h3>
)

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
    <>
    <h1>Give feedback</h1>
    <Button handleClick={handleGood} text={'GOOD'}/>
    <Button handleClick={handleNeutral} text={'NEUTRAL'}/>
    <Button handleClick={handleBad} text={'BAD'}/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
