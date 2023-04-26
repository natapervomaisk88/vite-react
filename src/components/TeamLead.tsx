import { useState, createContext } from "react";
import Senior from "./Senior";

const MyContext = createContext("hello from TeamLead");

const TeamLead = () => {
  const [task, setTask] = useState("");
  return (
    <>
      <MyContext.Provider value={task}>
        <Senior />
        <p>{task}</p>
        <input
          type="text"
          value={task}
          onChange={(ev) => {
            setTask(ev.target.value);
          }}
        />
      </MyContext.Provider>
    </>
  );
};
export default TeamLead;
export { MyContext };
