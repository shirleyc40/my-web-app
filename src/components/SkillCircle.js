import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SkillCircle (props) {
    return (
        <div className = "skillContainer">
        <CircularProgressbar 
            value={props.value} 
            maxValue={100} 
            color = {'#E09CDD'} 
            strokeWidth = {15}
            styles = {buildStyles({
                pathColor: props.color
            })}
            />
            <p className = "skillLabel">{props.skill}</p>
        </div>
    )
}