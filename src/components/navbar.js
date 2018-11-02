import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './navbar.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';

const styles = {
    root: {
        flex: 1,
    },
    grow: {
        flex: 1,
        marginBottom: 35,
    },
    bar: {
        background: 'transparent',
        height: 50,
        boxShadow: 'none',
    },

    button: {
        marginBottom: 10,
    },
};

class navbar extends React.Component {
    render() {
        const { root, grow, button, bar } = this.props.classes;
        return (
            <div className={root}>
                <AppBar position="static" className={bar}>
                    <Toolbar>
                        <h2 className={grow}><a href="./">Shirley</a></h2>
                        <Button color="inherit" className={button}>About</Button>
                        <Button color="inherit" className={button}>Projects</Button>
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