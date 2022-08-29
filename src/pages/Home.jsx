import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
import Profile from "../components/Home/Profile";

function Home() {
  const [list, setList] = useState([])
  const params = useParams()

  useEffect(() => {
    getUser(params.user)
  }, [])
  

  function getUser(user) {
    axios({
      url: user,
      method: 'get'
    }).then(response => {
      setList(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      {
        list.length > 0
        ? list.map((pet) => <Profile key={pet.name} pet={pet}/>)
        : <h1>沒有資料</h1>
      }
    </div>
  )
}

export default Home