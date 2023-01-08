import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IssueCard from "./IssueCard";
import "@testing-library/jest-dom";

// For presentation, i have attached these RTL tests for the IssueCard component
// normally i would put similar tests for the other components.

const initialProps = {
  id: 1,
  description: "some test description",
  isPending: false,
  isOpened: true,
  setCards: jest.fn(),
};

it("tests whether card is being rendered correctly", async () => {
  render(<IssueCard {...initialProps} />);

  const cardStatus = screen.getByTestId("card_status");
  const cardDescription = screen.queryByTestId("card_description");
  const cardCloseButton = screen.queryByTestId("card_close_button");
  const cardPendingButton = screen.queryByTestId("card_pending_button");

  expect(cardStatus).toHaveClass("opened");
  expect(cardDescription).toHaveTextContent("some test description");
  expect(cardCloseButton).toBeInTheDocument();
  expect(cardPendingButton).toBeInTheDocument();
});

it("tests whether component is fading out", async () => {
  render(<IssueCard {...initialProps} />);

  const cardContainer = await screen.findByTestId("card_container");
  const cardCloseButton = await screen.findByTestId("card_close_button");

  userEvent.click(cardCloseButton);

  expect(cardContainer).toHaveClass("fadeOut");
});

it("tests whether component is changing status", async () => {
  render(<IssueCard {...initialProps} />);

  const cardPendingButton = await screen.findByTestId("card_pending_button");

  userEvent.click(cardPendingButton);

  const cardStatus = screen.getByTestId("card_status");

  await waitFor(() => {
    expect(cardStatus).toHaveClass("transformPending");
  });
});

it("tests whether card with status pending is properly rendered", async () => {
  render(<IssueCard {...initialProps} isPending={true} />);

  const cardStatus = screen.getByTestId("card_status");
  const cardPendingButton = screen.queryByTestId("card_pending_button");
  const cardCloseButton = screen.queryByTestId("card_close_button");

  expect(cardStatus).toHaveClass("pending");
  expect(cardCloseButton).toBeInTheDocument();
  expect(cardPendingButton).not.toBeInTheDocument();
});

it("tests whether card with status closed is properly rendered", async () => {
  render(<IssueCard {...initialProps} isOpened={false} />);

  const cardStatus = screen.getByTestId("card_status");
  const cardPendingButton = screen.queryByTestId("card_pending_button");
  const cardCloseButton = screen.queryByTestId("card_close_button");

  expect(cardStatus).toHaveClass("closed");
  expect(cardCloseButton).not.toBeInTheDocument();
  expect(cardPendingButton).not.toBeInTheDocument();
});
