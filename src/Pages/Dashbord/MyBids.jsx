import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { data } from "react-router";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setBids(data);
        });
    }
  }, [user]);

 const handleDeleteBid = (_id) => {
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
      fetch(`http://localhost:3000/bids/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("after delete", data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your bid has been deleted.", "success");

            // Instantly remove deleted bid from UI
            const remainingBids = bids.filter((bid) => bid._id !== _id);
            setBids(remainingBids);
          }
        })
        .catch((err) => console.error("Delete error:", err));
    }
  });
};


  return (
    <div>
      <h2 className="text-3xl text-center"> My Bids ({bids.length})</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <th>{index + 1}</th>
                  <td> {bid.product_name} </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {bid.buyer_email}
                    <br />
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">{bid.status} </button>
                  </th>
                  <th>
                    <button
                    onClick={() => handleDeleteBid(bid._id)}
                     className="btn btn-ghost btn-xs bg-amber-600">Remove Bid</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBids;
