import { useState } from "react";

export default function useFeedback() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const setFeedback = (message = "", type = "") => {
    setFeedbackMessage(message);
    setFeedbackType(type);
  };

  return {
    feedbackMessage,
    feedbackType,
    setFeedback,
  };
}
