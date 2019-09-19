import React,{Component} from "react";
import {withRouter} from 'react-router-dom';

class Home extends Component{
    render()
    {
        return(
            <div>
               I am home
            </div>
        );
    }
}

export default withRouter(Home);