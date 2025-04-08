import Image from "next/image";
import "./styles.css";
import logo from "@/assets/ignite-logo.svg";

export default function Header() {
    return (
        <header className="header">
            <Image src={logo} alt="LOGO" />
            <h2>Feed</h2>
        </header>
    );
}
