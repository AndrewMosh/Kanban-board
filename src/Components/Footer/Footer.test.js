import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Footer from "./Footer";
import store from "../../store/store";

describe("Footer", () => {
  it("displays the correct finished and active tasks count", () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    const activeTasksCount = screen.getByText(/Active tasks/i);
    expect(activeTasksCount).toHaveTextContent(
      `Active tasks: ${store.getState().tasks[0].tasks.length}`
    );

    const finishedTasksCount = screen.getByText(/Finished tasks/i);
    expect(finishedTasksCount).toHaveTextContent(
      `Finished tasks: ${store.getState().tasks[3].tasks.length}`
    );
    const authorElement = screen.getByText(/Andrei Moshchenko/i);
    const yearElement = screen.getByText(new Date().getFullYear().toString());
    expect(authorElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
  });
});
