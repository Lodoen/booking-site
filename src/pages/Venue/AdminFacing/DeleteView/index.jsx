import { useState } from "react";
import useVenue from "../../../../hooks/useVenue";
import * as S from "./index.styles";

export default function DeleteView({ id, setIsShowingDeleteView }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [showRemoveFeedback, setShowRemoveFeedback] = useState(false);
  const { remove } = useVenue();

  const removeVenue = async () => {
    try {
      setShowRemoveFeedback("Loading ...");
      const { fetchedRemove } = await remove(id);

      if (fetchedRemove.ok) {
        setIsDeleted(true);
      } else {
        setShowRemoveFeedback("We encountered error on remove");
      }
    } catch (error) {
      console.log(error);
      setShowRemoveFeedback("Encountered error on remove");
    }
  };

  return (
    <S.DeleteView>
      {isDeleted ? (
        <div>
          <h1>Venue deleted</h1>
        </div>
      ) : (
        <div>
          <h1>Delete venue?</h1>
          <p>
            Are you sure you want to delete the venue? This action is
            irreversible.
          </p>
          <button onClick={() => removeVenue()} className="base-button">
            I`m sure, delete the venue
          </button>
          <button
            onClick={() => setIsShowingDeleteView(false)}
            className="base-button"
          >
            No, back to venue page
          </button>
          {showRemoveFeedback && <div>{showRemoveFeedback}</div>}
        </div>
      )}
    </S.DeleteView>
  );
}
