import UserContext from "./UserContext";
import { useState, useEffect } from "react";


const UserProvider = (props) => {

    const tokenFromLocalStorage = localStorage.getItem("token");
    const [token, setToken] = useState(tokenFromLocalStorage || "");

    // Use useEffect to update localStorage whenever token changes
    useEffect(() => {
      localStorage.setItem("token", token);
    }, [token]);
    // useEffect(() => {
    //     localStorage.setItem("token", token)
    // }, [token])
    return(
        <UserContext.Provider value ={{token, setToken}}>
                { props.children }
        </UserContext.Provider>
    )
}

export default UserProvider;