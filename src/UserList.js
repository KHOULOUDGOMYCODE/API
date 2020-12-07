import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UserList=()=> {
  const [users, setUsers]=useState([])
  const getUsers = async () => {
  
 const userUsers = await axios.get("https://jsonplaceholder.typicode.com/users")
    
    setUsers(userUsers.data);  
  
  } 
;
  
  useEffect(()=>{
    
    getUsers()
},[])  
return (
    <div className='uses'>
     <ul className='user'>
       {users.map(user=>(
         <ul key={user.id}>
            <h3>Name</h3>{user.name}
            <h3> User name</h3>{user.username} 
            <h3>Email</h3> {user.email} 
            <h3>Address</h3><h4>Street:</h4>{user.address.street} 
            <h4>Suite</h4>{user.address.suite}  
            <h4>City</h4>{user.address.city} 
            <h4>ZipCode</h4> {user.address.zipcode} <h4>Lat:</h4>{user.address.geo.lat} 
            <h4>Lng</h4> {user.address.geo.lng} 
            <h3>Phone</h3>{user.phone} 
            <h3>Website</h3>{user.website} 
            <h3>Company</h3>
            <h4> Company Name</h4>{user.company.name} 
            <h4>Company CatchPhrase</h4> {user.company.catchPhrase}  
            <h4>Company bs</h4>{user.company.bs}</ul>
       ))}
     </ul>
    </div>
  );
}

export default UserList;