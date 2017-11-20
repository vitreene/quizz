import React from 'react';
import Divider from 'material-ui/Divider';
import {Card, CardTitle, CardActions} from 'material-ui/Card';

import ChoixCheck from "./choix-check";
import ChoixRadio from "./choix-radio";
  
export default function Question(props) {    
    const {params, image, text, answers, uuid, validate} = props;
    const {multiple_choices} = params;
    
    return (
        <Card>
            <CardTitle title={text}/> 
            {image &&  <img src={image} alt="" />}
            <Divider/>
            <CardActions style={{textAlign: 'left'}}>
                {multiple_choices 
                ? <ChoixCheck 
                    validate={validate}  
                    answers={answers} 
                    uuid={uuid}/> 
                : <ChoixRadio 
                    validate={validate}  
                    answers={answers} 
                    uuid={uuid}/>
                }
            </CardActions>
        </Card>
    )
};
