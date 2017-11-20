import React from 'react';
// import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import {Card, CardMedia, CardTitle, CardActions} from 'material-ui/Card';

import ChoixCheck from "./choix-check";
import ChoixRadio from "./choix-radio";

// export default class Question extends Component {    
export default function Question(props) {    
        const {params, image, text, answers, uuid, validate} = props;
        const {multiple_choices} = params;
        
        return (
            <Card>
                <CardTitle
                 title={text}/> 
                {image && 
                    <CardMedia>
                        <img src={image} alt="" />
                    </CardMedia>
                }

                <Divider/>
                <CardActions>
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
