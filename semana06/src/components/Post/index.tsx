"use client";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Avatar from "../Avatar";
import "./styles.css";
import { formatDistanceToNow, set } from "date-fns";
import { ptBR } from "date-fns/locale";
import TextareaCustom from "../TextareaCustom";
import ButtonCustom from "../ButtonCustom";
import axios from "axios";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type Comment = {
    id: string;
    author: Author;
    comment: string;
    publishedAt: Date;
};

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[];
};

type PostProps = {
    setPost: Dispatch<SetStateAction<Post[]>>;
    post: Post;
};

export default function Post({ post, setPost }: PostProps) {
    const [newComment, setNewComment] = useState<string>("");

    async function loadPost() {
        const response = await axios.get(
            `http://localhost:5500/posts/${post.id}`
        );

        // Atualiza posição especifica do estado
        setPost((prev: Post[]) =>
            prev.map((atual) => (atual.id == post.id ? response.data : atual))
        );
    }

    async function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        // Cria novo comentário
        const comment = {
            comment: newComment,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Wesley Antunes",
                role: "System Development Student",
                avatarUrl: "https://github.com/aynhol.png",
            },
        };

        // Permite mais de 1 comentário por post
        const comments = post.comments?.length
            ? [...post.comments, comment]
            : [comment];

        await axios.patch(`http://localhost:5500/posts/${post.id}`, {
            comments: comments,
        });

        setNewComment("");
    }

    // Formata a data para ("tanto tempo" atrás)
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
            <div className="comment">
            {/* mostra os comentários (&& = só faz se o 1 for true)*/}
            {post.comments?.length && post.comments.map(comment => (
                <p key={comment.comment}>{comment.comment}</p>
            ))}
            </div>
        </article>
    );
}
