import React , {Component} from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import {GridList} from 'material-ui/GridList';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.prec = this.prec.bind(this)
        this.next = this.next.bind(this)
    }

    state = {
        index: 0,
        prec: false,
        next: 1,
    }
    
    prec() {
        const {index} = this.state;
        const prec = (index > 1);
        const nextIndex = (prec) ? index - 1 : 0;
        this.setState({
            index: nextIndex,
            prec,
            next: true
        });
        this.props.current(nextIndex)
    }
    next() {
        const {index} = this.state;
        const next = (index < this.len - 1);
        const nextIndex = (next) ? index + 1 : this.len;
        this.setState({
            index: nextIndex,
            next,
            prec: true
        });
        this.props.current(nextIndex)
    }

    get len() {
        return this.props.qte - 1;
    }

    render() {
        const {prec, next} = this.state;
        return (
             <GridList cols={2} padding={20} cellHeight={50}>
                 <RaisedButton 
                    label='Precedent' 
                    disabled={!prec}
                    default={true}
                    fullWidth={true}
                    onClick={this.prec}
                />
                 <RaisedButton 
                    label='suivant' 
                    disabled={!next}
                    default={true}
                    fullWidth={true}
                    onClick={this.next}
                />
             </GridList>   
        )
    }
};

Navigation.propTypes = {
    current: PropTypes.func,
    qte: PropTypes.number,
  };