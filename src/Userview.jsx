import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  console.log(params);

  const [searchParams, setsearchParams] = useSearchParams();
  console.log(...searchParams);

  const [userData,setUserData]=useState({})
  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let user = await axios.get(
        `https://62cb8d8d3e924a01286858d1.mockapi.io/users/${params.id}`
      );
      setUserData(user.data)
    } catch (error) {}
  };

  return (
    <>
      <h2>{userData.name}</h2>
      <h3>{userData.position}</h3>
      <h3>{userData.office}</h3>
      <h3>{userData.age}</h3>
      <h3>{userData.startDate}</h3>
      <h3>{userData.salary}</h3>
    </>
  );
}

export default Userview;
