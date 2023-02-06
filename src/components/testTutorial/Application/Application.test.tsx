import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Application from "./Application";

describe("Application", () => {
  test("Get Elements getBy...", () => {
    render(<Application />);
    const inputTypeText = screen.getByRole("textbox", { name: "Name" });
    expect(inputTypeText).toBeInTheDocument();

    const h1Tag = screen.getByRole("heading", {
      level: 1,
      name: "Job Application Form",
    });
    expect(h1Tag).toBeInTheDocument();

    const h2Tag = screen.getByRole("heading", { level: 2 });
    expect(h2Tag).toBeInTheDocument();

    const inputTypeCheckBox = screen.getByRole("checkbox");
    expect(inputTypeCheckBox).toBeInTheDocument();

    const getByLabel = screen.getByLabelText("Name");
    expect(getByLabel).toBeInTheDocument();

    const selectTag = screen.getByRole("combobox");
    expect(selectTag).toBeInTheDocument();

    const img = screen.getByAltText("img");
    expect(img).toBeInTheDocument();
  });

  test("find elentment that appare later", async () => {
    render(<Application />);
    const learningBtn = await screen.findByRole(
      "button",
      { name: "Start Learning" },
      { timeout: 2000 }
    );
    expect(learningBtn).toBeInTheDocument();
  });

  test("Fire events", () => {
    render(<Application />);
    fireEvent.submit(screen.getByRole("button", { name: "Submit" }));
    const h1TextAfterClick = screen.getByRole("heading", {
      level: 1,
      name: "JOB APPLICATION",
    });
    expect(h1TextAfterClick).toBeInTheDocument();

    const input = screen.getByPlaceholderText(
      "Enter Your Name"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Seun" } });
    expect(input.value).toBe("Seun");
  });

  test("user-event", () => {
    render(<Application />);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "TEST");
    expect(input).toHaveValue("TEST");
  });

  test("Start Learnig Button Not Present", () => {
    render(<Application />);
    const learningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(learningBtn).not.toBeInTheDocument();
  });

  test("Start Learning Btn To Be In The Document", () => {
    render(<Application />);
    const loginBtn = screen.queryByRole("button", {
      name: "Login",
    }) as HTMLButtonElement;
    userEvent.click(loginBtn);
    const loginBtn2 = screen.queryByRole("button", {
      name: "Login",
    }) as HTMLButtonElement;
    const learningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    }) as HTMLButtonElement;
    expect(loginBtn2).not.toBeInTheDocument();
    expect(learningBtn).toBeInTheDocument();
  });
});
