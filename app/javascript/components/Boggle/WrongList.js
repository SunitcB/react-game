import React from 'react'

const WrongList = ({ words }) => {

  const addWrongWord = () => {
    return words.map((word, idx) => {
      return <li key={idx} className="wrong-list-items">{word}</li>
    })
  }

  return (
    <div className="wrong-list-container">
      <div className="wrong-list-grid" >
        <header className="wrong-list-title"><h3>Wrong Words</h3></header>
        <div >
          <ul className="wrong-list">{addWrongWord()}</ul>
        </div>
      </div>
    </div>
  )
}

export default WrongList
