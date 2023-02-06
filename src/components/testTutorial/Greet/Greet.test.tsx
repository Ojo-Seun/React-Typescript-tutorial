import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet User With Name", () => {
  render(<Greet name="Seun" />);
  const greetTextRegEx = screen.getByText(/Hello Seun/i);
  expect(greetTextRegEx).toBeInTheDocument();

  const greetText = screen.getByText("Hello Seun");
  expect(greetText).toBeInTheDocument();
});

test("Greet User Without Name", () => {
  render(<Greet />);
  const greetText = screen.getByText("Hello");
  expect(greetText).toBeInTheDocument();
});
