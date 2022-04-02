import { createContext, useState } from "react";
import "../styles/globals.css";
const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
export { UserContext };
