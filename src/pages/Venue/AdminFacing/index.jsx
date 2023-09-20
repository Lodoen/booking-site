import { useState } from "react";
import DeleteView from "./DeleteView";
import AdminView from "./AdminView";
import * as S from "./index.styles";

export default function AdminFacing({ venue }) {
  const { id, ...restOfVenue } = venue;
  const [isShowingDeleteView, setIsShowingDeleteView] = useState(false);

  return (
    <S.AdminSection>
      {isShowingDeleteView ? (
        <DeleteView id={id} setIsShowingDeleteView={setIsShowingDeleteView} />
      ) : (
        <AdminView
          id={id}
          restOfVenue={restOfVenue}
          setIsShowingDeleteView={setIsShowingDeleteView}
        />
      )}
    </S.AdminSection>
  );
}
