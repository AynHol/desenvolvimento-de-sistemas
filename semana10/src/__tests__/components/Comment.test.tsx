import Comment from "@/components/Comment";
import { fireEvent, render, screen } from "@testing-library/react";

const mockComment = {
    id: "1",
    author: {
        name: "Joe Doe",
        role: "Test Dummy",
        avatarUrl: "joedoe.png",
    },
    comment: "hello world",
    publishedAt: new Date(),
    applauses: 3,
};

describe("Comment component", () => {
    it("Should render a comment", () => {
        render(<Comment comment={mockComment} handleDeleteComment={jest.fn()} handleApplauseComment={jest.fn()} />);

        expect(screen.getByText("Joe Doe")).toBeInTheDocument();
        expect(screen.getByText("hello world")).toBeInTheDocument();
        expect(screen.getByText("Aplaudir")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("Should check if handleApplause function was called with correct ID", () => {
        const handleApplause = jest.fn();
        render(
            <Comment comment={mockComment} handleDeleteComment={jest.fn()} handleApplauseComment={handleApplause} />
        );

        const applauseButton = screen.getByText("Aplaudir");
        fireEvent.click(applauseButton);

        expect(handleApplause).toHaveBeenCalled();
        expect(handleApplause).toHaveBeenCalledTimes(1);
        expect(handleApplause).toHaveBeenCalledWith(expect.any(Object), "1");
    });

    it("Should check if handleDelete function was called with correct ID", () => {
        const handleDelete = jest.fn();
        render(<Comment comment={mockComment} handleDeleteComment={handleDelete} handleApplauseComment={jest.fn()} />);

        const deleteButton = screen.getByTitle("Deletar comentário");
        fireEvent.click(deleteButton);

        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledTimes(1);
        expect(handleDelete).toHaveBeenCalledWith(expect.any(Object), "1");
    });
});
