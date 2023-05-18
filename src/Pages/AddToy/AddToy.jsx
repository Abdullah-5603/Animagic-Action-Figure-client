import React from 'react';

const AddToy = () => {
    return (

        <div className='p-10 my-5'>
            <p className='my-5 text-3xl font-bold text-center'>
                Add A Toy
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture URL of the Toy</span>
                    </label>
                    <input type="text" name='photo' placeholder="Input picture URL of the Toy " className="input input-bordered focus:outline-none" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input type="text" placeholder='Input Name' name="toyName" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' placeholder='Input Seller Name' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="email" placeholder='Input Seller Email' name="email" className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub-category</span>
                    </label>
                    <input type="text" name='category' placeholder='What the fuck i should put here ??' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name='price' placeholder='Price' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='ratings' placeholder='Ratings' className="input input-bordered focus:outline-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available quantity</span>
                    </label>
                    <input type="number" name='quantity' placeholder='Quantity' className="input input-bordered focus:outline-none" />
                </div>

            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Detail description</span>
                </label>
                <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-lg w-full focus:outline-none " ></textarea>
            </div>
        </div>



    );
};

export default AddToy;