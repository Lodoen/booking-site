import styled from "styled-components";

export const FeedbackContainer = styled.div`
  .feedback {
    padding: 20px 15px;
    margin: 15px 0;
    border-radius: 5px;
    box-sizing: border-box;

    border: 1px solid #9cc9b6;
    background-color: #b3d6c8;
    color: #0b4129;

    &.info {
      border: 1px solid #9fc7fe;
      background-color: #b3d1ff;
      color: #063884;
    }

    &.warning {
      border: 1px solid #ffdb70;
      background-color: #ffeaa3;
      color: #614a05;
    }

    &.error {
      border: 1px solid #f1b1b8;
      background-color: #f2bfc3;
      color: #6f1b22;
    }
  }
`;
