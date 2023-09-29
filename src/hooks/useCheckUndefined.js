export default function useCheckUndefined() {
  const checkUndefined = (text = "") => {
    return text.toString().trim().length > 0
      ? text.toString().trim()
      : "Unknown";
  };

  return { checkUndefined };
}
