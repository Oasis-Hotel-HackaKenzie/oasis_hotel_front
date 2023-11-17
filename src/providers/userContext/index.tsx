
import { createContext, useContext,useState } from "react";
// import {api} from "../../services/api"
import { useNavigate } from "react-router-dom";


// {} as IUserContext
export const UserContext = createContext();
export const UserProvider = ({children}) =>{
    const [user, setUser] = useState({});
    const userToken = localStorage.getItem("@Token");
    const userID = localStorage.getItem("@ID");//opcional
    const navigate = useNavigate();
    return (
        <UserContext.Provider
          value={{
            userToken,
            userID,
            user,
            setUser,
          }}
        >
          {children}
        </UserContext.Provider>
      );
    
    
    
    
    


}