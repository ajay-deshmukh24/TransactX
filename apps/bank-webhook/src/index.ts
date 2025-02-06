import express from "express";
const app = express();

app.post("/hdfcWebhhok", (req, res) => {
  // TODO: Add zod validation here?

  const paymentinformation = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  // now update balance in db
});
