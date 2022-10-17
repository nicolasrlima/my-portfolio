import { screen } from "@testing-library/react";
import { renderWithTheme } from "tests/utils";
import Link from "../Link";

it("renders an Link", () => {
  renderWithTheme(<Link href="/">Teste</Link>);

  const textComponent = screen.getByRole("link");

  expect(textComponent).toHaveTextContent("Teste");
});
