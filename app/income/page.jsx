"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function page() {
  const [data, setData] = useState();
  console.log(data);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    try {
      const res = await fetch(`${baseUrl}/api/amount`, {
        method: "POST",
        headers: {
          "ContentType": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
    setData(data);
    // console.log(data);
    reset();
  }

  return (
    <div className="flex flex-col items-center justify-center  py-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="bg-neutral-200 py-12  px-8 h-96 w-80 flex flex-col   gap-8 rounded-md"
      >
        <h2 className="font-bold text-2xl">Income Form</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-bold">
            Amount
          </label>
          <input
            {...register("amount", { required: true })}
            type="number"
            id="amount"
            className="px-3 py-2 rounded-sm"
            placeholder="Enter amount"
          />
          {errors.amount && <p className="text-red-500">Amount Required</p>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="font-bold">
            Category
          </label>
          <input
            {...register("category", { required: true })}
            type="text"
            className=" px-3 py-2 rounded-sm"
            placeholder="Enter income category"
          />
          {errors.category && <p className="text-red-500">Category Required</p>}
        </div>
        <button
          type="submit"
          className="bg-neutral-950 text-neutral-100 py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default page;
