import React from "react";
import { Route, Routes } from 'react-router-dom'

const App =()=>{
  return (
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/recipe" element= {<RecipeDetail/>} />
    </Routes>
  );
};

export default App;