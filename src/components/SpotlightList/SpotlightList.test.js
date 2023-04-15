import { render, screen } from "@testing-library/react";
import SpotlightList from ".";
import testEvents from "../../lib/testEvents";

test("renders all events in the SpotlightList", async () => {
  render(<SpotlightList events={testEvents} />);
  const events = screen.getAllByRole("heading", { level: 4 });
  expect(events).toHaveLength(testEvents.length);
});