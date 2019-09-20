import React,{Component} from "react";
import {withRouter} from 'react-router';
import '../App.css';
import SideBarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";

const firebase = require("firebase");

class Home extends React.Component{

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
    this.setState({notes:notes});
  });
  }
    render()
    {
        return(
            <div className="app-container">
               <SideBarComponent 
               selectNoteIndex= {this.state.selectNoteIndex}
               notes = {this.state.notes}
               ></SideBarComponent>
               <EditorComponent></EditorComponent>
            </div>
        );
    }
}

export default withRouter(Home);