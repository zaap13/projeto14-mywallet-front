import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 25px;

  span {
    display: flex;
    gap: 15px;
  }
`;

export const WalletBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 10px;
  width: 100%;
  height: 100%;

  background: #ffffff;
  border-radius: 5px;
`;

export const Item = styled.span`
  display: flex;
  flex-direction: row;
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  gap: 10px;

  p {
    color: #c6c6c6;
  }

  h2 {
    color: #000000;
    width: 100%;
  }

  h3 {
    text-align: right;

    color: ${(props) => (props.type === "inflow" ? "#03AC00" : "#c70000")};
  }
`;

export const Logo = styled.h1`
  width: 147px;
  height: 50px;
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 50px;

  color: #ffffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 13px;
  input {
    width: 326px;
    height: 58px;

    background: #ffffff;
    border-radius: 5px;
  }
  button {
    width: 326px;
    height: 46px;

    background: #a328d6;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #ffffff;
  }
`;

export const Text = styled.p`
  height: 18px;
  left: 92px;
  top: 457px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;

  color: #ffffff;
`;

export const Title = styled.h2`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;

  color: #ffffff;
`;

export const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  width: 155px;
  height: 114px;

  background: #a328d6;
  border-radius: 5px;

  font-weight: 700;
  font-size: 20px;
  line-height: 20px;

  color: #ffffff;
`;
