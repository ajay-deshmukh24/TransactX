import express from "express";
import { PrismaClient } from "@repo/db/client";

const app = express();
const PORT = 3003;

const client = new PrismaClient();

app.use(express.json());

app.post("/hdfcWebhhok", async (req, res) => {
  // TODO: Add zod validation here?
  //TODO: HDFC bank should ideally send us a secret so we know this is sent by them

  const paymentinformation: {
    token: string;
    userId: string;
    amount: string;
  } = {
    token: req.body.token,
    userId: req.body.user_identifier,
    amount: req.body.amount,
  };

  try {
    // now update balance in db
    await client.$transaction([
      client.balance.update({
        where: {
          userId: Number(paymentinformation.userId),
        },
        data: {
          amount: {
            increment: Number(paymentinformation.amount),
          },
        },
      }),

      client.onRampTransaction.update({
        where: {
          token: paymentinformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.status(200).json({
      message: "Captured",
    });
  } catch (error) {
    console.log(error);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(PORT, () =>
  console.log(`bank-webhook is listening on port ${PORT}`)
);
