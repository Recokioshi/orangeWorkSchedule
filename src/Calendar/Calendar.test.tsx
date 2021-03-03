import React from "react";
import pretty from "pretty";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Calendar from "./Calendar";

test("renders calendar", () => {
  const { container } = render(<Calendar />);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"calendar\\">
      <main class=\\"makeStyles-content-1\\"></main>
    </div>"
  `);
});
