import React, { Component } from 'react'
import Board from './Board'
import CorrectList from './CorrectList'
import WrongList from './WrongList'
import StartButton from './StartButton'
import GameEndPopUp from './GameEndPopUp'
import Footer from './Footer'
import Score from './Score'
import CountDownTimer from './CountDownTimer'

class initialize extends Component {

    state = {
        correctWords: [],
        incorrectWords: [],
        score: 0,
        timer: 3,
        letters: '                ',
        isGameStarted: false,
        gameHasEnded: false,
        validWordsList: []
    }

    randomString() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    reloadPage = () => {
        location.reload();
    }

    handleWord = (word) => {
        if (!this.checkWordLength(word)) return false
        if (!this.checkDuplicateWord(word)) return false
        if (!this.checkWordExists(word)) {
            this.setState({
                errorMessage: "The word not correct!"
            })
        }
    }

    checkDuplicateWord = (word) => {
        return (this.state.words.includes(word) ? false : true)
    }

    checkWordLength = (word) => {
        return (word.length >= 3) ? true : false
    }

    checkWordExists = (word) => {
        debugger
        return this.state.validWordsList.includes(word) ? this.addCorrectWord(word) : this.addInCorrectWord(word)
    }

    addCorrectWord = (word) => {
        const newWordArray = [word, ...this.state.correctWords]
        const newScore = this.scoreWords(newWordArray)
        this.setState({ correctWords: newWordArray, score: newScore })
        return true
    }

    addInCorrectWord = (word) => {
        const newWordArray = [word, ...this.state.incorrectWords]
        this.setState({ incorrectWords: newWordArray })
        return false
    }

    scoreWords = (wordArray) => {
        return wordArray.reduce((score, currentWord) => {
            return score += (currentWord.length - 2)
        }, 0)
    }

    getValidWords() {
        fetch("/boggle/wordList", {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            console.log(json)
            this.state.validWordsList = json
        })
    }

    startGame = () => {
        this.state.isGameStarted = false;
        this.setState({
            letters: this.randomString(),
            isGameStarted: true,
            gameHasEnded: false,
            timer: 60,
            words: [],
            score: 0
        }, () => {
            this.getValidWords()
            document.getElementById("txtInputWord").focus()
        })
    }

    render() {
        return (
            <div>
                <div id='game-over-container'>
                    <h1> Game Over </h1>
                    <h3>Congratulations! You scored {this.state.score} points</h3>
                    <button type='button' class="game-end-resart" onClick={this.reloadPage}> Start another game </button>
                </div>
                {this.state.isGameStarted ? null : <div><h1 class="welcome-text">Welcome to React Boogle Game</h1><StartButton startGame={this.startGame} /></div>}
                {this.state.isGameStarted ? <div className="game-container-grid" > {this.state.isGameStarted ? <CountDownTimer timer={this.props.timer} /> : null}
                    {/* <StartButton startGame={this.startGame} /> */}
                    <Board letters={this.state.letters} />
                    <table id="words-tracer">
                        <tbody>
                            <tr id="correct-words"><td height="350" width="200"><CorrectList words={this.state.correctWords} /></td></tr>
                            <tr id="incorrect-words"><td height="350" width="200"><WrongList words={this.state.incorrectWords} /></td></tr>
                        </tbody>
                    </table>
                    <Footer handleWord={this.handleWord}
                        letters={this.state.letters}
                        words={this.state.words}
                        score={this.state.score}
                        isGameStarted={this.state.isGameStarted} />
                    {this.state.errorMessage ? <p className="alert alert-danger error-message">{this.state.errorMessage}</p> : ""}
                    <Score score={this.state.score} />
                </div> : null}
            </div>
        )
    }
}

export default initialize