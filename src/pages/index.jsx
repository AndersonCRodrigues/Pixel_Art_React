import "./style.css";

import React, { Component } from "react";
import { PalletBoard } from "../components/palletBoard";
import { PixelBoard } from "../components/pixelBoard";
import { randomColor } from "../utils/randomColor";
import { RandomColorBtn } from "../components/randomColorButton";
import { PixelInputLength } from "../components/inputPixelLength";
import { whiteColor } from "../utils/whiteColor";
import { ClearBtn } from "../components/resetPixelBoardBtn";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { saveColors, saveLength, savePalletColor } from "../components/saveLocalStorage";
import { loadColors, loadPalletColor } from "../components/loadLocalStorage";

export class Home extends Component {
  state = {
    savedColor: "black",
    nPallets: Array(6).fill(),
    palletColors: [],
    pixelLength: JSON.parse(localStorage.getItem('pixelLength')) || 5,
  };

  componentDidMount() {
    this.handleRandomColor();

    this.setState((state) =>
      ({palletColors: loadPalletColor() || state.palletColors}));

    loadColors();
  }

  componentDidUpdate() {
    saveLength(this.state.pixelLength);
    savePalletColor(this.state.palletColors);
  }

  handleSelectColor = ({ target }) => {
    this.setState({ savedColor: target.style.backgroundColor });
  };

  handlePaintPixel = ({ target }) => {
    target.style.backgroundColor = this.state.savedColor;
    saveColors();
  };

  handlePixelLength = ({target}) => {
    this.setState({pixelLength: parseInt(target.value)})
  };

  handleRandomColor = () => {
    const { nPallets } = this.state;
    const arrColor = [];

    nPallets.forEach(() => arrColor.push(randomColor()));

    this.setState({ palletColors: arrColor });
  };

  handleClearPixelBoard = () => {
    whiteColor();
    saveColors();
  }

  render() {
    const { nPallets, palletColors, pixelLength } = this.state;
    return (
      <>
        <main>
        <Header/>
          <div className="board">
            <PalletBoard
              handleSelectColor={this.handleSelectColor}
              nPallets={nPallets}
              palletColors={palletColors}
            />
            <section className="inputs">
              <RandomColorBtn handleRandomColor={this.handleRandomColor}/>
              <PixelInputLength
                pixelLength={pixelLength}
                handlePixelLength={this.handlePixelLength}/>
            </section>
            <PixelBoard
              handlePaintPixel={this.handlePaintPixel}
              pixelLength={pixelLength}
            />
            <section className="utilBoard">
              <ClearBtn handleClearPixelBoard={this.handleClearPixelBoard} />
              <span className="tamanho">Tamanho: {pixelLength}px por {pixelLength}px</span>
            </section>
          </div>
        </main>
        <Footer/>
      </>
    );
  }
}
