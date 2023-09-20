import styled from "styled-components";

export const OrderWrapper = styled.section`
  h3 {
    margin-top: 0;
  }
  & > div,
  form input,
  form button {
    border-radius: 10px;
  }

  & > div,
  form input {
    border: 1px solid #000;
    border-radius: 10px;
  }

  & > div {
    padding: 10px 20px;
  }

  p span,
  form label,
  form input {
    display: block;
  }

  form {
    input,
    button {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
    }
    button {
      margin: 20px 0;
    }
  }
`;
