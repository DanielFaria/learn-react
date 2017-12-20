import React, {Component} from  'react';


/*
Let`s play with Polymorphism .......Ah Javascript is not typed, polymorphism does`t make sense
*/
export class Person extends Component{
    constructor(props,name = 'No name yet'){
        super(props);
        this.name = name;
    }

    iAm(){
      //Why is necessary?
      return `I am a person and my name is ${this.name.name}`;
    }
    
    render(){
        return (
            <div>
             {this.iAm()}
           </div>
        );
    }     
}

export class Student extends Person{
    constructor(name = "A name for student is expected"){
        super(name);
        this.name = name;
    }
    iAm(){
      console.log(this.name.name);
      return `I am a student and my name is ${this.name.name}`;
    }
}


export class Traveller  extends Person {
    constructor (name = "A name for a traveller is expected"){
       super(name);
       this.name = name
    }
    
    iAm(){
        return `I am a traveller and my name is ${this.name.name}`;
    }


}