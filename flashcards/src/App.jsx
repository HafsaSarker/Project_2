import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import studySet from './studySet'
import Card from './components/Card'
import './App.css'

function App() {
  const [question, setQuestion] = useState(studySet[0].question);
  const [answer, setAnswer] = useState(studySet[0].answer)
  const showRandomCard = () =>{
    const randNum = Math.floor(Math.random() * studySet.length);

    setQuestion(studySet[randNum].question);
    setAnswer(studySet[randNum].answer);
  }
  return (
    <div className="App">
      <header>
        <h1>Food Items But Say It In French!</h1>
        <h3>How much of these food terms in French do you know? Except for "baguette" and "croissant"? Let's put your knowledge on the test</h3>
        <h4>Number of Cards: 30</h4>
      </header>
      <Card 
        question = {question}
        answer = {answer}
      />
      <div className="btn-container">
        <button onClick={showRandomCard}  ><span><AiOutlineArrowLeft /></span>
        </button>
        <button onClick={showRandomCard}>
        <span><AiOutlineArrowRight /></span>
        </button>
        
      </div>
    </div>
  )
}

export default App
