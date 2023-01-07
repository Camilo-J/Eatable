import { render, screen } from "@testing-library/react";
import { HiHome } from "react-icons/hi";
import { MemoryRouter } from "react-router-dom";
import NavBarItem from "../components/navbarItem";

test("render correctly navbar Component", () => {
  // Setup
  const props = {
    // { name, icon, to, stroke }
    icon: <HiHome />,
    to: "profile",
    stroke: 1,
  };

  render(
    <MemoryRouter>
      <NavBarItem {...props} />
    </MemoryRouter>
  );
  // Capture Elements

  const linkOption = screen.getByTestId("link");
  // Assertions

  expect(linkOption).toBeInTheDocument();
  expect(linkOption).toBeVisible();
});
