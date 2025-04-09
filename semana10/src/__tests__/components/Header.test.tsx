import Header from "@/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
    it("Should render the header component", () => {
        render(<Header />);

        expect(screen.getByAltText("LOGO")).toBeInTheDocument();
        expect(screen.getByText("Feed")).toBeInTheDocument();
    });
});
