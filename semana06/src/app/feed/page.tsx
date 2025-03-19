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

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type Post = {
    id: number;
    author: Author;
    publishedAt: Date;
    content: string;
};

export default function Feed() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        loadPost();
    }, []);

    async function loadPost() {
        const response = await axios.get("http://localhost:5500/posts");
        setPosts(response.data);
    }

    async function handleCreatePost(event: FormEvent) {
        event.preventDefault();
        const post = {
            id: posts.length + 1,
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
                    <form onSubmit={handleCreatePost}>
                        <textarea
                            placeholder="O que você está pensando?"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button type="submit">Publicar</button>
                    </form>

                    {posts.map((item) => (
                        <Post post={item} key={item.id} />
                    ))}
                </main>
            </div>
        </div>
    );
}
