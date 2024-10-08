import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const App = () => {

  const handleClickNext = () => {
    setSelected(getRandomIntInclusive(0, anecdotes.length-1))
  }

  const handleClickVote = () => {
    const prevpoints = [...points]
    prevpoints[selected]++
    setPoints(prevpoints)
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const maxNumber = Math.max(...points);
  const indexMax = points.indexOf(maxNumber);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>   
      <div>   
        <Button handleClick={handleClickVote} text={'vote'}/>
        <Button handleClick={handleClickNext} text={'next anecdote'}/>
      </div>
      <h1>Anecdote with most votes</h1>
      {anecdotes[indexMax]}
    </div>
  )
}

export default App