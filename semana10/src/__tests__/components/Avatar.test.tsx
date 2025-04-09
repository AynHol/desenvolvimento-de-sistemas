import Avatar from "@/components/Avatar";
import { render, screen } from "@testing-library/react";

describe("Componente Avatar", () => {
    it("Should render the avatar component without border", () => {
        render(<Avatar src="teste" />);

        const avatarElement = screen.getByTestId("avatar");

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar-without-border");
    });

    it("Should render the avatar component with border", () => {
        render(<Avatar src="teste" hasBorder />);

        const avatarElement = screen.getByTestId("avatar");

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar");
    });
});
