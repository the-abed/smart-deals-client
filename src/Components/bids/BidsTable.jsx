import React from 'react';

const BidsTable = ({ bid, index }) => {
  const {
    buyer_name,
    buyer_email,
    buyer_image,
    bid_price,
    status
  } = bid;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={buyer_image} alt={buyer_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{buyer_name}</div>
          </div>
        </div>
      </td>
      <td> {buyer_email} </td>
      <td>{bid_price}</td>
      <td>{status}</td>
    </tr>
  );
};

export default BidsTable;
