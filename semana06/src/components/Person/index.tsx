import "./styles.css";

type PersonProps = {
    nome: string;
    idade: number;
}

export default function Person(props: PersonProps) {
    return (
        <div className="item">
            <strong>Nome: {props.nome}</strong>
            <span>Idade: {props.idade}</span>
        </div>
    )
}