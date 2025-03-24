"use client";
import { FormEvent, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom";
import ButtonCustom from "../ButtonCustom";
import axios from "axios";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type PostProps = {
    post: {
        id: string;
        author: Author;
        publishedAt: Date;
        content: string;
    };
};

export default function Post({ post }: PostProps) {
    const [newComment, setNewComment] = useState<string>("");

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment);

        const comment = {
            comment: newComment,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Wesley Antunes",
                role: "System Development Student",
                avatarUrl: "https://github.com/aynhol.png",
            },
        };

        await axios.patch(`http://localhost:5500/posts/${post.id}`, {
            "comments": comment,
        });
    }

    const dateFormat = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={post.author.avatarUrl} hasBorder />
                    <div className="author-info">
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time>{dateFormat}</time>
            </header>
            <div className="content">
                <p>{post.content}</p>
            </div>
            <form className="form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>
                <TextareaCustom
                    message={newComment}
                    setMessage={setNewComment}
                    title="Deixe um comentário..."
                />
                <footer>
                    <ButtonCustom />
                </footer>
            </form>
        </article>
    );
}
