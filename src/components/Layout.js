import React from 'react';
import Paper from 'material-ui/Paper';

const styleQuiz = {
  height: 550,
  width: 520,
  margin: 'auto',
  padding: 20,
  display: 'block',
  textAlign: 'center',
};

const Gabarit = (props) => {
return (
    <Paper style={styleQuiz} zDepth={1}> 
      {props.title}
      {props.navigation}
      <Paper zDepth={2}> 
        {props.question}
      </Paper>
        {props.valider}
    </Paper>
    )
}

export default Gabarit;