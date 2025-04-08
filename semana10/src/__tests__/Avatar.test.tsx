import Avatar from "@/components/Avatar";
import { render, screen } from "@testing-library/react";

describe("Componente Avatar", () => {
    it("Deve renderizar o componente de avatar sem borda", () => {
        render(<Avatar src="teste" />);

        const avatarElement = screen.getByTestId("avatar");

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar-without-border");
    });

    it("Deve renderizar o componente de avatar com borda", () => {
        render(<Avatar src="teste" hasBorder />);

        const avatarElement = screen.getByTestId("avatar");

        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveClass("avatar");
    });
});
