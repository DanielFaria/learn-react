import React, { Component } from 'react';



export default class  Count  extends Component {
   //My first  constructor? I think which this component could  be easier
   constructor(props){
      super(props);
      this.state = {count: 0};
   }
   
    render() {
        return (
            <div>
            <h1>Count: {this.state.count} </h1 >
            <button id='plus' onClick={this.add} > +1  </button>  
            <button id='minus' disabled={ this.state.count === 0 }  onClick={this.minus} > -1  </button>  
            <button id='reset' onClick={this.reset} > reset  </button>
          </div>
        );
      }
      add = () => {
        //Asynchronous is a hard word
        //Why this is the correct way? 
        //https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
        console.log("adding ");
        this.setState(() => ({ count: this.state.count +1
        }));
        console.log(this.state.count);
     };
     
     minus = () => {
         console.log("minus ");
         this.setState(() => ({
            count: this.state.count > 0 ? this.state.count -1 : 0
          })
         );
      };
     
     reset  = () => {
        this.setState(() => ( {count: 0})
       );
      };
    }     




