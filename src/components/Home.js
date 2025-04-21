import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [text, setText] = useState(null);

  function submit(e) {
    e.preventDefault();
    if (email == "eduardo.lino@pucpr.br" && password == "123456") {
      setText("Acessado com sucesso!");
    } else {
      setText("Usuário ou senha incorretos!");
    }
  }

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
        <br />
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={submit}>Acessar</button>
      </form>

      <p className="SuccessText">{text}</p>
    </div>
  );
}

export default Home;
