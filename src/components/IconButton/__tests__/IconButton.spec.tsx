import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../tests/utils";
import IconButton from "../IconButton";

it("renders a button with icon", () => {
  renderWithTheme(<IconButton>Teste</IconButton>);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});
