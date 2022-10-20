/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import React from "react";
import {RandomColorBtn} from '.';
import userEvent from "@testing-library/user-event";

describe('<RandomColorBtn />', () => {

  it('should render the button whith the "Gerar novas Cores"', () => {
    render(<RandomColorBtn/>);
    const button = screen.getByRole('button', { name: /Gerar novas Cores/i});

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('should have class "randomBtn"', () => {
    render(<RandomColorBtn/>);
    const button = screen.getByRole('button', { name: /Gerar novas Cores/i});
    expect(button).toHaveAttribute('class', 'randomBtn');
  });

  it('should be call fn when clicked', () => {
    const onClick = jest.fn();
    render(<RandomColorBtn handleRandomColor={onClick}/>);
    const button = screen.getByRole('button', { name: /Gerar novas Cores/i});
    userEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});