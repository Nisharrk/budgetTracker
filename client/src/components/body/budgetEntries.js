import React from "react";
import IncomeEntries from "./incomeEntries";
import ExpenseEntries from "./expenseEntries";

const BudgetEntries = () => {
  return (
    <div className="flex">
      <div className="w-1/2 float-left">
        <IncomeEntries />
      </div>
      <div className="w-1/2 float-right">
        <ExpenseEntries />
      </div>
    </div>
  );
};

export default BudgetEntries;
