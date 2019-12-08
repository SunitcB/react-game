
import React, { Component } from 'react';
import Initialize from '../Boggle/initialize'
// import './style/App.css';
// import './style/index.css';
// import './style/home.css'
// import './style/timer.css'
// import './style/game.css'
// import './style/navbar.css'
// import './style/highscores.css'
// import GameContainer from './GameContainer'
// import { BrowserRouter, Route } from 'react-router-dom';
// import Home from './Home.js'
// import HighScore from './HighScore.js'
// import Navbar from './Navbar.js'


class Boggle extends Component {

    render() {
        return (
            <div className="boggle">
                <Initialize/>
            </div>
        );
    }
}

export default Boggle;