import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

import { TestingConstants } from "./constants/testing-constants";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = act(App);
  });

  it("should render without crashing", () => {
    expect(wrapper).not.toBeNull();
  });

  it("should render a header and a footer", async () => {
    render(
      <MemoryRouter>
        <App></App>
      </MemoryRouter>
    );
    const header = await screen.findByTestId(TestingConstants.testHeader);
    expect(header).toBeInTheDocument();

    const footer = await screen.findByTestId(TestingConstants.testFooter);
    expect(footer).toBeInTheDocument();
  });

  it("should render MainRoutes", async () => {
    render(
      <MemoryRouter>
        <App></App>
      </MemoryRouter>
    );
    const mainRoutes = await screen.findByTestId(
      TestingConstants.testMainRoutes
    );
    expect(mainRoutes).toBeInTheDocument();
  });
});
