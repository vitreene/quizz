import React, {Component} from 'react';


import TitreQuestion from "./titre-question";
import ChoixCheck from "./choix-check";
import ChoixRadio from "./choix-radio";
import { Button } from 'antd';

export default class Question extends Component {    
    constructor(props){
        super(props)
        this.valider =  this.valider.bind(this)
        this.check =  this.check.bind(this)
    }

    state = {
        valid:[]
    }
    checks = []

    valider(){
        const {checks} = this;
        if (checks.length === 0) return;
        const {answers} = this.props;
        console.log('valider', answers);
        console.log('valider', checks);

        const valid = {};
        answers.forEach( answer => {
            const {text} = answer;
            valid[text] = answer.is_correct !== checks[text].checked;
           
        })
        this.setState({valid});

    }
    check(checks) {
        this.checks = checks;
        console.log('checks', checks);
    }
    render() {
        console.log('props', this.props);
        const {image, text, answers} = this.props;
        const params = Object.assign({}, this.props.default_params, this.props.params);
        
        const choice = params.multiple_choices;
        const disabled = !params.display_correction;
        const{valid} = this.state;

        
        return (
            <div> 
                <TitreQuestion titre={text}/>
                {image && <img src={image} />}
                { choice 
                    ? <ChoixCheck valider={this.check} valid={valid}  answers={answers}/> 
                    : <ChoixRadio valider={this.check} valid={valid}  answers={answers}/>
                }
                <Button type="primary" disabled={disabled} onClick={this.valider}>VALIDER</Button>

            </div>
        )
    }
};