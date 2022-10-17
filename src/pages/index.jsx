import "./style.css";

import React, { Component } from "react";
import { PalletBoard } from "../components/palletBoard";
import { PixelBoar } from "../components/pixelBoard";
import { randomColor } from "../utils/randomColor";

export class Home extends Component {
  state = {
    savedColor: "black",
    nPallets: Array(6).fill(),
    palletColors: [],
  };

  componentDidMount() {
    this.handleRandomColor();
  }

  handleSelectColor = ({ target }) => {
    this.setState({ savedColor: target.style.backgroundColor }
      ,console.log(this.state.savedColor));
  };

  handlePaintPixel = ({ target }) => {
    console.log(this.state.savedColor);
    target.style.backgroundColor = this.state.savedColor;
  };

  handleRandomColor = () => {
    const { nPallets } = this.state;
    const arrColor = [];

    nPallets.forEach(() => arrColor.push(randomColor()));

    this.setState({ palletColors: arrColor });
  };

  render() {
    const { nPallets, palletColors } = this.state;
    return (
      <main>
        <h1>Header</h1>
        <PalletBoard
          handleSelectColor={this.handleSelectColor}
          nPallets={nPallets}
          palletColors={palletColors}
        />
        <PixelBoar
          handlePaintPixel={this.handlePaintPixel}
        />
      </main>
    );
  }
}
