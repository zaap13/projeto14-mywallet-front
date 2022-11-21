import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import {
  Main,
  WalletBox,
  Item,
  Title,
  ButtonBox,
} from "../../assets/styles/styles";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { RiLogoutBoxRLine as LogOut } from "react-icons/ri";
import { FiPlusCircle as Plus, FiMinusCircle as Minus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Wallet() {
  const { user } = useContext(AuthContext);
  const [wallet, setWallet] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);
  const [flow, setFlow] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/wallet`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setWallet(res.data.itens);
        setName(res.data.user.name);

        const inflows = res.data.itens
          .filter((i) => i.type === "inflow")
          .map((j) => Number(j.value));
        const outflows = res.data.itens
          .filter((i) => i.type === "outflow")
          .map((j) => Number(j.value));

        let totalIn = 0;
        let totalOut = 0;

        for (let index = 0; index < inflows.length; index++) {
          totalIn += inflows[index];
        }
        for (let index = 0; index < outflows.length; index++) {
          totalOut += outflows[index];
        }
        const totalFlow = totalIn - totalOut;
        setTotal(totalFlow.toFixed(2));
        if (totalFlow >= 0) {
          setFlow("inflow");
        } else {
          setFlow("outflow");
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [user]);

  return (
    <Main>
      <Title>
        <p>Olá, {name}</p>{" "}
        <LogOut onClick={() => window.location.reload(false)} />
      </Title>
      <WalletBox>
        {wallet.map((p) => (
          <Item type={p.type} key={p._id}>
            <p>{p.date}</p> <h2>{p.title}</h2>{" "}
            <h3>{Number(p.value).toFixed(2)}</h3>
          </Item>
        ))}
        <br />
        <Item type={flow}>
          Saldo <h2 />
          <h3>{total}</h3>
        </Item>
      </WalletBox>
      <span>
        <ButtonBox onClick={() => navigate("/inflow")}>
          <Plus />
          Nova entrada
        </ButtonBox>
        <ButtonBox onClick={() => navigate("/outflow")}>
          <Minus />
          Nova saída
        </ButtonBox>
      </span>
    </Main>
  );
}
