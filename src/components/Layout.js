import React from 'react';
import Paper from 'material-ui/Paper';
import {CardActions} from 'material-ui/Card';


const styleQuiz = {
  height: 550,
  width: 520,
  margin: 'auto',
  display: 'block',
};
const styleQuestion = {
  margin: 10,
  textAlign: 'center',
  display: 'block',
};

const Gabarit = (props) => {
// console.log('props.children', props.children);

return (
    <Paper style={styleQuiz} zDepth={1}> 
      {props.title}
      {props.navigation}
      
      <Paper style={styleQuestion} zDepth={2}> 
        {props.question}
      </Paper>
      
      <CardActions>
        {props.valider}
      </CardActions>
  </Paper>
)

}

export default Gabarit;