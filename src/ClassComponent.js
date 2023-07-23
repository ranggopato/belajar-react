import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  changeColor = () => {
    this.setState({ favoritecolor: "blue" });
  };
  render() {
    let doraemon;
    if (this.state.favoritecolor == "blue") {
      doraemon = <h1>doraemon</h1>;
    }
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
        {doraemon}
      </div>
    );
  }
}
