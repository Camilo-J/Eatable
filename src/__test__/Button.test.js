import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";

test("show button component and run handleClick method when it is click", async () => {
  // Setup

  const props = {
    children: "Click Here",
    disable: false,
    handleCLick: jest.fn(),
  };

  render(<Button {...props} />);
  // Capture elements

  const button = screen.getByRole("button", {
    name: /Click Here/i,
  });

  // Assertions
  await userEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(props.handleCLick).toHaveBeenCalledTimes(1);
});
