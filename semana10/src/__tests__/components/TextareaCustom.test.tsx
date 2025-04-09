import TextareaCustom from "@/components/TextareaCustom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("TextareaCustom component", () => {
    it("Should render the component with correct placeholder", () => {
        render(<TextareaCustom message="Hello World" setMessage={jest.fn()} title="placeholder" />);

        const textarea = screen.getByPlaceholderText("placeholder");

        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveValue("Hello World");
    });

    it("Should render the component and call the function when value changes", () => {
        const setMessage = jest.fn();
        render(<TextareaCustom message="Hello World" setMessage={setMessage} title="placeholder" />);

        const textarea = screen.getByPlaceholderText("placeholder");
        fireEvent.change(textarea, { target: { value: "New Value" } });

        expect(setMessage).toHaveBeenCalled();
        expect(setMessage).toHaveBeenCalledTimes(1);
        expect(setMessage).toHaveBeenCalledWith("New Value");
    });
});
