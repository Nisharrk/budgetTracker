import React, { useEffect, useState } from "react";

const Balance = () => {
  const [total, setTotal] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget/balance")
        .then((res) => res.json())
        .then((data) => {
          setTotal(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex bg-black rounded-2xl">
      <div className="w-1/3">
        <p className="text-4xl text-white p-4 font-semibold">Income:</p>
        <p className="text-3xl text-white pl-20 pb-4 pt-0 font-semibold">
          {total.income}
        </p>
      </div>
      <div className="w-1/3">
        <p className="text-4xl text-white p-4 font-semibold">Expenses:</p>
        <p className="text-3xl text-white pl-20 pb-4 pt-0 font-semibold">
          {total.expenses}
        </p>
      </div>
      <div className="w-1/3">
        <p className="text-4xl text-white p-4 font-semibold">Balance:</p>
        <p className="text-3xl text-white pl-20 pb-4 pt-0 font-semibold">
          {total.balance}
        </p>
      </div>
    </div>
  );
};

export default Balance;
