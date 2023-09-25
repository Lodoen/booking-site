import * as S from "./index.styles";
export default function Alert({ children, status = "" }) {
  const className = status ? `alert  ${status}` : "alert";

  return (
    <S.Alert>
      <div className={className}>{children}</div>
    </S.Alert>
  );
}
