import React from 'react';
import { Grid, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
// import { Image } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from "@material-ui/core/styles";
import './Project.css';

const styles = theme => ({
    expansion: {
        backgroundColor: 'inherit',
        width: '80%',
        border: 'solid',
        height: '20px',
        paddingBottom: '60px',
    },
    cont: {
        marginTop: 0,
        backgroundColor: '#fbf1f2',
    },
})
function Projects(props) {
    const { classes } = props;
    return (
        <Grid container spacing={4} className={classes.cont}>
            <Grid item xs={12} sm={6} >
                <img src="assets/slack.png" className="image" />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid}>
                        <h5 >Slack Dashboard</h5>  
                        This was a project for my product design class, where I conducted user research to find
                        a common problem amongst users for the Slack app. Users found it hard to manage messages across different
                        channels and workspaces, so I designed a solution for a dashboard. Users can choose which 5 workspaces and channels
                        to include, and reorder it however they want. More details can be found here:
                        https://medium.com/@sc2552/slack-managing-messages-better-b6e2d495b182
                   
            </Grid>
            <Grid item xs={12} sm={6}  >
                <img src="assets/csa.PNG" className="image" />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid}>
                        <h5 >CSA Website</h5>
                        <p>This was a project for my web development class, where I worked with other students
                        to design a website for the Chinese Student Association. We spoke with their club representative
                        and designed the website based on their needs. We also included a feature to allow the club admin to
                        edit the website info.</p>
            </Grid>
            <Grid item xs={12} sm={6} >
                <img src="assets/jeop.png" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                        <h5 >Jeopardy</h5>
                        A console-based Jeopardy game implemented in OCaml that has a game board that dynamically changes
                        according to what was played. Also features abilities seen on the television game.
            </Grid>
            <Grid item xs={12} sm={6} >
                <img src="assets/rps.PNG" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                        <h5 id="projects">Rock Paper Scissors</h5>
                        A simple Rock, Paper, Scissors game in Python 3 against the computer.
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src="assets/Revitalize.PNG" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                        <h5>Revitalize</h5>
                        With the purpose of helping people recycle, Revitalize offers users a search ability to
                        look up whether an item is recylable. Users will also be able to see how to upcycle their items.
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(Projects)