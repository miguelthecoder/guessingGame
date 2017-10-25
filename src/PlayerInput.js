import React, { Component } from 'react';

import './index.css';

const initState = {
  inputs: "",
  attempts: 0,
  Highscore: 0,
  gamemode: "",
  correctAnswer: 0,
  message: "",
  expert: "",
  standard: "",
  instructions: ""
};


class App extends Component {
  constructor(){
    super();
    this.getInput = this.getInput.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.standardLevel = this.standardLevel.bind(this);
    this.expertLevel = this.expertLevel.bind(this);
    this.reset = this.reset.bind(this);
    this.state = initState;
  }

  getInput(e){
    const copyState = Object.assign({}, this.state);
    copyState.input = e.target.value;
    this.setState({input: copyState.inputs})
  }

  handleUserInput(){
    const copyState = Object.assign({}, this.state);
    const userInput = copyState.inputs;
    let attemptsMade = copyState.attempts+1;
    let Highscore = attemptsMade;
    let message;
    if (userInput < copyState.correctAnswer) {
      message = "Try again you're too low";
    }else if (userInput > copyState.correctAnswer) {
      message = "You're too high do better";
    }else if (!userInput){
      message = "Enter a number please";
    }else{
      message = "You are the chosen one";
    }

    this.setState({
      attempts: attemptsMade,
      message: message,
      Highscore: Highscore
    })
  }

  standardLevel(){
    const randNum = Math.floor((Math.random()*10)+1);
    const standardInstuctions = "Guess the number between 1 - 10";
    this.setState({
      correctAnswer: randNum,
      gamemode: "Standard",
      instructions: standardInstuctions
    })
  }

  expertLevel(){
    const randNum = Math.floor((Math.random()*100)+1);
    const expertInstructions = "Guess the number between 1 - 100";
    this.setState({
      correctAnswer: randNum,
      gamemode: "Expert",
      instructions: expertInstructions
    })
  }

  reset(){
    this.setState(initState);
  }

    render() {

      return(
        <div id="container">
          <div className="difficulty-selector">
            <h1>Guessing Game</h1>
            <h2>Start Game</h2>
            <p>Game modes</p>
            <div className = "controller-buttons">
              <button className="standard" onClick={this.standardLevel}>Standard</button>
              <button className="expert" onClick={this.expertLevel}>Expert</button>
            </div>
          </div>

          <div className="game">
            <div className="text">
              <h2 className="difficulty-display">{this.state.gamemode}</h2>
              <p>{this.state.instructions}</p>
              <p className="incorect">{this.state.message}</p>

              <label htmlFor="guess">Your Guess: <input id="guess" name="guess" type="number" placeholder="Guess" onChange={this.getInput} onClick={this.guessCounter} required/></label>
              <p className="totalGuesses">Total guesses: {this.state.attempts}</p>
              <p className="highschore">Highscore:{this.state.Highscore}</p>


              <div>
                <input   onClick={this.handleUserInput} type="submit" name="submit" value="Submit"/>
                <input  onClick={this.reset} type="reset" name="reset" value="Reset"/>
              </div>

            </div>
          </div>
        </div>
      );
    }
  }

export default App;
