import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

// import { PrismaClient } from "@repo/db/client";

// const client = new PrismaClient({
//   log: ["query", "info", "warn", "error"],
// });

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (session.user) {
      return NextResponse.json({
        user: session.user,
      });
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "You are not logged in",
      },
      {
        status: 403,
      }
    );
  }

  return NextResponse.json(
    {
      message: "You are not logged in",
    },
    {
      status: 403,
    }
  );
};
