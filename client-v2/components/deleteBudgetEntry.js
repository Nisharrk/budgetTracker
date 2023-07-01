import React from "react";

const DeleteBudgetEntry = ({ id }) => {
  const handleClick = async () => {
    console.log(id);
    try {
      const response = await fetch(
        `https://weak-lime-springbok-boot.cyclic.app/api/budget/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // change this
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex float-right">
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mt-4"
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteBudgetEntry;
