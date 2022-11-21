import AuthContext from "../../contexts/AuthContext";
import { useContext, useState } from "react";
import { Main, Title, Form } from "../../assets/styles/styles";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";

export default function InFlow() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleInFlow(e) {
    e.preventDefault();
    setLoading(true);
    console.log(user.token);

    axios
      .post(
        `${BASE_URL}/wallet`,
        {
          value,
          title,
          type: "inflow",
        },
        {
          headers: { authorization: `Bearer ${user.token}` },
        }
      )
      .then(() => {
        navigate("/wallet");
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response.data);
        setLoading(false);
      });
  }
  return (
    <Main>
      <Title>Nova Entrada</Title>
      <Form onSubmit={handleInFlow}>
        <input
          disabled={loading}
          type="number"
          placeholder="Valor"
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          disabled={loading}
          type="text"
          placeholder="Descrição"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          Salvar entrada
        </button>
      </Form>
    </Main>
  );
}
