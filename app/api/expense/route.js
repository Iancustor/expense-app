import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { expense, category } = await request.json();
    const data = {
      expense,
      category,
    };
    const newExpense = await PrismaClient.expense.create({
      data,
    });
    console.log(newExpense);
    return NextResponse.json(newExpense);
  } catch (error) {
    console.log(error);
  }
}
