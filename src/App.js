import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import quiz from "./exo_quiz_react.json";

import Gabarit from './components/Layout';
import Titre from "./components/titre";
import Navigation from "./components/navigation";
import Question from "./components/Question";
import Valider from './components/Valider';

class App extends Component {
  constructor(props){
    super(props)
    this.current = this.current.bind(this)
    this.valider = this.valider.bind(this)
  }
  state = {
    current: 0,
    uiid: '', 
    validate: false
  }
  
  current(c){
    this.setState({
      current: c,
      validate: false
    })
  }

  valider(){
    if (this.display_correction) this.setState({validate: true})
  }

  get question() {
    const question = quiz.questions[this.state.current];
    return {
      ...question, 
      params: {...quiz.default_params, ...question.params},
    }
  }

  get display_correction() {
    return this.question.params.display_correction
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
      <Question {...this.question} validate={this.state.validate}/>
    )
    const valider = (
      <Valider 
        valider={this.valider} 
        display_correction={this.display_correction}
      />
    )

    return (
      <MuiThemeProvider>
        <Gabarit id="App"
        title={title} 
        navigation={navigation}
        question={question}
        valider={valider}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
