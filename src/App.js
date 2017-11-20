import React, { Component } from 'react';
import './App.css';
import quiz from "./exo_quiz_react.json";

import Gabarit from './components/Layout';
import Titre from "./components/titre";
import Navigation from "./components/navigation";

class App extends Component {
  constructor(props){
    super(props)
    this.current = this.current.bind(this)
  }
  state= {
    current: 0
  }
  current(c){
    console.log('CURRENT', c);
    
    this.setState({current: c})
  }
  render() {

    const navigation = (
      <Navigation 
      qte={quiz.questions.length}
      current={this.current}
      />
    )
    return (
      <div className="App">
        <Gabarit 
        title={<Titre title={quiz.title}/>} 
        navigation={navigation}
        />
      </div>
    );
  }
}

export default App;
