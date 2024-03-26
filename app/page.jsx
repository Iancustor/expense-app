import Header from "@/components/Header";
import { PieChart, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-between bg-indigo-900 text-white px-8 py-4 w-80 rounded-md">
          <div>
            <h2>Total Balance</h2>
            <p>$0.000</p>
          </div>
          <div className="flex  items-center flex-col gap-1">
            <span className="flex">
              <PieChart className=" font-semibold text-3xl" />
            </span>
            <h2>Savings</h2>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <Link
              href="income"
              className="bg-purple-800 flex gap-3 py-4 px-8 text-white rounded-md"
            >
              <div className="flex flex-col gap-3">
                <h2>Income</h2>
                <p>$50,000</p>
              </div>
              <span>
                <Plus />
              </span>
            </Link>
            <Link
              href="expense"
              className="bg-amber-600 flex gap-3 py-4 px-8 text-white rounded-md"
            >
              <div className="flex flex-col gap-3">
                <h2>Expense</h2>
                <p>$20,000</p>
              </div>
              <span>
                <Plus />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="">
            <h2></h2>
          </div>
          <div>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
