
import React, { Component } from 'react';

class StopWatch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date("1970-01-01 00:00:00")
        };
        
        this._date = this.state.date;
        
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    formatTime(d) {
        let mins = ""  + d.getMinutes();
        if (mins.length == 1) {
            mins = "0" + mins;
        }

        let secs = ""  + d.getSeconds();
        if (secs.length == 1) {
            secs = "0" + secs;
        }

        return `${mins}:${secs}`;
    }
    
    render() {
        return(
            <div className="stop-watch">
              <h3>{this.formatTime(this.state.date)}</h3>
            </div>
        );
    }

    tick() {
        let newDate = this.state.date;
        newDate.setSeconds(newDate.getSeconds() + 1);
        
        this.setState({ date: newDate });
    }
    
    startTimer() {
        this.setState({ date: this._date });
        
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    stopTimer() {
        clearInterval(this.timerID);
        this._date = this.state.date;
    }

    resetTimer() {
        this.stopTimer();
        this.setState({ date: new Date("1970-01-01 00:00:00") });
        this.state.date = new Date("1970-01-01 00:00:00");
        this._date = this.state.date;
    }
}

export default StopWatch;
