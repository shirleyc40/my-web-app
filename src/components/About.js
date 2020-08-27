import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import SkillCircle from './SkillCircle';

const styles = {
    title: {
        color: '#828282',
        fontSize: 22
    },
    bio: {
        color: '#828282'
    }
}
class About extends React.Component {
    render() {
        return (
            <div>
                <p style={styles.title} id = "about">About Me</p>
                <p style={styles.bio}>I am a NYC native who loves to learn new skills and meet new people.
                My passion for Computer Science started with my eagerness to learn more about HTML/CSS.
                I want to be able to use technology to help the society I hope to find a position where
                I can collaborate with different teams to bring impact into the society. Outside of work,
                I love to travel and bake!</p>
                <p style={{ textDecoration: 'underline', color: '#828282' }}>Top Skills</p>
                <div>
                            <SkillCircle value = {75} skill = {'React Native'} color = "#E09CDD"/>
                            <SkillCircle value = {65} skill = {'ReactJS'} color = "#A4DCB4"/>
                            <SkillCircle value = {45} skill = {'JavaScript'} color = "#C1E2E7"/>
                            <SkillCircle value = {60} skill = {'Java'} color = "#C1E7CC"/>
                            <SkillCircle value = {60} skill = {'Figma'} color = "#F2B9EC"/>
                            <SkillCircle value = {50} skill = {'Firebase'} color = "#F8CEA7"/>
                            <SkillCircle value = {40} skill = {'Python'} color = "#F8A7BA"/>
                            <SkillCircle value = {38} skill = {'SQL'} color = "#F1F390"/>

                </div>
            </div>
            // <Grid container className="container">
            //     <Grid item xs={12} sm={6}>
            //         <Image src="assets/photo.JPG" className="profile-pic" id="about" />
            //     </Grid>
            //     <Grid item xs={12} sm={6}>
            //         <p >Hello! I am born and raised in NYC, currently a junior studying Computer Science in Cornell University.
            //             I love to learn and am always looking for opportunities to improve. I want to
            //             use technology to help the society. I enjoy traveling and eating foods from different cultures!
            //         </p>
            //         <p>
            //             Let's get in touch and feel free to look at the projects I've done!
            //         </p>
            //         <a href="https://www.github.com/shirleyc40"><FaGithub className="icon" /></a>
            //         <a href="https://www.linkedin.com/in/shirley-chen-050719/"><FaLinkedin className="icon" /></a>
            //         <a href="mailto:sc2552@cornell.edu"><FaEnvelope className='icon' url="mailto:sc2552@cornell.edu" /></a>
            //         <a href='/assets/Chen_Shirley_Resume.pdf' download className="download"><Button style={buttonStyle}>Resume</Button></a>
            //     </Grid>

            // </Grid>
        )
    }
}
About.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default (About)