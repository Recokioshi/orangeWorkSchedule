import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { unmountComponentAtNode } from "react-dom";

import Header from './Header';

let container: HTMLDivElement | null = null;
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

it("renders header", () => {
  if (container) {
    act(() => {
      render(<Header />);
    });
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  }
});