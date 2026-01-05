import { useState } from "react";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email && password) {
      setMessage(`Login feito com sucesso para ${email}`);
      setEmail("");
      setPassword("");
    } else {
      setMessage("Por favor, preencha todos os campos");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Login Form
      </h3>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;
