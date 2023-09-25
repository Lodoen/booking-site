import { useState } from "react";
import useVenue from "../../../../hooks/useVenue";
import * as S from "./index.styles";
import Alert from "../../../../components/Alert";
import useFeedback from "../../../../hooks/useFeedback";

export default function DeleteView({ id, setIsShowingDeleteView }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();
  const { remove } = useVenue();

  const removeVenue = async () => {
    try {
      setFeedback("Loading ...", "info");
      const { fetchedRemove } = await remove(id);

      if (fetchedRemove.ok) {
        setIsDeleted(true);
      } else {
        setFeedback(
          "We encountered error on deletion. Try again later.",
          "error",
        );
      }
    } catch (error) {
      console.log(error);
      setFeedback("We encountered error on deletion.", "error");
    }
  };

  return (
    <S.DeleteView>
      {isDeleted ? (
        <div>
          <h1>Venue deleted</h1>
          <Alert status="success">
            <span>Venue has been deleted.</span>
          </Alert>
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
          {feedbackMessage && (
            <Alert status={feedbackType}>
              <span>{feedbackMessage}</span>
            </Alert>
          )}
        </div>
      )}
    </S.DeleteView>
  );
}
