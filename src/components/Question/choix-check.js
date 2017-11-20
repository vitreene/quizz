import React, {Component} from 'react';
import { Checkbox } from 'antd';

export default class ChoixCheck extends Component {
    constructor(props){
        super(props)
        this.onChange =  this.onChange.bind(this)
    }


    state = {}

    componentWillMount() {
        this.props.answers.forEach( answer => {
            this.setState ({
                [answer.text]: {checked: false}
            })  
        })
        
    }

    componentWillReceiveProps(nextProps) {

        // ne permet pas de contenir l'erreur au changme,t de questionnaire :/
        if (nextProps.uuid !== this.props.uuid) {   
            console.log(
                nextProps.uuid
            );
            
            this.props.answers.forEach( answer => {
                this.setState ({
                    [answer.text]: {checked: false}
                })  
            })  
        }
    }
        
    onChange(e) {
        console.log('change', e.target.value);
        const val = e.target.value;
        this.setState({
            [val]: {checked: !this.state[val].checked}
        })
        
    }
    
    get answers(){
        const answers =  this.props.answers.map( answer => {
            const {text} = answer;
            return (     
            <Checkbox
                key={text}
                checked={this.state[text].checked}
                onChange={this.onChange}
                value={text}
            >
                <label>{text}</label>
            </Checkbox>
                
                )}
            );
        return answers;
    }
    render(){
        return(
            <div>
                {this.answers}
            </div>
            
        )
    }
};

/*
            { 
                this.props.answers.map( answer => (
                    
                    <Checkbox
                        key={answer.text}
                        checked={this.state.checked}
                        onChange={this.onChange}
                    >
                  <label>{answer.text}</label>
            </Checkbox>
                
                ))
            }
*/