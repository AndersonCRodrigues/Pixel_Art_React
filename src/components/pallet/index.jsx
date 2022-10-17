import React from "react";
import "./style.css";

import Prop from 'prop-types';

export class Pallet extends React.Component {
  render() {
    const { index, handleSelectColor, palletColors } = this.props;
    return (
      <div
        className="colorPallet"
        style={{
          backgroundColor: index === 0 ? "black" : palletColors[index],
        }}
        onClick={handleSelectColor}
      ></div>
    );
  }
}

Pallet.propTypes = {
  index: Prop.number,
  handleSelectColor: Prop.func.isRequired,
  palletColors: Prop.array.isRequired,
};
