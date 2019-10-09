import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";


import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      post: []
    }
    this.ref = firebase.firestore().collection('testItems')
  }

  componentDidMount(){
    console.log("anything")
    this.sun = this.ref.onSnapshot((snap)=>{
      
        const data = [];
        snap.forEach((doc)=>{
          console.log(doc);
          data.push({
            title: doc.data().title,
            price : doc.data().price,
           
          })
        });
        this.setState({
          post : data
        });

        console.log(this.state.post)
       // const date1 = this.state.post[0].timestamp;
    })
  }

  render() {
    const listItems = this.state.post.map((item) =>
  <div>
 <h1>{item.title}</h1> 
 <p>{item.price}</p>
  </div>
);

    return(
      listItems
    )
}
}

export default App;





