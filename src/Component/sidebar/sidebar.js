import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebaritem';

class SideBarComponent extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            addingNote : false,
            title :null
        }
    }

    newNoteBtnClick = () => {
      
    }

    render () {
        const { notes, classes, selectNoteIndex } = this.props;
        return (
            <div className={classes.sidebarContainer}>
                <Button 
                onClick={this.newNoteBtnClick}
                className={classes.newNoteBtn}>
                    New Note
                </Button>
                {
                    this.state.addingNote ?
                    <div>
                       <input
                       type="text"
                       className={classes.newNoteInput}
                       placeholder = "Enter note title"
                       
                       >
                       </input>
                    </div> :
                    null
                }
            </div>
        );
    }
}

export default withStyles(styles)(SideBarComponent);