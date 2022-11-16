import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { Main, Form, Logo, Text } from "../../assets/styles/styles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [comfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${BASE_URL}/auth/sign-up`, {
        email,
        name,
        password,
        comfirmPassword,
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  }

  return (
    <Main>
      <Logo>MyWallet</Logo>

      <Form onSubmit={handleSignUp}>
        <input
          disabled={loading}
          type="text"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          disabled={loading}
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button disabled={loading} loading={loading} type="submit">
          Cadastrar
        </button>
      </Form>
      <Link to={`/`}>
        <Text>Já tem uma conta? Faça login!</Text>
      </Link>
    </Main>
  );
}
