import { render, screen } from "@testing-library/react";
import List from "../List/List";

const skills = ["React", "Next.js", "JavaScript"];
describe("List", () => {
  test("Get ul tag", () => {
    render(<List skills={skills} />);
    const ulTag = screen.getByRole("list");
    expect(ulTag).toBeInTheDocument();
  });

  test("Get all li tags", () => {
    render(<List skills={skills} />);
    const liTags = screen.getAllByRole("listitem");
    expect(liTags).toHaveLength(skills.length);
  });
});
