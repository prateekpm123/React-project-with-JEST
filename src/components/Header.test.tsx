import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("Testing Header Content", () => {
    render(<Header/>); 
    const headerText = screen.getByText(/how are you/i);
    expect(headerText).toBeInTheDocument();
    //test
})