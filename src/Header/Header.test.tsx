import React from "react";
import pretty from "pretty";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

test("render header", () => {
  const { container, getByRole } = render(<Header />);

  expect(getByRole("heading")).toHaveTextContent("Orange Work Schedule");
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"header\\">
      <header class=\\"MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary makeStyles-appBar-1 mui-fixed MuiPaper-elevation4\\">
        <div class=\\"MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters\\">
          <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-noWrap\\">Orange Work Schedule</h6>
        </div>
      </header>
    </div>"
  `);
});
