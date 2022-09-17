import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../tests/utils";
import Button from "../Button";

it("renders a button", () => {
  renderWithTheme(<Button>Teste</Button>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
