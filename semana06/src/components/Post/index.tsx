import Avatar from "../Avatar";
import "./styles.css";

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
};

type Comment = {
    message: string;
    publisedAt: Date;
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

export default function Post(props: PostProps) {
    return (
        <article className="post">
            <header>
                <div className="author">
                    <Avatar src={"https://github.com/aynhol.png"} hasBorder />
                    <div className="author-info">
                        <strong>Wesley Antunes</strong>
                        <span>System Development Student</span>
                    </div>
                </div>
                <time>Públicado há 2 horas</time>
            </header>
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse non nisi enim. Nunc tincidunt, turpis et auctor
                    malesuada, orci diam rutrum quam, quis finibus ipsum eros
                    sed nulla. Donec et commodo purus, a efficitur velit.
                    Pellentesque id neque viverra, hendrerit magna id, feugiat
                    quam. Pellentesque semper vestibulum leo sit amet maximus.
                    Fusce eu magna nulla. Fusce dictum nulla vitae elit
                    sollicitudin dapibus. Etiam laoreet accumsan rutrum. Aliquam
                    euismod est id elementum rhoncus. Cras id enim eget mi
                    scelerisque interdum nec ut erat. Mauris sagittis
                    condimentum leo, a rutrum nunc facilisis sed. Praesent
                    facilisis lacinia est, in aliquam mi.
                </p>
            </div>
            <form className="content-form">
                <strong>Deixe um comentário</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button>Publicar</button>
                </footer>
            </form>
        </article>
    );
}
