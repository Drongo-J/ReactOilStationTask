import React from 'react';

function Buy({ totalPrice }) {
  return (
    <fieldset className="buy-container">
      <legend>Buy</legend>
      <h2>Total Price: ${totalPrice}</h2>
      <button>Buy</button>
    </fieldset>
  );
}

export default Buy;
