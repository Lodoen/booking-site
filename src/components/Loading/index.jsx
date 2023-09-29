import LoadingSpinner from "./LoadingSpinner";
import * as S from "./index.styles";
export default function Loading({ text = "" }) {
  return (
    <S.Loading>
      <LoadingSpinner />
      <h1>Loading {text}...</h1>
    </S.Loading>
  );
}
