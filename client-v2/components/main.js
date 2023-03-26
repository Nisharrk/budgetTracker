import React, { useState, useEffect } from "react";

export default function Main() {
  const [total, setTotal] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("http://localhost:8080/api/budget/balance")
        .then((res) => res.json())
        .then((data) => {
          setTotal(data);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="flex flex-col m-5 text-4xl text-white">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          <div className="flex flex-col m-10 text-4xl text-white">
            <div className="flex flex-row">
              <div className="mr-10 bg-teal-300 hover:text-black hover:shadow-2xl w-1/2 p-10 rounded-xl shadow2xl">
                Income:
                <p className="font-bold">{total.income}</p>
              </div>
              <div className="w-1/2 bg-teal-300 hover:text-black hover:shadow-2xl w-1/2 p-10 rounded-xl shadow-xl">
                Expense:
                <p className="font-bold">{total.expenses}</p>
              </div>
            </div>
            <div className="w-full bg-teal-300 hover:text-black hover:shadow-2xl mt-5 p-10 rounded-xl shadow-xl">
              Balance: <br />
              <p className="font-bold">{total.balance}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
