import Header from "@/components/Header";
import "./styles.css";
import Image from "next/image";
import cover from "@/assets/cover.jpg";
import Avatar from "@/components/Avatar";
import { PiPencilLine } from "react-icons/pi";
import Post from "@/components/Post";

export default function Feed() {
    return (
        <div>
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
                                <PiPencilLine className="button-edit-profile-icon"/> Editar seu perfil
                            </button>
                        </footer>
                    </div>
                </aside>
                <main className="main">
                    <Post post={{} as any}/>
                    <Post post={{} as any}/>
                    <Post post={{} as any}/>
                </main>
            </div>
        </div>
    );
}
