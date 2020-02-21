import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";
import App from "./App";

test("renders App without crashing", () => {
    render(<App />);
});

test("render all input labels", () => {
    const { getByText } = render(<App />);

    getByText(/First Name\*/i);
    getByText(/Last Name\*/i);
    getByText(/Email\*/i);
    getByText(/Message/i);
});

// test("Error messages show up for 'required' inputs", () => {
//     const somevar = render(<App />);
//     //const firstRender = asFragment();
//
//     console.log(somevar);
//
//     //fireEvent.click(getByText(/submit/i));
// });
