import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// does not work
import { TestComponent } from "#components/TestComponent";

test("TestComponent", () => {
  render(<TestComponent />);
  expect(screen.getByRole("heading")).toHaveTextContent("Hello, World!");
});
