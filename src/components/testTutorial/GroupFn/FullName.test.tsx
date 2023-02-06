import { render, screen } from "@testing-library/react";
import FullName from "./FullName";

describe("FullName", () => {
  test("Show FullName", () => {
    render(<FullName fullName="OJO SEUN" />);
    const fullName = screen.getByText("Hi OJO SEUN");
    expect(fullName).toBeInTheDocument();
  });

  test("Show Nothing", () => {
    render(<FullName />);
    const noText = screen.getByText("Hi");
    expect(noText).toBeInTheDocument();
  });
});
