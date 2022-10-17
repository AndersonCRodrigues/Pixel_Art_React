import React from "react";

import Prop from 'prop-types';

export const RandomColorBtn = ({handleRandomColor}) => {
  return(
    <button className="randomBtn"
    onClick={handleRandomColor}>Gerar novas Cores</button>
  );
};


RandomColorBtn.propTypes = {
  handleRandomColor: Prop.func,
}