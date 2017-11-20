import React , {Component} from 'react';

// import {Nav, NavItem, NavLink, Button} from 'reactstrap';
import { Button } from 'antd';
import {Menu, Pagination} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Item} = Menu;




export default class Navigation extends Component {
    constructor(props) {
        super(props);
        // this.nav = this.nav.bind(this)
        this.prec = this.prec.bind(this)
        this.next = this.next.bind(this)
    }

    state = {
        index: 0,
        prec: null,
        current: null,
        next: 1,
    }

    componentDidMount(){
        const len = this.props.qte;
        this.setState({len: len - 1})
    }

    componentDidUpdate(prevProps, prevState) {
        const {index} = this.state;
        if( prevState.index !== index) this.props.current(index);
    }
    prec() {
        const {index} = this.state;
        const prec =  (index >= 0);
        const nextIndex = prec ? index - 1 : 0;
        this.setState({
            index: nextIndex,
            prec,
            next: true
        });
    }
    next() {
        const {index, len} = this.state;
        const next = (index < len);
        const nextIndex =  (next) ? index + 1 : len;
        this.setState({
            index: nextIndex,
            next,
            prec: true
        });
    }


    render() {
        const {index,prec, next} = this.state;
        return (
           <div>
                 <Button 
                 disabled={!prec}
                 onClick={this.prec}
                 > PRECEDENT</Button>
                <Button 
                disabled={!next}
                onClick={this.next}
                 >SUIVANT</Button>
            
            </div>
        )
    }
};