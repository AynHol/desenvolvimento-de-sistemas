"use client";
import { FormEvent, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type Comment = {
    message: string;
    publishedAt: Date;
    like: number;
    author: Author;
};

type PostProps = {
    post: {
        author: Author;
        publishedAt: Date;
        content: string;
    };
};

export default function Post({ post }: PostProps) {
    const [newComment, setNewComment] = useState<string>("");

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        alert(newComment);
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
            <form className="content-form" onSubmit={handleCreateNewComment}>
                <strong>Deixe um comentário</strong>
                <textarea
                    placeholder="Deixe um comentário"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <footer>
                    <button>Publicar</button>
                </footer>
            </form>
        </article>
    );
}
