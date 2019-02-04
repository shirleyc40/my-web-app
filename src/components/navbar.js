import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import { NavHashLink as NavLink } from 'react-router-hash-link';


const styles = {
    root: {
        flex: 1,
    },
    grow: {
        marginTop: 20,
        flex: 1,
        marginBottom: 50,
        color: 'black',
    },
    bar: {
        marginTop: 0,
        background: 'transparent',
        height: 50,
        boxShadow: 'none',
    },

    button: {
        color: 'white',
        textDecoration: 'none',
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        visited: { color: 'white' }
    },
    nav: {
        marginBottom: 20,
        textDecoration: 'none',
    }
};


class navbar extends React.Component {
    render() {
        const { root, grow, button, bar, link, nav } = this.props.classes;
        return (
            <div className={root}>
                <AppBar position="fixed" className={bar}>
                    <Toolbar>
                        <h2 className={grow}><NavLink to='/' className={link}>Shirley</NavLink></h2>
                        <NavLink className={nav} smooth to="#about"> <Button color="inherit" className={button}
                        >About</Button></NavLink>
                        <NavLink className={nav} smooth to="#projects"><Button color="inherit" className={button}>Projects</Button></NavLink>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
    navbar; propTypes = {
        classes: PropTypes.object.isRequired,
    };
}
export default withStyles(styles)(navbar)