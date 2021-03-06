import React from "react";

export function Withdraw({ withdrawTokens}) {
  return (
    <div>
      <h4>Withdraw</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const address = formData.get("tokenAddress");
          const amount = formData.get("tokenAmount");

          if (address && amount) {
            withdrawTokens(address, amount);
          }
        }}
      >
        <div className="form-group">
          <label>Address of token</label>
          <input
            className="form-control"
            type="text"
            name="tokenAddress"
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input className="form-control" type="text" name="tokenAmount" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Withdraw" />
        </div>
      </form>
    </div>
  );
}
