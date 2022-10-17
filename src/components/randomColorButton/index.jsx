import React from "react";

import Prop from 'prop-types';

import './style.css';

export const RandomColorBtn = ({handleRandomColor}) => {
  return(
    <button className="randomBtn"
    onClick={handleRandomColor}>Gerar novas Cores</button>
  );
};


RandomColorBtn.propTypes = {
  handleRandomColor: Prop.func,
}