import axios from "axios";
import { useState, useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import DashboardLeftPane from "./DashboardLeftPane";
import DashboardRightPane from "./DashboardRightPane";

const Dashboard = () => {
  const [joke, setJoke] = useState("");
  const [userName, setUserName] = useState("");
  const {token, setToken} = useContext(UserContext);


  useEffect(() => {
        if (token == "") {
          let token_from_local_storage = localStorage.getItem("token");
          console.log("executed from useEffect")
          if(token_from_local_storage){
            console.log(token_from_local_storage);
            setToken(token_from_local_storage);
            
          }else{
            navigate("/login");
          }
        }
  }, [])

  useEffect(() => {
    getZuku();
  }, [token]);

  const navigate = useNavigate();
  function getZuku() {
    axios
      .get("https://instagram-express-app.vercel.app/api/auth/zuku", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setJoke(response.data.data.message)
        setUserName(response.data.data.user.name);
    })
      .catch((error) => console.log(error.response.data.message));
  }

  async function logout(){
    const response = await axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
        headers:{
            Authorization: `Bearer ${token}`,
        }
    }
    )
    setJoke("")
    setUserName("")
    setToken("")
    alert("User logged out Successfully")
    navigate("/login")
  }
  return (
    <div className="bg-black h-[100vh] w-[100vw]">
      <DashboardLeftPane/>
      <DashboardRightPane/>
      
      <h1>Welcome {userName}</h1>
      {joke && <p>{joke}</p>}
      <button onClick={logout}> Logout </button>
    </div>
  );
};

export default Dashboard;
