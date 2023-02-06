import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("Should Render h1 tag with textContent of 0", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("0");
  });

  test("Should Render h1 tag with textContent of 1", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const increamentBtn = screen.getByRole("button", { name: "Increament" });
    await user.click(increamentBtn);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("1");
  });

  test("Should have value of 10", async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const input = screen.getByRole("spinbutton");
    await user.type(input, "10");
    expect(input).toHaveValue(10);
    const setBtn = screen.getByRole("button", { name: "Set" });
    await user.click(setBtn);
    const h1Tag = screen.getByRole("heading", { level: 1 });
    expect(h1Tag).toHaveTextContent("10");
  });
});
