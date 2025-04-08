import ButtonCustom from "@/components/ButtonCustom";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test Button Custom", () => {
    it("Deve renderizar o componente Button Custom", () => {
        const handleMock = jest.fn();
        render(<ButtonCustom text="Entrar" handle={handleMock}/>);

        const button = screen.getByText("Publicar");

        expect(button).toBeInTheDocument();
    });

    it("Deve renderizar o componente sem texto", () => {

    });

    it("Deve renderizar o componente e testar click no botão", () => {
        const handleMock = jest.fn();
        render(<ButtonCustom text="Entrar" handle={handleMock} />);

        const button = screen.getByText("Entrar");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(handleMock).toHaveBeenCalledTimes(1);
    });
});
