import ButtonCustom from "@/components/ButtonCustom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test Button Custom", () => {
    it("Should render the Button Custom Component", () => {
        render(<ButtonCustom text="Entrar" handle={() => {}} />);

        const button = screen.getByText("Entrar");

        expect(button).toBeInTheDocument();
    });

    it("Should render the component without text", () => {
        render(<ButtonCustom handle={() => {}} />);

        const button = screen.getByText("Login");

        expect(button).toBeInTheDocument;
    });

    it("Should render the component and test the button click", () => {
        const handleMock = jest.fn();
        render(<ButtonCustom text="Entrar" handle={handleMock} />);

        const button = screen.getByText("Entrar");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(handleMock).toHaveBeenCalledTimes(1);
    });
});
