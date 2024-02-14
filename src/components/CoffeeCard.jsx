import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee ,setUpdatedCoffees,updatedCoffees }) => {
    const { _id, coffeeName, supplier, taste, details, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // deleting req for id ... 
                fetch(`https://coffee-store-server-self.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            //Updating the new existing coffee
                            const remaining = updatedCoffees?.filter(coffee => coffee._id !== _id);
                            setUpdatedCoffees(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl flex p-5">
                <figure><img className='w-36 h-52 object-cover' src={photo} alt="coffee" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{coffeeName}</h2>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='btn bg-green-400 '>View</button>
                    <Link to={`updateCoffee/${_id}`} className='btn bg-teal-300 '>Update</Link>

                    <button onClick={() => handleDelete(_id)} className='btn bg-red-600 text-white'>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

