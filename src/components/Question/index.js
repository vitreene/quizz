import React, {Component} from 'react';


import TitreQuestion from "./titre-question";
import ChoixCheck from "./choix-check";
import ChoixRadio from "./choix-radio";
import { Button } from 'antd';

export default class Question extends Component {    
    constructor(props){
        super(props)
        this.valider =  this.valider.bind(this)
    }

    state = {}

    valider(){
        console.log('valider');
        
    }
    render() {
        console.log('props', this.props);
        const {image, text, answers} = this.props;
        const params = Object.assign({}, this.props.default_params, this.props.params);
        
        const choice = params.multiple_choices;
        return (
            <div> 
                <TitreQuestion titre={text}/>
                {image && <img src={image} />}
                { choice 
                    ? <ChoixCheck answers={answers}/> 
                    : <ChoixRadio answers={answers}/>
                }
                <Button onClick={this.valider}>VALIDER</Button>

            </div>
        )
    }
};