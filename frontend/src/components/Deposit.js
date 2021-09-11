import React from "react";

export function Deposit({ depositTokens}) {
  return (
    <div>
      <h4>Deposit</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const address = formData.get("tokenAddress");
          const amount = formData.get("tokenAmount");

          if (address && amount) {
            depositTokens(address, amount);
          }
        }}
      >
        <div className="form-group">
          <label>Address of token</label>
          <input
            className="form-control"
            type="text"
            name="address"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input className="form-control" type="text" name="to" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Deposit" />
        </div>
      </form>
    </div>
  );
}
