import React from "react";
import Profile from "../components/Home/Profile";

const pet = {
  name: 'bubu',
  category: '小型雪納瑞犬',
  gender: 'female',
  age: {
    year: 12,
    month: 7,
  }
}

function Home() {
  return (
    <div>
      <Profile pet={pet}/>
    </div>
  )
}

export default Home