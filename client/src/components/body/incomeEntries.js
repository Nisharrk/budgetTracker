//import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

import DeleteBudgetEntry from "./DeleteBudgetEntry";

const IncomeEntries = () => {
  const [budgetEntry, setBudgetEntry] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget")
        .then((res) => res.json())
        .then((data) => setBudgetEntry(data));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="bg-teal-100 rounded-2xl mt-2 mr-2 mb-2 shadow-md">
      <p className="text-xl text-slate-600 text-center p-4 bg-teal-300 rounded-xl font-semibold">
        Income
      </p>
      {budgetEntry &&
        budgetEntry
          .filter((entry) => entry.type === "income")
          .map((item, index) => (
            <div key={index} className="border-b m-1">
              <div
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? -1 : index)
                }
                className="flex items-center justify-between text-slate-600 cursor-pointer hover:bg-teal-300 hover:text-white p-4 rounded-xl"
              >
                <div className="w-1/2 border-r border-white">{item.name}</div>
                <div className="w-1/2 text-right pl-3">
                  {item.type === "expense" ? "-" : ""}${item.amount}
                </div>
              </div>
              {selectedIndex === index && (
                <div className="p-4">
                  <div className="text-sm px-2 text-gray-700">
                    Notes: {item.notes}
                  </div>
                  {/* <DeleteBudgetEntry /> */}
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default IncomeEntries;
