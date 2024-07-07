import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import "./Home.css";
export default function Home() {

  const [user,setUser] = useState([]);
    useEffect(async ()=>{
        let users = await axios.get("http://localhost:8080/api/v1/databaseuser");
        console.log("12313",users.data.data);
        setUser(users.data.data);
    },[])


  return (
    <div>Home
    
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          
            {user.map((item,index,arr)=>{
              return (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              )
            })}
          
        </tbody>
      </table>

    </div>
  )
}
