import React from "react";

export default function TransactionItem({ entry }) {
  const isIncome = entry.type === "income";
  const amountColor = isIncome ? "text-green-800" : "text-red-800";
  const sign = isIncome ? "+" : "-";

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 hover:bg-zinc-100 rounded-xl p-2">
      <div>
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            isIncome ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {entry.type}
        </span>
        <span className="ml-2 text-xlg font-medium text-gray-900">
          {entry.name}
        </span>
      </div>
      <div className={`text-xlg font-medium ${amountColor}`}>
        {sign} ${entry.amount}
      </div>
    </div>
  );
}
