import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, coffeeName, quantity, supplier, taste, category, details, photo } = coffee;
    
    const [updatedName,setUpdatedName]  =useState(coffeeName);
    
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { coffeeName, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // sending  data to server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    setUpdatedName(updatedCoffee.coffeeName)
                    Swal.fire({
                        title: 'success!',
                        text: 'updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Great'
                    })
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleUpdateCoffee} className="bg-[#F4F3F0] ">
                <h3 className="text-3xl font-bold p-6">Update Coffee : {updatedName}</h3>
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={coffeeName} placeholder="Coffee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available quantity" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URl</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URl" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div>
                    <input type="submit" className="btn btn-block bg-slate-800 mb-8 text-white" value={'Update'} />
                </div>


            </form>
        </div>
    );
};

export default UpdateCoffee;