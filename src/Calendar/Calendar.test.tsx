import React from "react";
import pretty from "pretty";
import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import { Calendar } from "./Calendar";
import moment from "moment";

describe("renders calendar", () => {
  test("snapshot", () => {
    const { container, getByRole, getByText, getByLabelText } = render(
      <Calendar />
    );
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"calendar\\">
        <main class=\\"makeStyles-content-2\\">
          <div class=\\"MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters\\"></div>
          <div class=\\"MuiFormControl-root makeStyles-calendarSelect-1\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled\\" data-shrink=\\"true\\" id=\\"select-label-Month\\">Month</label>
            <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl\\">
              <div class=\\"MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input\\" tabindex=\\"0\\" role=\\"button\\" aria-haspopup=\\"listbox\\" aria-labelledby=\\"select-label-Month select-Month\\" id=\\"select-Month\\">May</div><input aria-hidden=\\"true\\" tabindex=\\"-1\\" class=\\"MuiSelect-nativeInput\\" value=\\"4\\"><svg class=\\"MuiSvgIcon-root MuiSelect-icon\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                <path d=\\"M7 10l5 5 5-5z\\"></path>
              </svg>
            </div>
          </div>
          <div class=\\"MuiFormControl-root makeStyles-calendarSelect-1\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled\\" data-shrink=\\"true\\" id=\\"select-label-Year\\">Year</label>
            <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl\\">
              <div class=\\"MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input\\" tabindex=\\"0\\" role=\\"button\\" aria-haspopup=\\"listbox\\" aria-labelledby=\\"select-label-Year select-Year\\" id=\\"select-Year\\">2021</div><input aria-hidden=\\"true\\" tabindex=\\"-1\\" class=\\"MuiSelect-nativeInput\\" value=\\"2021\\"><svg class=\\"MuiSvgIcon-root MuiSelect-icon\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                <path d=\\"M7 10l5 5 5-5z\\"></path>
              </svg>
            </div>
          </div>
        </main>
      </div>"
    `);
  });

  test("select month", () => {
    const { getByRole, getByLabelText } = render(<Calendar />);

    const currentMonth = new Date().getMonth();
    const selectNameRegex = new RegExp(
      `Month ${moment.months()[currentMonth]}`
    );

    expect(getByLabelText("Month")).toBeInTheDocument();
    expect(getByRole("button", { name: selectNameRegex })).toBeInTheDocument();

    const newMonth = "August";
    userEvent.click(getByRole("button", { name: selectNameRegex }));
    userEvent.click(
      within(getByRole("listbox")).getByText(new RegExp(newMonth))
    );
    expect(
      getByRole("button", { name: new RegExp(`Month ${newMonth}`) })
    ).toBeInTheDocument();
  });

  test("select year", () => {
    const { getByRole, getByLabelText } = render(<Calendar />);

    const currentYear = new Date().getFullYear();
    const selectNameRegex = new RegExp(`Year ${currentYear}`);

    expect(getByLabelText("Year")).toBeInTheDocument();
    expect(getByRole("button", { name: selectNameRegex })).toBeInTheDocument();

    const nextYear = currentYear + 1;
    userEvent.click(getByRole("button", { name: selectNameRegex }));
    userEvent.click(
      within(getByRole("listbox")).getByText(new RegExp(String(nextYear)))
    );
    expect(
      getByRole("button", { name: new RegExp(`Year ${nextYear}`) })
    ).toBeInTheDocument();
  });
});
