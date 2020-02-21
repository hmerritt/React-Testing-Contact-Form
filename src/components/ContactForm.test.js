import React from "react";
import "mutationobserver-shim";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
});

test("renders all input labels", () => {
    const { getByText } = render(<ContactForm />);

    getByText(/First Name\*/i);
    getByText(/Last Name\*/i);
    getByText(/Email\*/i);
    getByText(/Message/i);
});

test("renders submit button", () => {
    const { getByTitle } = render(<ContactForm />);

    getByTitle(/submit/i);
});

// test("Error messages show up for 'required' inputs", () => {
//      const { getByText, getByDisplayValue } = render(<App />);
//      fireEvent.click(getByDisplayValue(/submit/i));
//     //
//      getByText(/Looks like there was an error: required/i);
//
//     console.log(render(<ContactForm />));
// });
