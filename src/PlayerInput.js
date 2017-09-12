import React, { Component } from 'react';
class PlayerInput extends Component {
  constructor() {
    super();
    this.state= {
      randomNumber:0,
      guessInput: '',
      guess: '',
      min: 1,
      max: 10,
      playerMin:'',
      playerMax:''
    };
  }

generateRandomNumber(min = 0, max = 11 ) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  //mount component
  componetDidMount() {
    this.setState({ randomNumber: this.generateRandomNumber()});
  }
  handleUserInput(e) {
    this.setState( { guessInput: e.target.value});
  }
  handleRangeInput(e) {
    let { name, value } = e.target;
    this.setState({ [name]: parseInt(value) });
  }
  handleRangeClick () {
    this.setState({
      min: this.state.playerMin,
      max: this.state.playerMax,
      playerMax: '',
      playerMin:'',
      randomNumber: this.generateRandomNumber(this.state.playerMax, this.state.playerMax)
    });
  }
  handleGuessClick() {
    this.setState ({
      guess: parseInt(this.state.guessInput),
      guessInput:''
    });
    //displayMessage good or bad.
    this.displayMessage();
  }
  handleClearClick() {
    this.setState({ guessInput:''});
  }
  handleResetClick() {
    this.setState({
      guessInput: '',
      guess:'',
      randomNumber: this.generateRandomNumber(),
      message:'',
      min: 0,
      max: 10
    });
  }
  displayMessage() {
    let playerGuess = parseInt(this.state.guessInput);
    let min = this.state.min;
    let max = this.state.max;

    if ( playerGuess > max || playerGuess < min ) {
      this.setState({
        message: 'Please Guess a Number between ' + min + ' and ' + max
      });
    }
    else if (playerGuess === this.state.randomNumber) {
      this.setState ({
        message:'Good Job! Right Answer, Ready for Expert level?',
        min: min += 1,
        max: max += 90,
        randomNumber: this.generateRandomNumber(min, max)
      });
    }  else if ( playerGuess > this. state.randomNumber ) {
        this.setState ({
           message: 'This number is too high!! try again...'
        });
      } else {
        this.setState ({
          message: 'Too low!! Try again...'
        });
      }
    }
    disableRangeButton() {
      if ( this.state.playerMin === '' || this.state.palyermax === '') {
         return true
      } else {
        return false
      }
    }

    render() {

        return (
          <main className='container'>

            <div className='messages'>
              <h3 className='last-guess'>
                Your last guess was:<br />
              </h3>

              <h2 className='number-guess'>
                {this.state.guess}
              </h2>

              <h4 className='message'>
                {this.state.message}
              </h4>
            </div>
            <div className='left-container'>
             <h3 className='min-max-text'>
               Guess a number between {this.state.min} and {this.state.max}
             </h3>

              <input
                type='number'
                className='guess-input'
                value={this.state.guessInput}
                onChange={this.handleUserInput.bind(this)}
                placeholder="Guess a number Here!" />

              <section className='buttons'>
                <button
                  className="GuessButton"
                  onClick={this.handleGuessClick.bind(this)}
                  disabled={this.state.guessInput === '' ? true : false}>
                  Guess
                </button>

                <button
                  className="ClearButton"
                  onClick={this.handleClearClick.bind(this)}
                  disabled={this.state.guessInput === '' ? true : false}>
                  Clear
                </button>

                <button
                  className="ResetButton"
                  onClick={this.handleResetClick.bind(this)}
                  disabled={this.state.min === 0 ? true : false}>
                  Reset
                </button>
              </section>
            </div>
          </main>
        )
      }

    }

    export default PlayerInput;
