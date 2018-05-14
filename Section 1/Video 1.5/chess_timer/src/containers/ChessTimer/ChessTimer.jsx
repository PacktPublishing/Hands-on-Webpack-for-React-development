
import React, { Component } from 'react';

// components
import StopWatch from '../../components/StopWatch/StopWatch.jsx';

// styles
import classes from '../../styles/app.scss';

// images
import whiteKing from '../../img/Chess_klt60.png';
import blackKing from '../../img/Chess_kdt60.png';

class ChessTimer extends Component {

    constructor(props) {
        super(props);

        this.state = {
	        player1: 'inactive',
	        player2: 'inactive',
            switchLabel: "Start Game"
        };

        // our methods
        this.updateGame = this.updateGame.bind(this);
        this.switchTurns = this.switchTurns.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    updateGame() {
        if (this.state.player1 == 'inactive' && this.state.player2 == 'inactive') {
            this.switchTurns();
        }
        else {
            this.player1Timer.stopTimer();
            this.player2Timer.stopTimer();
            
            this.setState({
                switchLabel: "Start Game",
                player1: 'inactive',
                player2: 'inactive'
    	    });
        }
    }

    resetGame() {
        this.player1Timer.resetTimer();
        this.player2Timer.resetTimer();
    }
    
    switchTurns() {

        // start game OR white's turn
        if (this.state.player1 == 'inactive'
            && (this.state.player2 == 'inactive' || this.state.player2 == 'active')) {
            this.state.player1 = 'active';
            this.state.player2 = 'inactive';
            this.player1Timer.startTimer();
            this.player2Timer.stopTimer();

        }
        // black's turn
        else if (this.state.player1 == 'active' && this.state.player2 == 'inactive') {
            this.state.player1 = 'inactive';
            this.state.player2 = 'active';
            this.player1Timer.stopTimer();
            this.player2Timer.startTimer();
        }
        
        this.setState({ switchLabel: "Stop Game" });
    }
    
    render() {

        let player1State = this.state.player1 == 'inactive' ? "disabled" : "";
        let player2State = this.state.player2 == 'inactive' ? "disabled" : "";
        
        return(
            <div>
    	      <h1 className="app-title">Chess Timer</h1>
              <div className="wrapper">
                <div className="player-info">
	        	  <img src={whiteKing} />
                  <h3 className="player-label">White</h3>
                  <StopWatch ref={(instance) => { this.player1Timer = instance; }} />
                  <button className="btn btn-dark btn-lg" disabled={player1State} 
                          onClick={this.switchTurns}>Submit Move</button>
                </div>
                <div className="controls">
		            <button className="btn btn-lg btn-success"
                            onClick={this.resetGame}>New Game</button>
		            <button className="btn btn-lg btn-info"
                            onClick={this.updateGame}>{this.state.switchLabel}</button>
		        </div>
                <div className="player-info">
		            <img src={blackKing} />
                    <h3 className="player-label">Black</h3>
                    <StopWatch ref={(instance) => { this.player2Timer = instance; }} />
                    <button className="btn btn-dark btn-lg" disabled={player2State}
                            onClick={this.switchTurns}>Submit Move</button>
                </div>  
              </div>
            </div>
        );
    }
}

export default ChessTimer;
