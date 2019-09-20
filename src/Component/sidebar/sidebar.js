import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SideBarItem from '../sidebaritem/sidebaritem';

class SideBarComponent extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            addingNote : false,
            title :null
        };
    }

    newNoteBtnClick = () => {
      this.setState({title:null, addingNote : !this.state.addingNote});
    }

    updateTitle = (txt) => {
     this.setState({
         title:txt
     });
    }

    newNote = () => {
    }

    selectNote = () => {
      console.log("done");
    }

    deleteNote = () => {
        console.log("done");

    }

    render () {
        const { notes, classes, selectNoteIndex } = this.props;
        if(notes){
        return (
            <div className={classes.sidebarContainer}>
                <Button 
                onClick={this.newNoteBtnClick}
                className={classes.newNoteBtn}>
                    {this.state.addingNote ? "Cancel" : "New Note"}
                </Button>
                 {
                    this.state.addingNote ?
                    <div>
                       <input
                       type="text"
                       className={classes.newNoteInput}
                       placeholder = "Enter note title"
                       onKeyUp = {(e) => 
                       this.updateTitle(e.target.value)
                       }/>
                       <Button
                       className={classes.newNoteSubmitBtn}
                         onClick= {this.newNote}>
                        Submit
                      </Button>
                    </div> :
                    <div/>
                }
                <List>
                    {
                     this.props.notes.map((_note, _index) => {
                         return (
                         <div key={_index}>
                          <SideBarItem
                          _note={_note}
                          _index={_index}
                          selectNoteIndex={selectNoteIndex}
                          selectNote={this.selectNote}
                          deleteNote={this.deleteNote}/>
                          <Divider></Divider>
                         </div>)
                     })
                    }
                </List>
            </div>
        );
    }
        else{
            return (<div></div>);
        }
    }
}

export default withStyles(styles)(SideBarComponent);