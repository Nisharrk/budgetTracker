import React from "react";

const MonthFilter = () => {
  return (
    <div className="flex rounded-xl p-4">
      <select name="month" id="month">
        <option value="allTime">All Time</option>
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
    </div>
  );
};

export default MonthFilter;
