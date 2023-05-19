import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
  const toysData = useLoaderData();
  const [showBtn, setShowBtn] = useState(false);
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    if (toysData.length > 20) {
      const limitedData = toysData.slice(0, 20);
      setLimit(limitedData);
      setShowBtn(true);
    }
  }, [toysData]);

  const handleClick = () => {
    setLimit(toysData);
    setShowBtn(false);
  };

  return (
    <div className="my-10 px-10 flex flex-col">
      <p className="text-3xl font-bold text-center mb-10">All Toys Here</p>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Toy Details</th>
            </tr>
          </thead>
          <tbody>
            {toysData.length > 20
              ? limit.map((toyData) => (
                  <tr key={toyData._id} className="hover:bg-gray-100">
                    <th>{toyData?.sellerName}</th>
                    <td>{toyData?.toyName}</td>
                    <td>{toyData?.category?.join(', ')}</td>
                    <td>$ {toyData?.price}</td>
                    <td>{toyData?.quantity} Pice</td>
                    <td>
                    <Link to={`/toyDetails/${toyData._id}`}>
                        <button className="btn">view details</button>
                      </Link>
                    </td>
                  </tr>
                ))
              : toysData.map((toyData) => (
                  <tr key={toyData._id} className="hover:bg-gray-100">
                    <th>{toyData?.sellerName}</th>
                    <td>{toyData?.toyName}</td>
                    <td>{toyData.category.join(', ')}</td>
                    <td>$ {toyData?.price}</td>
                    <td>{toyData?.quantity} Pice</td>
                    <td>
                      <Link to={`/toyDetails/${toyData._id}`}>
                        <button className="btn">view details</button>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {showBtn && (
        <button onClick={handleClick} className="btn mx-auto my-5">
          Show More
        </button>
      )}
    </div>
  );
};

export default AllToys;
