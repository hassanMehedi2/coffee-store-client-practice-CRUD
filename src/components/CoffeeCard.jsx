import React from 'react';

const CoffeeCard = ({ coffee }) => {
    const { coffeeName, quantity, supplier, taste, category, details, photo } = coffee;
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
                        <button className='btn bg-teal-300 '>Update</button>
                        <button className='btn bg-red-600 text-white'>Delete</button>
                    </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

