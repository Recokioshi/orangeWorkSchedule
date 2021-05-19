import React from "react";
import pretty from "pretty";
import { getAllByRole, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import {
  ListOfWorkers,
  WorkerType,
  getInitials,
  Worker,
} from "./ListOfWorkers";

const dummyData: WorkerType[] = [
  {
    id: 123,
    firstName: "Stefan",
    lastName: "Pajonkowsky",
    color: "#58eb34",
  },
  {
    id: 124,
    firstName: "Grzegorz",
    lastName: "Biedronkowy",
    color: "#58fb55",
  },
];

describe("workers list", () => {
  test("renders zero elements", () => {
    const emptyArray = dummyData.slice(2);
    const { container, getByText } = render(<ListOfWorkers workersData={emptyArray} />);

    expect(getByText("Workers")).toBeInTheDocument();
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<nav class=\\"MuiList-root MuiList-padding MuiList-subheader\\" aria-labelledby=\\"nested-list-subheader\\">
        <div class=\\"MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters\\" id=\\"nested-list-subheader\\">Workers</div>
      </nav>"
    `);
  });

  test("renders one element", () => {
    const singleElementArray = dummyData.slice(1);
    const { container, getByText, getAllByRole } = render(
      <ListOfWorkers workersData={singleElementArray} />
    );

    expect(getByText("Workers")).toBeInTheDocument();
    expect(getAllByRole("button").length).toBe(1);
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<nav class=\\"MuiList-root MuiList-padding MuiList-subheader\\" aria-labelledby=\\"nested-list-subheader\\">
        <div class=\\"MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters\\" id=\\"nested-list-subheader\\">Workers</div>
        <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
          <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">GB</div>
          <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Grzegorz Biedronkowy</span></div><span class=\\"MuiTouchRipple-root\\"></span>
        </div>
      </nav>"
    `);
  });

  test("renders two elements", () => {
    const { container, getByText, getAllByRole } = render(<ListOfWorkers workersData={dummyData} />);

    expect(getByText("Workers")).toBeInTheDocument();
    expect(getAllByRole("button").length).toBe(2);
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<nav class=\\"MuiList-root MuiList-padding MuiList-subheader\\" aria-labelledby=\\"nested-list-subheader\\">
        <div class=\\"MuiListSubheader-root MuiListSubheader-sticky MuiListSubheader-gutters\\" id=\\"nested-list-subheader\\">Workers</div>
        <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
          <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">SP</div>
          <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Stefan Pajonkowsky</span></div><span class=\\"MuiTouchRipple-root\\"></span>
        </div>
        <div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
          <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">GB</div>
          <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Grzegorz Biedronkowy</span></div><span class=\\"MuiTouchRipple-root\\"></span>
        </div>
      </nav>"
    `);
  });
});

describe("worker", () => {
  test("first worker", () => {
    const dummyWorkerData = dummyData[0];
    const { container, getByText } = render(
      <Worker key={dummyWorkerData.id} workerData={dummyWorkerData} />
    );

    expect(getByText(getInitials(dummyWorkerData))).toBeInTheDocument();
    expect(getByText(`${dummyWorkerData.firstName} ${dummyWorkerData.lastName}`)).toBeInTheDocument();

    expect(getByText(dummyWorkerData.firstName, {exact: false})).toBeInTheDocument();
    expect(getByText(dummyWorkerData.lastName, {exact: false})).toBeInTheDocument();
    
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
        <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">SP</div>
        <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Stefan Pajonkowsky</span></div><span class=\\"MuiTouchRipple-root\\"></span>
      </div>"
    `);
  });

  test("second worker", () => {
    const dummyWorkerData = dummyData[1];
    const { container, getByText } = render(
      <Worker key={dummyWorkerData.id} workerData={dummyWorkerData} />
    );

    expect(getByText(getInitials(dummyWorkerData))).toBeInTheDocument();
    expect(getByText(`${dummyWorkerData.firstName} ${dummyWorkerData.lastName}`)).toBeInTheDocument();

    expect(getByText(dummyWorkerData.firstName, {exact: false})).toBeInTheDocument();
    expect(getByText(dummyWorkerData.lastName, {exact: false})).toBeInTheDocument();

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
      "<div class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
        <div class=\\"MuiAvatar-root MuiAvatar-circle MuiAvatar-colorDefault\\">GB</div>
        <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">Grzegorz Biedronkowy</span></div><span class=\\"MuiTouchRipple-root\\"></span>
      </div>"
    `);
  });
});

describe("functions", () => {
  test("getInitials", () => {
    expect(getInitials(dummyData[0])).toBe("SP");
    expect(getInitials(dummyData[1])).toBe("GB");
  });
});
