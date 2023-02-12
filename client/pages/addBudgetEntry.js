import React from "react";

const AddBudgetEntry = () => {
  return (
    <div className="bg-slate flex items-center justify-center mt-20 py-16">
      <div className="w-full max-w-sm">
        <form className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-teal-500">
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
      </div>
    </div>
  );
};

export default AddBudgetEntry;
