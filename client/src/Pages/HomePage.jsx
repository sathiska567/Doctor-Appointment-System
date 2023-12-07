import React, { useEffect, useState } from "react";
import LayoutHome from "../Components/LayoutHome";

const HomePage = () => {
  const [name , setName] = useState("")

  useEffect(() => {
    
  }, []);

  return (
    <>
     <LayoutHome>
        <h1>Home page</h1>
     </LayoutHome>
    
    </>
  );
};

export default HomePage;