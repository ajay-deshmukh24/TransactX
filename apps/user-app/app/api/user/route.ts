import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

export const GET = async () => {
  await client.user.create({
    data: {
      email: "asd",
      name: "adidas",
    },
  });

  return NextResponse.json({
    message: "hi there",
  });
};
