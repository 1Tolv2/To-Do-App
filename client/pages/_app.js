import { createContext, useState } from "react";
import "../styles/globals.css";
const UserContext = createContext();
const TaskContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <TaskContext.Provider value={{ taskData, setTaskData }}>
        <Component {...pageProps} />
      </TaskContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
export { UserContext, TaskContext };
