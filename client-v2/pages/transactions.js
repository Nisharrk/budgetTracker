import React, { useEffect, useState } from "react";
import TransactionItem from "@/components/transactionItem";

export default function Transactions() {
  const [budgetEntry, setBudgetEntry] = useState(null);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget")
        .then((res) => res.json())
        .then((data) => {
          setBudgetEntry(data);
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex p-4">
      <div className="w-full pt-10 max-w-xl mx-auto">
        {budgetEntry &&
          budgetEntry.map((entry) => (
            <TransactionItem key={entry._id} entry={entry} />
          ))}
      </div>
    </div>
  );
}
