import React from 'react'
import WordForm from './WordForm'


const Footer = (props) => {

  return(
    <div className="footer-container">
      <WordForm handleWord={props.handleWord} letters={props.letters} isGameStarted={props.isGameStarted}/>
    </div>
  )
}

export default Footer;
