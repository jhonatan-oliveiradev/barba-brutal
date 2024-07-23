import { useContext } from "react";
import UserContext from "../contexts/user-context";

const useUser = () => useContext(UserContext);
export default useUser;
