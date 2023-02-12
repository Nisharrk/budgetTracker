import React from "react";
import Router from "next/router";

const addBudgetButton = () => {
  const handleClick = () => {
    Router.push("/addBudgetEntry");
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-teal-600 font-semibold hover:bg-black text-white p-3 rounded-xl bottom-8 w-full"
        onClick={handleClick}
      >
        Add Budget Entry
      </button>
    </div>
  );
};

export default addBudgetButton;
