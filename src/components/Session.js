import React from 'react'
class Session extends React.Component {

    
render(){
    
    return (
        <div>
            <button onClick ={this.props.incrementSession}>+</button>
            <button onClick ={this.props.decrementSession}>-</button>
            Session: {this.props.sessionLength}
        </div>
    )
}
}

export default Session
