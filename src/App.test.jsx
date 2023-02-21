import React from "react";
import { render, screen, fireEvent, wait, act } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import MainRoutes from "./routes/mainRoutes";

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
    const header = await screen.findByTestId("test-header");
    expect(header).toBeInTheDocument();

    const footer = await screen.findByTestId("test-footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render MainRoutes", async () => {
    render(
      <MemoryRouter>
        <App></App>
      </MemoryRouter>
    );
    const mainRoutes = await screen.findByTestId("test-main-routes");
    expect(mainRoutes).toBeInTheDocument();
  });
});
