import React, { Component } from 'react';
import Navbar from './navbar';
import Main from './Main';



export default class Home extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style = {{backgroundColor: '#E5ECF4',}}>
                    <Navbar />
                </div>
                
                <div style = {{backgroundColor: 'inherit', padding: '20px 50px 0px 50px'}}>
                    <Main />
                </div>
            </div>

        )
    }
}
const styles = {
    container: {
        backgroundColor: '#E5ECF4',
        flex: 1,
        fontFamily: 'Montserrat',
        height: '100vh',
        
    }
}