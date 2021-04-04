import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext({
  user: null,
});

export const useAuth = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromLocalstorage() {
      const token = localStorage.getItem(token);
      if (token) {
        // Call API, check if token is still valid
        const user = { username: "Admin", id: "1" }; // Example api result
        if (user) setUser(user);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    loadUserFromLocalstorage();
  }, []);

  const login = async ({ email, password }) => {
    // Call API with username and password
    // Set token
    // setUser
    // throw error if not possible
    setUser({ name: "Admin", id: "1" });
  };

  const logout = async ({ email, password }) => {
    // remove token from localstorage
    setUser(null);
    window.location.href = "/";
  };

  return (
    <DataContext.Provider
      value={{
        isAuthenticated: !!user,
        loading,
        user,
        login,
        logout,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
