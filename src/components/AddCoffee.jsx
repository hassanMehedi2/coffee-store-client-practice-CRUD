import Swal from 'sweetalert2'
import Navbar from './Navbar';
const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const  newCoffee = {coffeeName,quantity,supplier,taste,category,details,photo};
        console.log(newCoffee);

        // sending  data to server 
        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    title: 'success!',
                    text: 'Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Great'
                  })
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <form  onSubmit={handleAddCoffee} className="bg-[#F4F3F0] ">
                <h3 className="text-3xl font-bold p-6">Add A Coffee</h3>
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div className="md:flex gap-4 mx-10 mb-8">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Photo URl</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URl" className="input input-bordered w-full" required />
                    </div>
                </div>
                {/* form row  */}
                <div>
                    <input type="submit" className="btn btn-block bg-slate-800 mb-8 text-white"  value={'Add Coffee'}/>
                </div>
               
                
            </form>
        </div>
    );
};

export default AddCoffee;