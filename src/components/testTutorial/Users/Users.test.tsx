import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import Users from "./Users";

describe("Users", () => {
  test("Render 2 h1 tags -> it will use msw", async () => {
    render(<Users />);
    const liTags = await screen.findAllByRole("listitem");
    expect(liTags).toHaveLength(2);
  });

  test("Should return error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const errorMessageTag = await screen.findByText("Error In Connection");
    expect(errorMessageTag).toBeInTheDocument();
  });

  test("Should be disable", () => {
    render(<Users />);
    const btn = screen.getByRole("button", { name: "Disabled" });
    expect(btn).toBeDisabled();
  });
});
