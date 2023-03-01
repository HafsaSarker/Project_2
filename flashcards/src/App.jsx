import { useState } from 'react'
import studySet from './studySet'
import Card from './components/Card'
import './App.css'

function App() {
  
  const setMap = studySet.map((set) => {
    return <Card 
      key = {set.question}
      question = {set.question}
      answer = {set.answer}
    />
  })
  return (
    <div className="App">
      <header>
        <h1>Food Items But Say It In French!</h1>
        <h3>How much of these food terms in French do you know? Except for "baguette" and "croissant"? Let's put your knowledge on the test</h3>
        <h4>Number of Cards: 30</h4>
      </header>
      {setMap}
    </div>
  )
}

export default App
