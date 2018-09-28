import React, { Component } from 'react';
import CharacterCard from "./components/characterCard";
import Title from "./components/title"; //need to write this component
import Score from "./components/score";
import Wrapper from "./components/wrapper"; //need to write this component
import Header from "./components/header";
import charactersJSON from "./characters.json"; //need to write this json file
import './App.css';
//need a score component as well

class App extends Component {

  state = {
    characters: charactersJSON,
    characters2: charactersJSON,
    score: 0
  };

  scoreUpdate = id => {
    //if id in array reset score
    //in only works for objects, need characters to be object
    let charArr = this.state.characters;

    if (charArr.filter(i => i.id === id).length) {
      let currentScore = this.state.score;
      let newScore = currentScore + 1;
      let newCharArr = charArr.filter(i => i.id !== id);
      this.setState({ score: newScore, characters: newCharArr })
    }

    else {
      this.setState({ score: 0, characters: charactersJSON })
    }

    const characters2 = this.state.characters2.sort(function (a, b) { return .5 - Math.random() });
    this.setState({ characters2 });

    //else score +1
    //filter id from characters array
    //randomize character array
    //print to DOM again
  }

  render() {
    return (
      <Wrapper>
        <Header>
          <Title>Characters List</Title>
          <Score score={this.state.score}></Score>
        </Header>
        {this.state.characters2.map(character => (
          <CharacterCard
            scoreUpdate={this.scoreUpdate}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
