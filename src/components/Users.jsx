
import { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users,setUsers]= useState(loadedUser);

    const   handleDelete = (_id)=>{
        // deleting from database 
        fetch(`http://localhost:5000/user/${_id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            if(data.deletedCount >0 ){
                alert('successfully deleted ')
                // removing deleted user and update the data 
                const remaining = users?.filter(user => user._id !== _id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <p>{loadedUser.length}</p>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map(user =>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td><button onClick={()=>handleDelete(user._id)} className='bg-red-600 text-white p-2'>Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;