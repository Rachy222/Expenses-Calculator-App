import './Card.css';
import React from 'react';

// The function in Line 5 can be interpreted as seen in Line 6
// function Card(props) {
const Card = (props) => {
  const classes ='card ' + props.className;
  return <div className={classes}>{props.children}
  </div>

}

export default Card