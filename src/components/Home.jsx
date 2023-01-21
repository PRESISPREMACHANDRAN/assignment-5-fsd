import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const Home = () => {
const [Employeelist, setEmployeelist] = useState([]);
const getData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      setEmployeelist(response.data);
    })
    .catch();
};
useEffect(() => {
  getData();
}, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Navbar/>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  {Employeelist.map((value,index)=>{
    return(
      <tbody>
      <tr>
        <th scope="row">{value.id}</th>
        <td>{value.name}</td>
        <td>{value.email}</td>
      </tr>
      </tbody>
    )
  })}



</table>
            </div>
          </div>
        </div>
      </div>
    </div>

 
 
  )
}

export default Home