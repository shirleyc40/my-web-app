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
        height: '30%',
        paddingBottom: '30px'
    },
    grid: {
        marginLeft: '2px'
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
                <img src="assets/jeop.png" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ExpansionPanel className={classes.expansion} elevation="elevation0">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h5 >Jeopardy</h5>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        A console-based Jeopardy game implemented in OCaml that has a game board that dynamically changes
                        according to what was played. Also features abilities seen on the television game.
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs={12} sm={6} >
                <img src="assets/rps.PNG" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ExpansionPanel className={classes.expansion} elevation="elevation0">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h5 id="projects">Rock Paper Scissors</h5>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        A simple Rock, Paper, Scissors game in Python 3 against the computer.
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src="assets/Revitalize.PNG" className="image" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ExpansionPanel className={classes.expansion} elevation="elevation0">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                        <h5>Revitalize</h5>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.detail}>
                        With the purpose of helping people recycle, Revitalize offers users a search ability to
                        look up whether an item is recylable. Users will also be able to see how to upcycle their items.
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(Projects)