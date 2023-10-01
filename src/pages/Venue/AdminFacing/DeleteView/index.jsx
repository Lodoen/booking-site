import { useState } from "react";
import useVenue from "../../../../hooks/useVenue";
import * as S from "./index.styles";
import useFeedback from "../../../../hooks/useFeedback";
import Feedback from "../../../../components/Feedback";

export default function DeleteView({ id, setIsShowingDeleteView }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();
  const { remove } = useVenue();
  const [isDisabled, setIsDisabled] = useState(false);

  const removeVenue = async () => {
    try {
      setIsDisabled(true);
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
      setIsDisabled(false);
      setFeedback("We encountered error on deletion.", "error");
    }
  };

  return (
    <S.DeleteView>
      {isDeleted ? (
        <div>
          <h1>Venue deleted</h1>
          <Feedback message="Venue has been deleted." />
        </div>
      ) : (
        <div>
          <h1>Delete venue?</h1>
          <p>
            Are you sure you want to delete the venue? This action is
            irreversible.
          </p>
          <button
            onClick={() => removeVenue()}
            className="base-button"
            disabled={isDisabled}
          >
            I`m sure, delete the venue
          </button>
          <button
            onClick={() => setIsShowingDeleteView(false)}
            className="base-button"
            disabled={isDisabled}
          >
            No, back to venue page
          </button>
          <Feedback message={feedbackMessage} status={feedbackType} />
        </div>
      )}
    </S.DeleteView>
  );
}
