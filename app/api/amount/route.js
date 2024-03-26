import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const { amount, category } = await request.json();
    const data = {
      amount,
      category,
    };
    const newAmount = await PrismaClient.amount.create({
      data,
    });
    return NextResponse.json(newAmount);
  } catch (error) {
    console.log(error);
  }
}
