import React from 'react';
import{BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';


export default() =>
(<BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />   
    </Switch>
 </BrowserRouter>);
 
 //<Route exact path={`/home`} render={ (routerProps) => < Home routerProps={routerProps}/>} />