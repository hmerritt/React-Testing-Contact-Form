import React from "react";
import "mutationobserver-shim";
import { render, act, fireEvent, waitForElement, waitForDomChange } from "@testing-library/react";
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

test("Displays error messages for 'required' inputs", async () => {
    const { getAllByText, getByTitle } = render(<ContactForm />);

    act(() => {
        fireEvent.click(getByTitle(/submit/i));
    });

    await waitForDomChange(() => {
        getAllByText(/Looks like there was an error/i);
    });
});
