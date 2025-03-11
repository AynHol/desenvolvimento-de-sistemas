import Link from "next/link";
import "./home.css";
import Person from "@/components/Person";

export default function Home() {
  const lista = [
    {
      name: "Wesley",
      age: 20
    },
    {
      name: "Maria",
      age: 27
    },
    {
      name: "João",
      age: 40
    },
    {
      name: "Pedro",
      age: 37
    },
    {
      name: "Bia",
      age: 18
    }
  ]

  return (
    <div>
      <h1>hello world</h1>
      <h2>teste</h2>

      <Link href="/login">
        <button>LOGIN</button>
      </Link>

      <div className="container">
        {
          lista.map((item) => (
            <Person nome={item.name} idade={item.age} key={item.name} />
          ))
        }
      </div>
    </div>
  );
}
