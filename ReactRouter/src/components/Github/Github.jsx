import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  console.log(data);

  return (
    
    <div className=" bg-black text-white  w-full h-screen flex items-center flex-wrap flex-col">
      
      <div class="area" className=" z-10 ">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <img className=" z-20  pt-9 pb-9 w-52 rounded-md shadow-lg" src={data.avatar_url} alt="git pic" />
      <div className=" z-20 space-y-3 bg-gray-950 p-4 rounded-lg">
      <p className=" font-semibold text-xl">Github Name: {data.name}</p>
      <p className=" font-semibold text-xl">Github followers: {data.followers} </p>
      <p className=" font-semibold text-xl">Github repositories: {data.public_repos}</p>
      </div>
    </div>
  );
}

export default Github;

export const gitInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Ganesh-Sharmaz");
  return response.json();
};
