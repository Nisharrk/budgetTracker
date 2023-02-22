//import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

import DeleteBudgetButton from "./DeleteBudgetEntry";

const ExpenseEntries = () => {
  const [budgetEntry, setBudgetEntry] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget")
        .then((res) => res.json())
        .then((data) => setBudgetEntry(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="bg-teal-100 rounded-2xl mt-2 ml-2 mb-2 shadow-md">
      <p className="text-xl text-slate-600 text-center p-4 bg-teal-300 rounded-xl font-semibold">
        Expenses
      </p>
      {budgetEntry &&
        budgetEntry
          .filter((entry) => entry.type === "expense")
          .map((item, index) => (
            <div key={index} className="border-b m-1">
              <div
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? -1 : index)
                }
                className="flex items-center justify-between text-slate-600 cursor-pointer hover:bg-teal-300 hover:text-white p-4 rounded-xl"
              >
                <div className="w-1/2 border-r border-white">{item.name}</div>
                <div className="w-1/2 text-right pl-3">${item.amount}</div>
              </div>
              {selectedIndex === index && (
                <div className="flex p-4">
                  <div className="w-1/2 text-sm px-2 text-gray-700">
                    Notes: {item.notes}
                  </div>
                  <div className="w-1/2">
                    <DeleteBudgetButton id={item._id} />
                  </div>
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default ExpenseEntries;
