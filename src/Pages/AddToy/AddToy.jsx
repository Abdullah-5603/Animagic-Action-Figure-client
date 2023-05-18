import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const toyInfo = {photo, toyName, sellerName, email, category, price, ratings, quantity, description}

        fetch('http://localhost:3000/allToys',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(toyInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <form onSubmit={handleSubmit}  className='p-10 my-5 w-4/6 mx-auto border-2 shadow-2xl'>
            <p className='mb-7 text-3xl font-bold text-center'>
                Add A Toy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Picture URL of the Toy</span>
                    </label>
                    <input type="text" name='photo' placeholder="Input picture URL of the Toy " className="input input-bordered focus:outline-none" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Toy Name</span>
                    </label>
                    <input type="text" placeholder='Input Name' name="toyName" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Seller Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name='sellerName' placeholder='Input Seller Name' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Seller Email</span>
                    </label>
                    <input type="email" defaultValue={user.email} placeholder='Input Seller Email' name="email" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Sub-category</span>
                    </label>
                    <input type="text" name='category' placeholder='What the fuck i should put here ??' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="text" name='price' placeholder='Price' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Rating</span>
                    </label>
                    <input type="text" name='ratings' placeholder='Ratings' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Available quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder='Quantity' className="input input-bordered focus:outline-none" />
                </div>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold">Detail description</span>
                </label>
                <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full focus:outline-none " ></textarea>
            </div>
            <div>

            </div>
            <button className='btn w-full my-5 font-bold'>Add Toy</button>
        </form>
    );
};

export default AddToy;