import React, { useState, useEffect } from "react";
import PostContainer from "./components/postContainer";
import MainContext from "./context/mainContext";
import PostContentButton from "./components/postContentButton";


export default function App() {

  const [userData, setUserData] = useState({
    displayName: "Ahmed",
    standard: "7b",
    location: "Hyd"
  })

  return (
    <>
      <MainContext.Provider value={{ ...userData, setUserData }}>

        <div>


          <PostContainer />


        </div>

      </MainContext.Provider>

    </>

  )



}