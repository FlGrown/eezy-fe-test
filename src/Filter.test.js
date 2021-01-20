import { render, fireEvent, getAllByRole } from "@testing-library/react";
import Filter from "./Components/Filter";

const optionsArr = ["All", "Free", "Pro"];

const FilterTest = () => (
  <Filter options={optionsArr} filtertype="Vectors"></Filter>
);

it("runs without crashing", () => {
  render(<FilterTest />);
});

it("can change the value of the dropdown", () => {
  const { getByTestId } = render(<FilterTest />);
  console.log(getByTestId);
  const filter = getByTestId("filter");

  const display = filter.children[0];

  expect(display.textContent).toBe(`${optionsArr[0]} Vectors`);

  fireEvent.click(filter);

  const filterOptions = getAllByRole(filter, "option");

  fireEvent.click(filterOptions[2]);

  expect(display.textContent).toBe(`${optionsArr[2]} Vectors`);
});
