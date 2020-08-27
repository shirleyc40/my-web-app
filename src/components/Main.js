import React from 'react';
import { Image } from 'react-bootstrap';
import {Grid } from '@material-ui/core/';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './Main.css';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import About from './About';
import Project from './Project'
import ScrollToTop from 'react-scroll-up'
import Fade from 'react-reveal/Fade';

const styles = {
    card: {
        width: '100vw',
        borderRadius: 10,
        boxShadow: "10px 5px 5px #9E9E9E",
        padding: 40,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        marginTop: '-15px',
        textAlign: 'center'
    }
}

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="cardContainer">
                <div style={styles.card}>
                    <Grid container >
                        <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
                            <Image src='/assets/profile.jpeg' width={230} height={300} />
                        </Grid>
                        <Grid item xs={12} sm={6} direction="column">
                            Hi! My name is <p className="name"> Shirley Chen</p>
                            <div>
                                <p className="intro-bio">
                                    I am a senior attending Cornell University studying Computer Science and minoring in Business
                                </p>
                            </div>
                            <div className="iconContainer">
                                <a href="https://www.github.com/shirleyc40"><FaGithub className="icon" /></a>
                                <a href="https://www.linkedin.com/in/shirley-chen-050719/"><FaLinkedin className="icon" color="#2867B2" /></a>
                                <a href="mailto:sc2552@cornell.edu"><FaRegEnvelope className='icon' url="mailto:sc2552@cornell.edu" /></a>
                                {/* <a href='/assets/Chen_Shirley_Resume.pdf' download className="download"><Button style={styles.button}>Resume</Button></a> */}
                            </div>

                        </Grid>
                    </Grid>
                </div>

            </div>
                <Fade delay={520}>
                    <About />
                    <h2 className="title" id = "projects">Projects</h2>
                    <Project /></Fade> 
                <ScrollToTop style = {{bottom: 20}}showUnder={160}><KeyboardArrowUpIcon /></ScrollToTop>
            </div >



        )
    }
}
