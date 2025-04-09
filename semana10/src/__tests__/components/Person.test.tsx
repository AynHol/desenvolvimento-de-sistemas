import Person from "@/components/Person";
import { render, screen } from "@testing-library/react";

describe("Person Component", () => {
    it("Should render the person component", () => {
        render(<Person nome="Joe Doe" idade={20} />);

        const name = screen.queryByText("Joe Doe", { exact: false });
        const age = screen.queryByText("20", { exact: false });

        expect(name).toBeInTheDocument();
        expect(age).toBeInTheDocument();
    });
});
