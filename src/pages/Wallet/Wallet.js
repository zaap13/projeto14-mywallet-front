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

export default function Wallet() {
  const { user } = useContext(AuthContext);

  const [wallet, setWallet] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/wallet`, {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        setWallet(res.data.itens);
        setName(res.data.user.name);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, [user]);

  console.log(wallet);

  return (
    <Main>
      <Title>
        <p>Olá, {name}</p> <LogOut />
      </Title>
      <WalletBox>
        {wallet.map((p) => (
          <Item type={p.type}>
            <p>{p.date}</p> <h2>{p.title}</h2> <h3>{p.value}</h3>
          </Item>
        ))}
      </WalletBox>
      <span>
        <ButtonBox>
          <Plus />
          Nova entrada
        </ButtonBox>
        <ButtonBox>
          <Minus />
          Nova saída
        </ButtonBox>
      </span>
    </Main>
  );
}
