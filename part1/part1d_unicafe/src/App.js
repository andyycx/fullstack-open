import React, { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>

  )
}

const Stats = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good-bad) / all
  const positive = (good/all)*100

  if (good === 0 & neutral === 0 & bad === 0) {
    return(
      <p>No feedback given</p>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <StatLine text="Good" value={good} />
          <StatLine text="Neutral" value={neutral} />
          <StatLine text="Bad" value={bad} />
          <StatLine text="All" value={all} />
          <StatLine text="Average" value={average} />
          <StatLine text="Positive" value={positive + '%'} />
        </tbody>
      </table>
    </div>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // Everything between curly braces gets evaluated inmediately, so it will add one number, then the change will cause another render, so on and so forth
  // Using arrow functions instead of calling the useState function directly avoids the function to be called at render. 
  // Calling the useState directly without arrow function will cause an infite loop of re-rendering
  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>

      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App