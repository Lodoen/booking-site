export default function useLocalStorage(key) {
  const save = (state) => {
    localStorage.setItem(key, JSON.stringify(state));
  };

  const load = () => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return undefined;
    }
  };

  const remove = () => {
    localStorage.removeItem(key);
  };

  return {
    save,
    load,
    remove,
  };
}
