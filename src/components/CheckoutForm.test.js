import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});


test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "Altora");

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "Mclean");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "999 BlahBlah St");

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Alban");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "NY");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "11412");

    const submit = screen.getByRole("button");
    userEvent.click(submit)

     waitFor(() => {
        const successMessage = screen.getAllByTestId("successMessage");
       
        expect(successMessage).toBeInTheDocument();
        expect(successMessage).toBeVisible()

    })
})

