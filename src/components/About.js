import React from 'react';
import { Image } from 'react-bootstrap';
import { Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './About.css';
import { SocialIcon } from '../../node_modules/react-social-icons';


class About extends React.Component {
    render() {
        return (
            <Grid container className="container">
                <Grid item xs={12} sm={6}>
                    <Image src="assets/photo.jpg" className="profile-pic" id="about" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p >Hello! I am born and raised in NYC, currently a sophomore studying Computer Science in Cornell University.
                        I love to learn and am always looking for opportunities to improve. I enjoy traveling and eating foods from different
                        cultures!
                    </p>
                    <p>
                        Let's get in touch and feel free to look at the projects I've done!
                    </p>
                    <SocialIcon className="icon" url="https://github.com/shirleyc40" />
                    <SocialIcon className="icon" url="https://www.linkedin.com/in/shirley-chen-050719/" />
                    <SocialIcon className='icon' url="mailto:sc2552@cornell.edu" />
                    <a href='/assets/Chen_Shirley_Resume.pdf' download className="download"><Button>Resume</Button></a>
                </Grid>

            </Grid>
        )
    }
}
About.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default (About)