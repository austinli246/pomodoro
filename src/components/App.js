import React from "react";
import '../App.css';
import Session from './Session';
import Break from './Break';
import Timer from './Timer'
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute : 25, 
      timerSecond: 0
    }
/*
function to increase session/ decrease session
function to increase/decrease break 
set up a timer to equal sessionlength 
if the session is over, the timer for the break starts 
*/
  }

  incrementSession = () =>{
    if (this.state.sessionLength > 60){
      return ;
    }
    this.setState({
      sessionLength: this.state.sessionLength + 1,
      timerMinute:  this.state.timerMinute + 1
    })
  }
  decrementSession = () =>{
    if (this.state.sessionLength ===0){
      return ;
    }
    this.setState({
      sessionLength: this.state.sessionLength - 1,
      timerMinute: this.state.timerMinute -1
    })
  }
  incrementBreak =()=>{
    if (this.state.breakLength >15){
      return;
    }
    this.setState({breakLength: this.state.breakLength + 1 })
  }
  decrementBreak =()=>{
    if (this.state.breakLength ===0){
      return;
    }
    this.setState({breakLength: this.state.breakLength - 1 })
  }
  render(){
    return (
        <div>
          <Session 
          incrementSession = {this.incrementSession}
          decrementSession = {this.decrementSession}
          sessionLength = {this.state.sessionLength}
          />
          
          <Break
          incrementBreak = {this.incrementBreak}
          decrementBreak = {this.decrementBreak}
          breakLength = {this.state.breakLength}
          />

          <Timer
           incrementBreak = {this.incrementBreak}
           decrementBreak = {this.decrementBreak}
           timerMinute = {this.state.timerMinute}
           timerSecond = {this.state.timerSecond}
          />
        </div>
      )

  }
}
  export default App; 