import React, { Component } from 'react';
import './App.css';
import quiz from "./exo_quiz_react.json";

import Gabarit from './components/Layout';
import Titre from "./components/titre";
import Navigation from "./components/navigation";
import Question from "./components/Question";

class App extends Component {
  constructor(props){
    super(props)
    this.current = this.current.bind(this)
  }
  state= {
    current: 0
  }
  current(c){
    this.setState({current: c})
  }

  render() {
    const title = (
      <Titre title={quiz.title}/>
    )
    const navigation = (
      <Navigation 
      qte={quiz.questions.length}
      current={this.current}
      />
    )
    const question = (
      <Question {...{...quiz.questions[this.state.current], default_params: quiz.default_params}}/>
    )


    return (
      <div className="App">
        <Gabarit 
        title={title} 
        navigation={navigation}
        question={question}
        />
      </div>
    );
  }
}

export default App;
