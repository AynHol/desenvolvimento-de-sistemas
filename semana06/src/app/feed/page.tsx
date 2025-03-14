import Header from "@/components/Header";
import "./styles.css";
import Image from "next/image";
import cover from "@/assets/cover.jpg";
import Avatar from "@/components/Avatar";

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
                    </div>
                </aside>
                <main className="main">
                    
                </main>
            </div>
        </div>
    );
}
