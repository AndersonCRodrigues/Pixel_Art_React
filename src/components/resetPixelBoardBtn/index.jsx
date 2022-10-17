import React from "react";

import Prop from 'prop-types';

import './style.css';

export const ClearBtn = ({handleClearPixelBoard}) => {
  return (
    <button className="clearBtn"
    onClick={handleClearPixelBoard}
    >
      Clear
    </button>
  );
}

ClearBtn.propTypes = {
  handleClearPixelBoard: Prop.func.isRequired,
}