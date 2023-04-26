import { useContext } from "react";
import { MyContext } from "./TeamLead";
const Junior = () => {
  const context = useContext(MyContext);
  return (
    <>
      <h3>Junior</h3>
      <p>Message: {context}</p>
    </>
  );
};
export default Junior;
