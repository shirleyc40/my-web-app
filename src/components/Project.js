import React from 'react';
import { Grid } from '@material-ui/core';
// import { Image } from 'react-bootstrap';
import './Project.css';


function Projects(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={6} 
                    className = "image-grid">
                    <div className="image-div">
                        <img src="assets/unipantry.png" className="image" alt="" />
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}  className = "image-grid">
                    <p className="projectTitle">UniPantry</p>
                    <p> Unipantry is a student startup that aims to provide students a resource to achieve a well-balanced lifestyle
                    by offering a product to manage their pantry, budget and nutrition. We also provide
                    recipes and grocery shopping abilities to streamline the process. Currently, we are trying
                            to partner with schools to including their dining hall options. </p>
                    <p>
                        I was on the development team, focusing on building the app using React Native and firebase. I collaborated
                        with other student developers, as well as our designers. We worked in an agile environment, with weekly standups and
                        check ins. I was able to develop my communication skills and gain confidence in asking for help.
                    </p>
                </Grid>
            </Grid>
            <Grid container style = {{marginTop: 50}}>
                <Grid item xs={12} sm={6} 
                    >
                    <div className="image-div">
                        <img src="assets/numberGame.png" className="image" alt="" />
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="projectTitle">Number Game</p>
                    <p> This game was inspired by my high school teacher. In this game, the user is guessing a 6 digit
                        number. For each guess, they will be told how many digits and positions are correct</p>
                    <p>
                        I designed most of the interface, getting help from my peers. I used React Native to create this app. 
                        Through this, I was able to develop my time managment and project planning skills. It was enjoyable to 
                        feel passionate about the work I was doing. 
                    </p>
                </Grid>
            </Grid>
            <Grid container style = {{marginTop: 50}}>
                <Grid item xs={12} sm={6} 
                    >
                    <div className="image-div">
                        <img src="assets/slack.png" className="image" alt="" />
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="projectTitle">Slack Design Case Study</p>
                    <p> The purpose of this project was to pick an application and find a problem to solve. Once a problem
                        was indentified, I had to create a solution for it and design the UX.  
                    </p>
                    <p>
                        This was an individual project that involved finding a people problem through user interviews and coming up with solutions
                        through brainstorming sessions. I really enjoyed this class/project because it taught me a different side of things; how designs are created,
                        the different effects of placements of a component. 
                    </p>
                </Grid>
               
            </Grid>
            <Grid container style = {{marginTop: 50}}>
            <Grid item xs={12} sm={6} 
                    >
                    <div className="image-div">
                        <img src="assets/csa.png" className="image" alt="" style = {{maxWidth: '80%'}}/>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="projectTitle">CSA Website</p>
                    <p> This was a project for my web development class, where I worked with other students
                         to design a website for an organization. We chose the Chinese Student Association. It involved 
                         interviewing the club representative, market research and collecting user feedback. The site featured an
                         admin setting that allowed them to edit website info. We mainly used PHP and mySQL.   
                    </p>
                    <p>
                        I collaborated with a few other students. I was mainly in charge of distributing tasks and 
                        facilitating conflicts. 
                    </p>
                </Grid>
            </Grid>
            <Grid container style = {{marginTop: 50}}>
            <Grid item xs={12} sm={6} 
                    >
                    <div className="image-div">
                        <img src="assets/Revitalize.png" className="image" alt="" style = {{maxWidth: '80%'}}/>
                    </div>

                </Grid>
                <Grid item xs={12} sm={6}>
                    <p className="projectTitle">Revitalize</p>
                    <p>
                        Revitalize is a product search engine that aimed at educating users how to reduce, reuse and recycle, with 
                        an emphasis on how to upcycle materials. Users can input a item for example: "plastic bottle", and recieve a response via alert to tell them 
                        whether or not the item is recyclable. If is not recyclable, the user will be redirectedd to the matching DIY pages and inform them about the possible thing they can make. 
                    </p>
                    <p>
                        I was in charge of front-end design for the navigation bar and certain DIY pages. It was my first time working in an official project
                        with other people, and presenting the idea to others. I was able to build my collaboration and presentation skills. 
                    </p>
                </Grid>
            </Grid>
        </div>
        // <Grid container spacing={4} className={classes.cont}> 
        // <h5 >Slack Dashboard</h5>  
        //     
        //     
        //     <Grid item xs={12} sm={6}  >
        //         <img src="assets/csa.PNG" className="image" />
        //     </Grid>
        //     <Grid item xs={12} sm={6} className={classes.grid}>
        //                 <h5 >CSA Website</h5>
        //                 <p>This was a project for my web development class, where I worked with other students
        //                 to design a website for the Chinese Student Association. We spoke with their club representative
        //                 and designed the website based on their needs. We also included a feature to allow the club admin to
        //                 edit the website info.</p>
        //     </Grid>
        //     <Grid item xs={12} sm={6} >
        //         <img src="assets/jeop.png" className="image" />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //                 <h5 >Jeopardy</h5>
        //                 A console-based Jeopardy game implemented in OCaml that has a game board that dynamically changes
        //                 according to what was played. Also features abilities seen on the television game.
        //     </Grid>
        //     <Grid item xs={12} sm={6} >
        //         <img src="assets/rps.PNG" className="image" />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //                 <h5 id="projects">Rock Paper Scissors</h5>
        //                 A simple Rock, Paper, Scissors game in Python 3 against the computer.
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <img src="assets/Revitalize.PNG" className="image" />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //                 <h5>Revitalize</h5>
        //                 With the purpose of helping people recycle, Revitalize offers users a search ability to
        //                 look up whether an item is recylable. Users will also be able to see how to upcycle their items.
        //     </Grid>
        // </Grid>
    )
}
export default (Projects)