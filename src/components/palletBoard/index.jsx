import React from "react";
import { Pallet } from "../pallet";

import Prop from 'prop-types';

export class PalletBoard extends React.Component {

  render() {
    const { nPallets, palletColors, handleSelectColor } = this.props;
    return (
      <section className="boardPallet">
        {nPallets.map((_, index) => (
          <Pallet
            key={index}
            index={index}
            palletColors={palletColors}
            handleSelectColor={handleSelectColor}
          />
        ))}
      </section>
    );
  }
}

PalletBoard.propTypes = {
  nPallets: Prop.array.isRequired,
  palletColors: Prop.array.isRequired,
  handleSelectColor: Prop.func.isRequired,
};
