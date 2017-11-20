import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';

export default class ChoixRadio extends Component {
    constructor(props){
        super(props)
        this.onChange =  this.onChange.bind(this)
    }

    state = {
        option: ''
    }

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
 
    onChange(e, v) {
        this.setState({option: v})  
    }

    get answers() {
        const {validate} = this.props;
        const answers =  this.props.answers.map( answer => {
            const {text, is_correct} = answer;
            const style = validate
            ? {color: is_correct ? 'green' : 'red'} 
            : {color: 'inherit'};         

            return(
                <RadioButton
                    key={text}
                    checked={this.state.option === text}
                    checkedIcon={<CheckBox/>}
                    uncheckedIcon={<CheckBoxOutlineBlank/>}
                    value={text}
                    label={text}
                    labelStyle={style}
                />
            );
        })
        return answers;
    }

    render() {
        return(
            <RadioButtonGroup
                onChange={this.onChange}
                name="question">
            {this.answers}
            </RadioButtonGroup>
            
        )
    }
};

ChoixRadio.propTypes = {
    uuid: PropTypes.string,
    answers: PropTypes.array,
    validate: PropTypes.bool,
  };