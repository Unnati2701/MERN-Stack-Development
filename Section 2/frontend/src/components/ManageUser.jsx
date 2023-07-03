import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const ManageUser = () => {

    const [userList, setUserList] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setUserList(data);
    };

    useEffect(() => {
        fetchUserData();
    }, [])

    const deleteUser = async (id) => {
      console.log(id);
      const res = await fetchUserData('http://localhost:5000/user/delete'+id,{
        method: 'DELETE'
      });

      console.log(res.status);

      if(res.status === 200) {
        toast.success("User deleted")
        fetchUserData(); 
      }
    }

    const displayUsers = () => {
      return(
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2} className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map((user) => (<tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className='btn btn-danger' onClick={e => deleteUser(user._id)}>Delete</button>
                </td>
                <td>
                  <button className='btn btn-primary'>Edit</button>
                </td>
              </tr>))
            }
          </tbody>
        </table>
      )
    }

  return (
    <div>
      <p className='display-4 text-center fw-bold'>Manage User Data</p>
      <section className='mt-5'>
        <div className='conatiner'>
          {displayUsers()}
        </div>
      </section>
    </div>
  )
}

export default ManageUser