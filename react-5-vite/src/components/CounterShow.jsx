import React from 'react'

export default function CounterShow() {
    return (
        <>
        <h3>Counter</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decremento</button>
        </>
    );
}
