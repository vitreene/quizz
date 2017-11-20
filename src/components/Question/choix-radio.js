import React, {Component} from 'react';

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
        const valider = {};
        this.props.answers.forEach( answer => (
            valider[answer.text] = { checked: (this.state.option === answer.text)}
            )
        );
        console.log('valid radio', valider);
        
        this.props.check(valider);
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
        console.log('answers this.props', this.props);
        
            const answers =  this.props.answers.map( answer => {
                const {text} = answer;
                const is_error = this.props.valider[text];
                const hasValid = (Object.keys(this.props.valider).length > 0);
                
                const style = hasValid
                    ? {color: is_error ? 'green' : 'red'} 
                    : {color: 'inherit'};         
                
                console.log('this.props.valid', this.props.valider);
                console.log('VALID,', hasValid, is_error, is_error && style );

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