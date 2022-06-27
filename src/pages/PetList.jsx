import React from "react";
import Card from "../components/PetList/Card";

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
    <main>
      <Card pet={pet}/>
    </main>
  )
}

export default Home