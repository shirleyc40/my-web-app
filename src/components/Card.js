import React from 'react';

export default function Card(props) {
    return (
        <div style={styles.container}>
            <div>{props.children}</div>
        </div>
    )
}

const styles = {
    container: {
        marginTop: 50,
        backgroundColor: "#ffffff",
        alignSelf: "stretch",
        border: `1px solid`,
        borderRadius: 10,
        boxShadow: [10,10,'black']
    }
}