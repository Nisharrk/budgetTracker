import React, { useState } from "react";
import Router from "next/router";

const AddBudgetEntry = () => {
  const [entry, setEntry] = useState({
    name: "",
    amount: 0,
    type: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const amount = formData.get("amount");
    const type = formData.get("type");
    const notes = formData.get("notes");
    setEntry({ name, amount: parseFloat(amount), type, notes });
    setMessage("Successfull");
    Router.push("/");

    try {
      const response = await fetch("http://localhost:8080/api/budget", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, amount, type, notes }),
      });
      if (!response.ok) {
        throw new Error("Failed to post budget entry");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate flex items-center justify-center mt-5">
      <div className="w-full max-w-sm">
        <form
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-teal-500"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-medium mb-4 font-semibold text-gray-700">
            Add new Budget Entry
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Name
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="w-full border border-gray-400 p-2 rounded-lg"
              type="number"
              id="amount"
              name="amount"
              step=".01"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="income"
                name="type"
                value="income"
                className="mr-2"
              />
              <label htmlFor="income">Income</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="expense"
                name="type"
                value="expense"
                className="mr-2"
              />
              <label htmlFor="expense">Expense</label>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              className="w-full border border-gray-400 p-2 rounded-lg"
              id="notes"
              name="notes"
              rows="4"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-black"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {message && <p className="text-teal-500 mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default AddBudgetEntry;
