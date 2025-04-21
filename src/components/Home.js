import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  let texto = "";

  return (
    <div className="Container">
      <h1 className="Title">Login</h1>
      <form>
        <input
          type="text"
          id="email"
          value={email}
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Acessar</button>
      </form>

      <p className="SuccessText">{texto}</p>
    </div>
  );
}

export default Home;
