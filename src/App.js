import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) =>{
    setGood(newValue)
  }

  const setToNeutral = (newNeutral) =>{
      setNeutral(newNeutral)
  }

  const setToBad = (newBad) =>{
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedBack</h1>
       
      <button onClick={()=>setToGood(good +1)}>good</button>
      <button onClick={()=>setToNeutral(neutral +1)}>neutral</button>
      <button onClick={()=>setToBad(bad +1)}>bad</button>

      <h2>statistic</h2>

      <p> good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        all = {bad + neutral + good}
      </p>
      <p>
        average = {(bad + neutral + good)/3}
      </p>
      <p>
        pourcentage = exo 1d
      </p>

    </div>
  )
}


export default App