import {React} from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import LeaderBoard from "./LeaderBoard";
import "../styles/home.css"
const Home = () => {
  const [value,setValue]=useState(0)
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const navigatePage=(e)=>{
    e.preventDefault();
    navigate("/LeaderBoard")
  }
  const increase=(e)=>{
    e.preventDefault()
    setValue(value+1)
  }
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome to SUD-Life <br />
        {user && user.email}
      </div>
      <div className="increseFeature">
        {value}
      <Button id="increaseButton" variant="primary" onClick={increase}>
          press to increase
        </Button>
      </div>
      <div className="d-grid gap-2">

        <Button id="logoutButton" variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        <Button id="leaderBoardButton" onClick={navigatePage} >
          Leader Board
        </Button>
      </div>
    </>
  );
};

export default Home;
