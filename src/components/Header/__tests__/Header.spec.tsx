import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../../tests/utils";
import Header from "../Header";

it("renders the header", () => {
  renderWithTheme(<Header>Teste</Header>);

  const header = screen.getByRole("banner");

  expect(header).toBeInTheDocument();
});
