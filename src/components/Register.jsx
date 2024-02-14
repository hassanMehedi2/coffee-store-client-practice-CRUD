
import { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
    const {createUser}= useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email);

        createUser(email,password)
        .then(res=>{
            console.log(res.user);
            // new user has been created 

            const createdAt = res.user.metadata.creationTime;
            const user = {email,createdAt};
            fetch('https://coffee-store-server-self.vercel.app/user',{
                method: "POST",
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data => {
                if(data.insertedId){
                    console.log('user created Successfully');
                }
            })
        })
        .catch(error => {
            console.log(error);
        })



    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;