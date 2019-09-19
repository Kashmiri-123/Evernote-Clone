import React, { Component } from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class RouterComponent extends Component{
    render()
    {
        return (
            <div>
              <BrowserRouter>
                <Switch>
                    <Route exact path="/Login" exact component={Login} />
                </Switch>
             </BrowserRouter>
            </div>
        );
    }
}
export default RouterComponent;