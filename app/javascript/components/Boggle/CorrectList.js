import React from 'react'

const CorrectList = ({ words }) => {

  const addCorrectWord = () => {
    return words.map((word, idx) => {
      return <li key={idx} className="correct-list-items">{word}</li>
    })
  }

  return (
    <div className="correct-list-container">
      <div className="correct-list-grid" >
        <header className="correct-list-title"><h3>Correct Words</h3></header>
        <div >
          <ul className="correct-list">{addCorrectWord()}</ul>
        </div>
      </div>
    </div>
  )
}

export default CorrectList
