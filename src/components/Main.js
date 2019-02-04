import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './Main.css'
import About from './About';
import Project from './Project'
import ScrollToTop from 'react-scroll-up'
import Fade from 'react-reveal/Fade';




export default class Main extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron className="fill">
                    <Fade delay={500}>
                        <Image src="/assets/demo.jpeg" className="pic" />
                        <h1 className='top'>Hey, I'm Shirley Chen</h1>
                    </Fade>
                </Jumbotron >
                <Fade delay={520}>
                    <About />
                    <h2 className="title">Projects</h2>
                    <Project /></Fade>
                <ScrollToTop showUnder={160}><Button className='button' variant="text">
                    Back to Top <KeyboardArrowUpIcon /></Button></ScrollToTop>
            </div>



        )
    }
}
