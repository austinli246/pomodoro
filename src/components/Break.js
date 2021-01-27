import React from 'react'
class Break extends React.Component {
render(){
    
    return (
        <div>
            <button onClick ={this.props.incrementBreak}>+</button>
            <button onClick ={this.props.decrementBreak}>-</button>
            Break: {this.props.breakLength}
        </div>
    )
}
}

export default Break
