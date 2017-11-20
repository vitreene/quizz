import React, {Component} from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class ChoixRadio extends Component {
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
            <Radio
                key={text}
                checked={this.state[text].checked}
                onChange={this.onChange}
                value={text}
            >
                <label>{text}</label>
            </Radio>   
                )}
            )
        return answers;
    }
    render(){
        return(
            <div>
                <RadioGroup>
                {this.answers}
                </RadioGroup>
            </div>
            
        )
    }
};