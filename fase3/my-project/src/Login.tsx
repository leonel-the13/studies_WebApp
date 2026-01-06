import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      alert("Login feito com sucesso");
      setEmail("");
      setPassoword("");
    } else {
      alert("Por favor, preencha todos os campos");
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="flex justify-center items-center font-bold text-3xl">
          Login
        </h2>
        <input
          type="email"
          value={email}
          placeholder="  email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-300 hover:bg-gray-200 rounded-lg p-2 m-3 shadow"
        />
        <input
          type="password"
          value={password}
          placeholder="  password"
          onChange={(e) => setPassoword(e.target.value)}
          className="bg-gray-300 hover:bg-gray-200 rounded-lg p-2 m-3 shadow"
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-lg bg-blue-600 text-gray-100 font-bold p-2 m-3 hover:bg-blue-500 shadow"
        >
          Login
        </button>
      </form>
    </div>
  );
}
