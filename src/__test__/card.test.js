import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CardFood from "../components/card";

test("render card component correctly", async () => {
  // Setup
  const props = {
    id: 1,
    name: "Mexican Food",
    price: 25.6,
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    handleProduct: jest.fn(),
  };

  render(<CardFood {...props} />);

  // Capture elements
  const name = screen.getByText(props.name);
  const price = screen.getByText(`$${props.price}`);
  const src = screen.getByAltText("food's menu");

  // Assertions

  expect(name).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(src).toBeInTheDocument();

  await userEvent.click(name);

  expect(name).toHaveTextContent(props.name);
  expect(price).toHaveTextContent(`$${props.price}`);
  expect(props.handleProduct).toHaveBeenCalledTimes(1);
  expect(props.handleProduct).toHaveBeenCalledWith(props.id);
});
