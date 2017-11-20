import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

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
        if (nextProps.uuid !== this.props.uuid) {   
            nextProps.answers.forEach( answer => {
                this.setState ({
                    [answer.text]: {checked: false}
                })  
            })  
        }
    }
 
    onChange(e) {
        const val = e.target.id;
        this.setState({
            [val]: {checked: !this.state[val].checked}
        })        
    }
    
    get answers(){
        const {validate} = this.props;
        const answers =  this.props.answers.map( answer => {
            const {text, is_correct} = answer;
            const style = validate
                ? {color: is_correct ? 'green' : 'red'} 
                : {color: 'inherit'};         
            const checked = this.state[text] && this.state[text].checked;
            return ( 
                <Checkbox  
                    key={text}
                    id={text}
                    checked={checked}
                    onCheck={this.onChange}
                    label={text}
                    labelStyle={style}
                />  
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

ChoixCheck.propTypes = {
    uuid: PropTypes.string,
    answers: PropTypes.array,
    validate: PropTypes.bool,
  };