import styled from "styled-components";

export const BaseForm = styled.form`
  padding: 10px;
  border: 0;
  border-radius: 5px;

  .input-group,
  .checkbox-group {
    margin-bottom: 15px;
  }

  .input-group {
    input {
      border-radius: 5px;
      width: 100%;
      box-sizing: border-box;
      padding: 5px 10px;
      border: 1px solid #000;
    }

    label {
      display: block;
      &.checkbox-label {
        display: inline;
      }
    }

    p {
      color: #f00;
    }
  }

  p {
    margin: 0;
  }

  a,
  button {
    display: block;
  }

  a {
    margin: 20px 0;
    text-align: center;
  }

  button {
    padding: 10px 20px;
    font-weight: bold;
    margin: 0 auto;
  }
`;
