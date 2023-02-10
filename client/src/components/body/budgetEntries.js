//import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

const BudgetEntries = () => {
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
    <div className="px-4 py-4">
      {budgetEntry &&
        budgetEntry.map((item, index) => (
          <div key={index} className="border-b bg-teal-100 rounded-xl">
            <div
              onClick={() =>
                setSelectedIndex(selectedIndex === index ? -1 : index)
              }
              className="flex items-center justify-between cursor-pointer hover:bg-black hover:text-white p-4 rounded-xl"
            >
              <div className="w-1/2">{item.name}</div>
              <div className="w-1/2 text-right">
                {item.type === "expense" ? "-" : ""}${item.amount}
              </div>
            </div>
            {selectedIndex === index && (
              <div className="p-4">
                <p className="text-sm px-2 text-gray-700">
                  Notes: {item.notes}
                </p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
export default BudgetEntries;
