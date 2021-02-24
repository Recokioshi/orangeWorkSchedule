import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { unmountComponentAtNode } from "react-dom";

import { ListOfWorkers, WorkerType, getInitials, Worker } from "./ListOfWorkers";

let container: HTMLDivElement | null = null;
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
    }];


beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    if (container) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

it("renders list of workers", () => {
    if (container) {
        //empty
        const emptyArray = dummyData.slice(2);
        act(() => {
            render(<ListOfWorkers workersData={emptyArray} />);
        });
        expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

        //one elem
        act(() => {
            const singleElementArray = dummyData.slice(1);
            render(<ListOfWorkers workersData={singleElementArray} />);
        });
        expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

        //two elems
        act(() => {
            render(<ListOfWorkers workersData={dummyData} />);
        });
        expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
    }
});

it("renders worker", () => {
    if (container) {
        act(() => {
            const dummyWorkerData = dummyData[0];
            render(<Worker key={dummyWorkerData.id} workerData={dummyWorkerData} />);
        });
        expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);

        act(() => {
            const dummyWorkerData = dummyData[1];
            render(<Worker key={dummyWorkerData.id} workerData={dummyWorkerData} />);
        });
        expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
    }
});

it("check getInitials", () => {
    expect(getInitials(dummyData[0])).toBe("SP");
    expect(getInitials(dummyData[1])).toBe("GB");
});
