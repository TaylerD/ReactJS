import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      user: {
          name: 'Gabriel Boric',
          age: 36
      }
    };
  }

  handleIncrement() {
/*     this.setState((state) =>{
        return {
            count: this.state.count + 1,
        }
    }); */

    this.setState(({count : prevState}) =>{
        return {
            count: prevState + 1,
        }
    });

    this.setState(({ user }) =>{
        return {
            user: {
                ...user,
                age: user.age + 1
            }
        }
    });

 /*    this.setState({
      count: this.state.count + 1,
    }); */
  }

  /* 
  handleIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  } */
  
  handleDecrement() {
    this.setState((state) =>{
        return {
            count: this.state.count - 1,
        }
    });
  }

  componentDidMount(){
      console.log("Counter didMount!");
  }

  componentDidUpdate(){
      console.log("Counter didUpdate!");
  }

  render() {
    return (
      <>
        <h3>Counter</h3>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncrement.bind(this)}>Increment</button>
        <button onClick={this.handleDecrement.bind(this)}>Decremento</button>
      </>
    );
  }
}