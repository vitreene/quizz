import React, {Component} from 'react';


import TitreQuestion from "./titre-question";
import ChoixCheck from "./choix-check";
import ChoixRadio from "./choix-radio";
import { Button } from 'antd';

export default class Question extends Component {    
    constructor(props){
        super(props)
        this.valider = this.valider.bind(this)
        this.check =  this.check.bind(this)
    }

    state = {
        valider:{}
    }
    checks = []
        
    componentWillReceiveProps(nextProps) {
        if (nextProps.uuid !== this.props.uuid) {   
            this.checks = [];
            this.setState({
                valider: {}
            })
        }
    }

    valider(){
        const {checks} = this;
        if (checks.length === 0) return;
        const {answers} = this.props;
        // console.log('valider', answers);
        // console.log('valider', checks);

        const valider = {};
        answers.forEach( answer => {
            const {text, is_correct} = answer;
            valider[text] = is_correct 
        })
        this.setState({valider});

    }
    check(checks) {
        this.checks = checks;
        // console.log('checks', checks);
    }
    get params() {
        return Object.assign({}, this.props.default_params, this.props.params);
    }

    render() {
        const {params} = this; 
        const{valider} = this.state;
        const {image, text, answers, uuid} = this.props;
        const choix = params.multiple_choices;
        const disabled = !params.display_correction;
        
        // console.log('props', this.props);
        // console.log('answers', answers);
        
        return (
            <div> 
                <TitreQuestion titre={text}/>
                {image && <img src={image} alt="" />}
                {choix 
                    ? <ChoixCheck 
                        check={this.check} 
                        valider={valider}  
                        answers={answers} 
                        uuid={uuid}/> 
                    : <ChoixRadio 
                        check={this.check} 
                        valider={valider}  
                        answers={answers} 
                        uuid={uuid}/>
                }
                <Button type="primary" disabled={disabled} onClick={this.valider}>VALIDER</Button>

            </div>
        )
    }
};

/*

    get validAnswers() {
        validAnswers = this.props.answers.map( answer => ({
            ...answer,
            valid: valid
        }))
    }
*/