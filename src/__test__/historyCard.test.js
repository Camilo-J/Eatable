import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryCard from "../components/historyCard";

test("render correctly historyCard componet and its event display", async () => {
  // Setup
  const props = {
    date: "2023-01-06T16:12:45.618Z",
    items: [
      {
        id: 25,
        quantity: 3,
        subtotal: 5454,
        product_id: 1,
        product_name: "green cream",
      },
      {
        id: 26,
        quantity: 2,
        subtotal: 7856,
        product_id: 13,
        product_name: "mix rolls",
      },
      {
        id: 27,
        quantity: 2,
        subtotal: 6460,
        product_id: 16,
        product_name: "chicken spagetti",
      },
    ],
    addres: "Calle Dota 2, urb Radiants",
  };

  render(<HistoryCard {...props} />);
  // Capture Elements

  const date = screen.getByText(props.date);
  const Amountitems = screen.getByText(`${props.items.length} items`);
  const amount = screen.getByText(`$19770`);
  const address = screen.getByText(props.addres);
  const display = screen.getByTestId("display");
  const containerView = screen.getByTestId("containerView");

  // Assertions
  expect(date).toBeInTheDocument();
  expect(Amountitems).toBeInTheDocument();
  expect(Amountitems).toHaveTextContent("3 items");
  expect(amount).toBeInTheDocument();
  expect(amount).toHaveTextContent(`$19770`);
  expect(address).toBeInTheDocument();
  expect(address).toHaveTextContent(props.addres);
  expect(display).toBeInTheDocument();
  expect(containerView).not.toBeVisible();

  await userEvent.click(display);

  expect(containerView).toBeVisible();
});
