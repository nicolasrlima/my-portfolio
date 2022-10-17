import { screen } from "@testing-library/react";
import { renderWithTheme } from "tests/utils";
import Typography from "../Typography";

it("renders a Typography", () => {
  renderWithTheme(<Typography as="h1">Teste</Typography>);

  const textComponent = screen.getByRole("heading");

  expect(textComponent).toHaveTextContent("Teste");
});
