import React from 'react'
class Timer extends React.Component {
    constructor(){
        super();
        this.state ={
            isOn : false,
            isSession : true,
            isBreak : false
        }
    }

    decreaseSession = () => {
        this.setState({isOn:true})
        if (this.state.isOn === true){
            if(this.props.timerSecond === 0){
                this.setState({
                   timerSecond: 59,
                    timerMinute: this.props.timerMinute -1,
                })
                console.log(this.props.timerSecond)
            }
            else if (this.props.timerMinute === 0 ){
                this.setState({
                    timerMinute: this.props.BreakLength,
                })
            }
            else{
             
                this.setState({
                    timerSecond: this.props.timerSecond -1
                })
            }
        }
    }
    render(){
        return (
            <div>
                <button onClick = {this.decreaseSession}>Start</button>
            {this.props.timerMinute} : {this.props.timerSecond}
             </div>
    )
}
}

export default Timer
