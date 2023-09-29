export default function useAuth() {
  const url = import.meta.env.VITE_API_URL + "/auth";

  const registerUser = async (userDetails) => {
    try {
      const fetchedRegister = await fetch(url + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      const stringifiedRegister = await fetchedRegister.json();
      return { fetchedRegister, stringifiedRegister };
    } catch (error) {
      return undefined;
    }
  };

  const login = async (credentials) => {
    try {
      const fetchedLogin = await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const stringifiedLogin = await fetchedLogin.json();
      return { fetchedLogin, stringifiedLogin };
    } catch (error) {
      return undefined;
    }
  };

  return {
    registerUser,
    login,
  };
}
