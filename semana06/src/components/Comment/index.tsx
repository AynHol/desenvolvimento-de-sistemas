"use client";
import Avatar from "../Avatar";
import "./styles.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiHandsClappingDuotone } from "react-icons/pi";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type CommentProps = {
    handleApplauseComment: (event: any, id: string) => void;
    handleDeleteComment: (event: any, id: string) => void;
    comment: {
        id: string;
        author: Author;
        comment: string;
        publishedAt: Date;
        applauses: number;
    };
};

export default function Comment({ comment, handleDeleteComment, handleApplauseComment }: CommentProps) {
    const dateFormat = formatDistanceToNow(comment.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <div className="comment">
            <Avatar src={comment.author.avatarUrl} />
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div>
                            <strong>{comment.author.name}</strong>
                            <time>{dateFormat}</time>
                        </div>
                        <button title="Deletar comentário" onClick={(event) => handleDeleteComment(event, comment.id)}>
                            <RiDeleteBin6Line size={24} />
                        </button>
                    </header>
                    <p>{comment.comment}</p>
                </div>
                <footer>
                    <button onClick={(event) => handleApplauseComment(event, comment.id)}>
                        <PiHandsClappingDuotone size={18} />
                        Aplaudir <span>{comment.applauses}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}
