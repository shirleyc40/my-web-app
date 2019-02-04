import React, { Component } from 'react';
import Navbar from './navbar';
import Main from './Main';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Main />

            </div>
        )
    }
}