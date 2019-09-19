import React, { Component } from 'react';
import './App.css';
import RouterComponent from './Component/RouterComponent';
const firebase = require("firebase");

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectNoteIndex : null,
      selectNote : null,
      notes : null
    }
  }

  componentDidMount=()=>{
  firebase.firestore().collection('notes').onSnapshot(serverUpdate => {
    const notes = serverUpdate.docs.map(_doc => {
     const data = _doc.data();//_doc is a propeerty of the serverUpdate object.ServerUpdate 
     //automatically is called whenever the note collection is updated in firebase,
     data['id'] = _doc.id;
     return data;
    });
    console.log(notes);
    this.setState({notes});
  });
  }
  render () {
    return (
      <div>
        <RouterComponent/>
      </div>
    );
  }
}
  
export default App;
