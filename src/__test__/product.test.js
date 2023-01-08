import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Product from "../components/product";

test("render correctly product Component", async () => {
  // Setup

  const product = {
    id: 4,
    name: "zucchini cream",
    price: 1691,
    category: "soups",
    description:
      "Eum ex consectetur. Eos reprehenderit sed. In eos dolor. At quos voluptas. Quidem harum et. Ea omnis enim. Deleniti consequatur rer.",
    picture_url:
      "https://img.freepik.com/free-photo/zucchini-cream-soup-with-garlic-chilli_2829-19613.jpg",
  };

  const props = {
    handleFilter: jest.fn((x) => product),
    Order: jest.fn(),
    handleOrder: jest.fn(),
  };

  render(
    <MemoryRouter initialEntries={["/products/4"]}>
      <Routes>
        <Route path="/products/:id" element={<Product {...props} />}></Route>
      </Routes>
    </MemoryRouter>
  );
  // Capture Element
  const price = screen.getByTestId("price");
  const name = screen.getByText("zucchini cream");
  const image = screen.getByAltText("food's menu");
  const button = screen.getByRole("button", {
    name: /Add to Cart/i,
  });
  // Assertions
  expect(price).toHaveTextContent("$1691");
  expect(name).toHaveTextContent(product.name);
  expect(image).toBeInTheDocument();

  expect(props.handleFilter).toHaveBeenCalledWith(4);
  expect(props.Order).toHaveBeenCalledWith(4);

  await userEvent.click(button);

  expect(props.handleOrder).toHaveBeenCalledWith({
    id: product.id,
    quantity: 1,
  });

  expect(button).toBeDisabled();
  // { id: product.id, quantity: 1 }
});
