import React, {Component} from 'react';
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
            this.props.answers.forEach( answer => {
                this.setState ({
                    [answer.text]: {checked: false}
                })  
            })  
        }
    }

    componentDidUpdate() {
        this.props.check(this.state);
    }
        
    onChange(e) {
        const val = e.target.id;
        console.log('change', e.target.id);
        console.log('this.state[val]', this.state[val], val);
    
        this.setState({
            [val]: {checked: !this.state[val].checked}
        })        
    }
    
    get answers(){
        const answers =  this.props.answers.map( answer => {
            const {text} = answer;
            const is_error = this.props.valider[text];
            const hasValid = (Object.keys(this.props.valider).length > 0);
            
            console.log('valid', hasValid, this.props.valid);

            const style = hasValid
            ? {color: is_error ? 'red' : 'green'} 
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
