import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartCard from "../components/cartCard";

// { src, price, name, id, changeAmount, getOrder }
test("render correctly image component", async () => {
  // Setup
  const props = {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    size: "sm",
    name: "Organic soup",
    price: 1653,
    id: 2,
    changeAmount: jest.fn(),
    getOrder: jest.fn((x) => {
      return { order: "food name", quantity: 2 };
    }),
  };

  render(<CartCard {...props} />);

  //Capture elements
  const name = screen.getByText(props.name);
  const price = screen.getByTestId("price");
  const image = screen.getByAltText("food's menu");

  // Assertions
  expect(name).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(image).toBeInTheDocument();

  await userEvent.click(name);

  expect(name).toHaveTextContent(props.name);
  expect(price).toHaveTextContent(`$${props.price * 2}`);
  expect(props.getOrder).toHaveBeenCalledTimes(1);
  expect(props.getOrder).toHaveBeenCalledWith(props.id);
});

test("amount of products increase and decrease  when the icons are click", async () => {
  // Setup
  const props = {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    size: "sm",
    name: "Organic soup",
    price: 1653,
    id: 2,
    changeAmount: jest.fn(),
    getOrder: jest.fn((x) => {
      return { order: "food name", quantity: 2 };
    }),
  };

  render(<CartCard {...props} />);

  //Capture elements
  const price = screen.getByTestId("price");
  const decreaseIcon = screen.getByTestId("decrease");
  const increaseIcon = screen.getByTestId("increase");

  // Assertions
  expect(price).toBeInTheDocument();
  expect(price).toHaveTextContent(`$${props.price * 2}`);

  await userEvent.click(decreaseIcon);

  expect(price).toHaveTextContent(`$${props.price * 1}`);
  expect(props.changeAmount).toHaveBeenCalledTimes(1);
  expect(props.changeAmount).toHaveBeenCalledWith(props.id, 1);

  await userEvent.click(increaseIcon);

  expect(price).toHaveTextContent(`$${props.price * 2}`);
  expect(props.changeAmount).toHaveBeenCalledTimes(2);
  expect(props.changeAmount).toHaveBeenCalledWith(props.id, 2);
});
