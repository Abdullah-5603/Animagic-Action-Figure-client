import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toysData, setToysData] = useState([])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState('')
    useEffect(() => {
        fetch(`http://localhost:3000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setToysData(data))
    }, [user, toysData])

    const handleDelete = _id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/myToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        console.log(data)
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const handleUpdate = (_id) => {
        setId(_id)
        setOpen(true);
      };
      
      const handleSubmitUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
      
        fetch(`http://localhost:3000/myToys/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ price, quantity, description }),
        })
          .then(res => res.json())
          .then(data => {
            if (data.result.modifiedCount > 0) {
              Swal.fire({
                icon: 'success',
                title: 'Haha....',
                text: 'Information updated successfully!',
              });
              const remaining = toysData.filter((dt) => dt._id !== id);

              setToysData(remaining);
            }
            // console.log(data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      
        setOpen(false);
      };
      
    return (
        <div className="my-10 px-10 flex flex-col">
            {open && (
                <>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-center">Update Your Toy Information</h3>
                            <form onSubmit={handleSubmitUpdate}>
                                <div className="form-control my-3 space-y-2">
                                    <label htmlFor="" className='font-bold'>Price</label>
                                    <input className='focus:outline-none input input-bordered' type="text" name="price" id="" placeholder='Price' />
                                </div>
                                <div className="form-control space-y-2 my-3">
                                    <label htmlFor="" className='font-bold'>Available Quantity</label>
                                    <input className='focus:outline-none input input-bordered' type="text" name="quantity" id="" placeholder='Available Quantity' />
                                </div>
                                <div className='form-control space-y-2 my-3'>
                                    <label htmlFor="" className='font-bold'>Description</label>
                                    <textarea placeholder="Description" name='description' className="focus:outline-none textarea textarea-bordered textarea-md w-full" ></textarea>
                                </div>
                                <div className="modal-action">
                                    <button type='submit' htmlFor="my-modal-6" className="btn">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}

            <p className="text-3xl font-bold text-center mb-10">My Toys</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Toy Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toysData.map((toyData) => (
                            <tr key={toyData._id} className="hover:bg-gray-100">
                                <th>{toyData?.sellerName}</th>
                                <td>{toyData?.toyName}</td>
                                <td>{toyData?.category?.join(', ')}</td>
                                <td>$ {toyData?.price}</td>
                                <td>{toyData?.quantity} Pice</td>
                                <td className='flex space-x-6'>
                                <label htmlFor="my-modal-6" onClick={() => handleUpdate(toyData._id)} className='bg-[#c6b386] p-2 rounded-lg'><FaPencilAlt /></label>
                                    <div onClick={() => handleDelete(toyData._id)} className='bg-[#c6b386] p-2 rounded-lg'><FaTrashAlt /></div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;