import React, { Component } from 'react';


/*
Let`s play with Polymorphism .......Ah Javascript is not typed, polymorphism does`t make sense
*/
export class Person extends Component {
  iAm() {
    // All parameters can be accessed by props
    return `I am a person and my name is ${this.props.name}`;
  }

  render() {
    return (
      <div>
        {this.iAm()}
      </div>
    );
  }
}

export class Student extends Person {
  iAm() {
    return `I am a student and my name is ${this.props.name}`;
  }
}


export class Traveller extends Person {
  iAm() {
    return `I am a traveller and my name is ${this.props.name ? this.props.name : 'no name yet'}`;
  }
}
