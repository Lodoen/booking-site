import * as S from "./index.styles";
export default function Feedback({ message = "", status = "" }) {
  if (!message || typeof message !== "string") {
    return null;
  }

  const className = status ? `feedback ${status}` : "feedback";

  return (
    <S.FeedbackContainer>
      <div className={className}>{message.toString()}</div>
    </S.FeedbackContainer>
  );
}
