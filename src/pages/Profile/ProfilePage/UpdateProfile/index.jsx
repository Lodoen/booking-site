import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useProfile from "./useProfile";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import { UserContext } from "../../../../context/UserContext";
import * as S from "./index.styles";
import Alert from "../../../../components/Alert";
import useFeedback from "../../../../hooks/useFeedback";

const schema = yup
  .object({
    avatar: yup
      .string()
      .url("Must be a fully formed URL")
      .required("Enter an avatar URL"),
  })
  .required();

export default function UpdateProfile({
  previousProfileData,
  setDisplayedProfile,
}) {
  const { setUser } = useContext(UserContext);
  const { update } = useProfile();
  const { save } = useLocalStorage("user");
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      setFeedback("Loading ...", "info");
      const { fetchedUpdate, stringifiedUpdate } = await update(data);

      if (fetchedUpdate.ok) {
        setFeedback("Updated!");
        const updatedProfile = { ...previousProfileData, ...stringifiedUpdate };
        save(updatedProfile);
        setUser(updatedProfile);
        setDisplayedProfile((prevDisplayedProfile) => ({
          ...prevDisplayedProfile,
          ["avatar"]: stringifiedUpdate.avatar,
        }));
      } else {
        setFeedback(stringifiedUpdate.errors[0].message, "error");
      }
    } catch (error) {
      setFeedback("Encountered error on update", "error");
    }
  }

  return (
    <S.UpdateProfileForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="avatar">New avatar (URL):</label>
      <div className="input-group">
        <input {...register("avatar")} type="url" />
        <p>{errors.avatar?.message}</p>
      </div>
      <button type="submit" className="base-button">
        Update
      </button>
      {feedbackMessage && (
        <Alert status={feedbackType}>
          <span>{feedbackMessage}</span>
        </Alert>
      )}
    </S.UpdateProfileForm>
  );
}
