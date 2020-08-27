import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const styles = {
    root: {
        marginBottom: 50,

    },
    name: {
        marginTop: 20,
        flex: 1,
        fontWeight: 'normal'
    },
    bar: {
        marginTop: 0,
        height: 50,
        boxShadow: 'none',
        justifyContent: 'center',
    },

    button: {
        color: '#828282',
        textDecoration: 'none',
        textTransform: 'none',
        fontFamily: 'Montserrat',
        fontSize: 16,
        paddingRight: 10,
        paddingLeft: 10,

    },
    link: {
        textDecoration: 'none',
    },
    nav: {
        //marginVertical: 20,
        textDecoration: 'none',
    }
};


function navbar(props) {


    let listener = null
    const [scrollState, setScrollState] = useState("#E5ECF4")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "past") {
                    setScrollState("past")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
    return () => {
        document.removeEventListener("scroll", listener)
    }
}, [scrollState])
const { root, name, button, bar, link, nav } = props.classes;
return (
    <div className={root}>
        <AppBar position="fixed" className={bar}>
            <Toolbar style={{ backgroundColor: scrollState === "past"? "#34618B" : "#E5ECF4" }}>
                <h2 className={name}><NavLink to='/' className={link} style = {{color: scrollState === "past"? "white" :  '#828282'}}>Shirley Chen</NavLink></h2>
                <NavLink className={nav} smooth to="#about"> <Button color="inherit" classes={{ root: button }} style = {{color: scrollState === "past"? "white" :  '#828282'}}
                >About</Button></NavLink>
                <NavLink className={nav} smooth to="#projects"><Button color="inherit" className={button} style = {{color: scrollState === "past"? "white" :  '#828282'}}>Projects</Button></NavLink>
            </Toolbar>
        </AppBar>
    </div>
);
        }
export default withStyles(styles)(navbar)