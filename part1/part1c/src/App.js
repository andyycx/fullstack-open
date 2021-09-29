//By default updating components state or props, component will re-render
import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0) //react hook, counter is state variable, initial state is within useState, in this case 0
  // Never call hooks inside loops, conditional expressions. Only inside functions defining a component
  
  // setTimeout( //setTimeout executes a function after X time setCounter(code[,delay])
  //   () => setCounter(counter + 1),    //setCounter is state modifying function, react re-renders the component
  //   1000  
  // )

//onClick event handler
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
    </div>

  )
}

export default App