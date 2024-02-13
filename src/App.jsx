import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


function App() {
  const coffees = useLoaderData();
  const [updatedCoffees,setUpdatedCoffees]= useState(coffees);

  return (
    <>
     
      <h1 className='text-5xl text-purple-600 text-center my-12'>Hot Hot Cool Coffee !! {coffees.length}</h1>
      <div className="mx-32 grid md:grid-cols-2 gap-8">
      {
          updatedCoffees.map(coffee=> <CoffeeCard key={coffee._id} updatedCoffees={updatedCoffees} setUpdatedCoffees={setUpdatedCoffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
      
    </>
  )
}

export default App
