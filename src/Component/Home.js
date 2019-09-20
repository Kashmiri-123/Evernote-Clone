import React,{Component} from "react";
import {withRouter} from 'react-router';

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