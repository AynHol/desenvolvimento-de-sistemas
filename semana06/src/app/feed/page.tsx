"use client";
import Header from "@/components/Header";
import "./styles.css";
import Image from "next/image";
import cover from "@/assets/cover.jpg";
import Avatar from "@/components/Avatar";
import { PiPencilLine } from "react-icons/pi";
import Post from "@/components/Post";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import TextareaCustom from "@/components/TextareaCustom";
import ButtonCustom from "@/components/ButtonCustom";

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
    applauses: number;
};

type Post = {
    id: string;
    author: Author;
    publishedAt: Date;
    content: string;
    comments: Comment[];
};

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        loadPost();
    }, []);

    async function loadPost() {
        const response = await axios.get("http://localhost:5500/posts");

        // Ordena os post por +novo => +velho
        const postSort = response.data.sort(
            (a: any, b: any) =>
                new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
        );

        setPosts(postSort);
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault();
        const post = {
            id: String(posts.length + 1),
            content: content,
            publishedAt: new Date().toISOString(),
            author: {
                name: "Wesley Antunes",
                role: "System Development Student",
                avatarUrl: "https://github.com/aynhol.png",
            },
        };
        await axios.post("http://localhost:5500/posts", post);
        await loadPost();
        setContent("");
    }

    return (
        <div className="body">
            <Header />
            <div className="container">
                <aside className="sidebar">
                    <Image src={cover} alt="COVER" className="cover" />
                    <div className="profile">
                        <Avatar src="https://github.com/aynhol.png" hasBorder />
                        <strong>Wesley Antunes</strong>
                        <span>System Development Student</span>

                        <footer>
                            <button className="button-edit-profile">
                                <PiPencilLine className="button-edit-profile-icon" />{" "}
                                Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>
                <main className="main">
                    <form onSubmit={handleCreatePost} className="form-post">
                        <TextareaCustom
                            message={content}
                            setMessage={setContent}
                            title="O que você está pensando???"
                        />
                        <ButtonCustom />
                    </form>
                    {/* procura os posts */}
                    {posts.map((item) => (
                        <Post post={item} key={item.id} setPost={setPosts} />
                    ))}{" "}
                    a
                </main>
            </div>
        </div>
    );
}
