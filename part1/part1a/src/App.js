//Using a component inside another one using JSX
const Hello = (props) => {  //Can pass data to components using props
  return (
    <div>
      <p>Yo {props.name} you are {props.age} years old</p>
    </div>
  )
}

//App is root
const App = () => {
  console.log('Hello from component') //F12 Console
  const a = 10  //Can use variables
  const b = 20
  const age = 22
  return(
    <div>
      <p>Hello World</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name="Andy" age={a+b}/>
      <Hello name="Peter" age={age} />
    </div>
  )
}

export default App;

//React components do not return HTML, they return JSX instead, and are compiled into JS
// In JSX every tag needs to be closed e.g. <br />
