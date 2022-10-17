import "./style.css";

import React, { Component } from "react";
import { PalletBoard } from "../components/palletBoard";
import { PixelBoard } from "../components/pixelBoard";
import { randomColor } from "../utils/randomColor";
import { RandomColorBtn } from "../components/randomColorButton";

export class Home extends Component {
  state = {
    savedColor: "black",
    nPallets: Array(6).fill(),
    palletColors: [],
    pixelLength: 5,
  };

  componentDidMount() {
    this.handleRandomColor();
  }

  handleSelectColor = ({ target }) => {
    this.setState({ savedColor: target.style.backgroundColor });
  };

  handlePaintPixel = ({ target }) => {
    target.style.backgroundColor = this.state.savedColor;
  };

  handleRandomColor = () => {
    const { nPallets } = this.state;
    const arrColor = [];

    nPallets.forEach(() => arrColor.push(randomColor()));

    this.setState({ palletColors: arrColor });
  };

  render() {
    const { nPallets, palletColors, pixelLength } = this.state;
    return (
      <main>
        <h1>Header</h1>
        <PalletBoard
          handleSelectColor={this.handleSelectColor}
          nPallets={nPallets}
          palletColors={palletColors}
        />
        <RandomColorBtn handleRandomColor={this.handleRandomColor}/>
        <PixelBoard
          handlePaintPixel={this.handlePaintPixel}
          pixelLength={pixelLength}
        />
      </main>
    );
  }
}
