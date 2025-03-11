import { useContext } from "react";
import { EventContext } from "../contexts/eventContext";

const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};

export default useEvent;
