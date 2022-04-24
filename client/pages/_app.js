import { createContext, useState } from "react";
import "../styles/globals.css";
const UserContext = createContext();
const TaskContext = createContext();
const TagContext = createContext();

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);
  const [taskData, setTaskData] = useState(null);
  const [tagData, setTagData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <TaskContext.Provider value={{ taskData, setTaskData }}>
        <TagContext.Provider value={{ tagData, setTagData }}>
          <Component {...pageProps} />
        </TagContext.Provider>
      </TaskContext.Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
export { UserContext, TaskContext, TagContext };
