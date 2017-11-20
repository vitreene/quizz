import React, {Component} from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class ChoixRadio extends Component {
    constructor(props){
        super(props)
        this.onChange =  this.onChange.bind(this)
    }

    state = {
        option: ''
    }

    componentWillMount() {
        /*
        this.props.answers.forEach( answer => {
            this.setState ({
                [answer.text]: {checked: false}
            })  
        })
        */
        
    }
    
    componentDidUpdate() {
        const valid = {};
        this.props.answers.forEach( answer => (
            valid[answer.text] = { checked: (this.state.option === answer.text)}
            )
        );
        console.log('valid radio', valid);
        
        this.props.valider(valid);
    }
        
    onChange(e) {
        console.log('change', e.target.value);
        const val = e.target.value;
        this.setState({
            option: val
            // [val]: {checked: !this.state[val].checked}
        })
        
    }
    get answers(){
            const answers =  this.props.answers.map( answer => {
                const {text} = answer;
               
                console.log('valid', this.props.valid );
                const is_error = this.props.valid[text];
                console.log('this.props.valid', this.props.valid);
                console.log('is_true,', is_error, is_error && style );
                
                const style = this.props.valid 
                ? {color: is_error ? 'red' : 'green'} 
                : {color: 'inherit'};
    
            return (
                <div key={text}>
                    <input type="radio" 
                        id={text}
                        checked={this.state.option === text}
                        onChange={this.onChange}
                        value={text}
                        name="question"
                    />
                    <label htmlFor={text} style = {style} >{text}</label>
                </div>
                )}
            )
           

        return answers;
    }
    render(){
        return(
            <div>
               <form> 
                {this.answers}
                </form>
            </div>
            
        )
    }
};